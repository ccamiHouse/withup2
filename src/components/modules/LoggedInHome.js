"use client";

import { useState } from "react";
import { 
  MapPin, BookOpen, Users, Award, TrendingUp,
  Search, Plus
} from "lucide-react";
import Link from "next/link";

export default function LoggedInHome() {
  const [activeTab, setActiveTab] = useState("available");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for available studies
  const availableStudies = [
    {
      id: 1,
      title: "React 심화 스터디",
      location: "강남역",
      distance: "500m",
      members: 8,
      maxMembers: 10,
      tags: ["React", "프론트엔드"]
    },
    {
      id: 2,
      title: "AWS 클라우드 자격증",
      location: "홍대입구",
      distance: "1.2km",
      members: 12,
      maxMembers: 15,
      tags: ["AWS", "클라우드"]
    },
    {
      id: 3,
      title: "디자인 시스템 구축",
      location: "온라인",
      distance: "",
      members: 6,
      maxMembers: 8,
      tags: ["디자인", "UX"]
    }
  ];

  const stats = [
    { label: "활성 스터디", value: "128+", icon: BookOpen, color: "blue" },
    { label: "참여 멤버", value: "1,200+", icon: Users, color: "purple" },
    { label: "완료된 스터디", value: "500+", icon: Award, color: "yellow" },
    { label: "만족도", value: "4.9", icon: TrendingUp, color: "green" }
  ];

  // Filter studies based on search query
  const filteredStudies = availableStudies.filter((study) => {
    if (!searchQuery) return true;
    
    const query = searchQuery.toLowerCase();
    return (
      study.title.toLowerCase().includes(query) ||
      study.location.toLowerCase().includes(query) ||
      study.tags.some(tag => tag.toLowerCase().includes(query))
    );
  });

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 bg-gray-50">
      
    </main>
  );
}
