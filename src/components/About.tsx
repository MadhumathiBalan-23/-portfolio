"use client";

import React from "react";
import { Code2, Cpu, Sparkles, CheckCircle2 } from "lucide-react";
import { profileData, aboutFeatures } from "@/data/profile";

const iconMap = {
  Code2: Code2,
  Cpu: Cpu,
  Sparkles: Sparkles,
};

export default function About() {
  return (
    <section id="about" className="py-12 lg:py-16 bg-[#F7F5FF] border-y border-[#EAE5F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#EAE5F8] text-[#6C3DE8] text-xs font-semibold tracking-wider uppercase">
            About Me
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172044] tracking-tight">
            {profileData.aboutTitle}
          </h2>
          <div className="w-10 h-1 bg-[#6C3DE8] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-[#566078] leading-relaxed pt-1 max-w-2xl mx-auto">
            {profileData.aboutText}
          </p>
        </div>

        {/* 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {aboutFeatures.map((feature) => {
            const Icon = iconMap[feature.iconName as keyof typeof iconMap] || CheckCircle2;
            return (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-[#EAE5F8] shadow-2xs hover:shadow-xs hover:border-[#6C3DE8]/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F7F5FF] group-hover:bg-[#6C3DE8] text-[#6C3DE8] group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-4 shadow-2xs">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#172044] mb-2 group-hover:text-[#6C3DE8] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#566078] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
