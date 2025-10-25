"use client";

import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Custom icon
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Component to handle map clicks
function MapClickHandler({ onLocationSelect }) {
  const map = useMap();

  useEffect(() => {
    const handleClick = async (e) => {
      const { lat, lng } = e.latlng;
      
      // Reverse geocode to get address
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`,
          {
            headers: {
              'User-Agent': 'WithUp Study App'
            }
          }
        );
        const data = await response.json();
        const address = data.display_name || `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
        
        onLocationSelect(lat, lng, address);
      } catch (error) {
        console.error("Geocoding error:", error);
        onLocationSelect(lat, lng, `${lat.toFixed(6)}, ${lng.toFixed(6)}`);
      }
    };

    map.on("click", handleClick);
    map.doubleClickZoom.disable();

    return () => {
      map.off("click", handleClick);
      map.doubleClickZoom.enable();
    };
  }, [map, onLocationSelect]);

  return null;
}

// Component to handle search
function SearchHandler({ searchQuery }) {
  const map = useMap();
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (!searchQuery || searchQuery.length < 2) return;

    const searchLocation = async () => {
      setIsSearching(true);
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&limit=1&countrycodes=kr`,
          {
            headers: {
              'User-Agent': 'WithUp Study App'
            }
          }
        );
        const data = await response.json();
        
        if (data.length > 0) {
          const result = data[0];
          const lat = parseFloat(result.lat);
          const lon = parseFloat(result.lon);
          
          map.setView([lat, lon], 15);
        }
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setIsSearching(false);
      }
    };

    // Debounce search
    const timer = setTimeout(searchLocation, 500);
    return () => clearTimeout(timer);
  }, [searchQuery, map]);

  return null;
}

export default function MapComponent({ onLocationSelect, searchQuery = "" }) {
  const [position, setPosition] = useState([37.5665, 126.9780]); // Default to Seoul
  const [markerPosition, setMarkerPosition] = useState(null);

  useEffect(() => {
    // Get user's current location if available
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
        },
        () => {
          console.log("Geolocation not available");
        }
      );
    }
  }, []);

  const handleMapClick = (lat, lng, address) => {
    setMarkerPosition([lat, lng]);
    if (onLocationSelect) {
      onLocationSelect(lat, lng, address);
    }
  };

  return (
    <div className="relative w-full h-full">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapClickHandler onLocationSelect={handleMapClick} />
        <SearchHandler searchQuery={searchQuery} />
        
        {markerPosition && (
          <Marker position={markerPosition} icon={customIcon}>
            <Popup>
              선택한 위치
              <br />
              {markerPosition[0].toFixed(6)}, {markerPosition[1].toFixed(6)}
            </Popup>
          </Marker>
        )}
      </MapContainer>
      
      <div className="absolute bottom-4 left-4 bg-white px-3 py-2 rounded-lg shadow-lg z-1000 pointer-events-none">
        <p className="text-sm text-gray-600">지도를 클릭하여 위치를 선택하세요</p>
      </div>
    </div>
  );
}
