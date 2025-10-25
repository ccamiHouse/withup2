"use client";

import Hero from "@/components/modules/Hero";
import Features from "@/components/modules/Features";
import HowItWorks from "@/components/modules/HowItWorks";
import Stats from "@/components/modules/Stats";
import CTA from "@/components/modules/CTA";

export default function GuestHome() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <CTA />
    </main>
  );
}
