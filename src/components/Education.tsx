"use client";

import React from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { educationList } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-12 lg:py-16 bg-[#F7F5FF] border-y border-[#EAE5F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#EAE5F8] text-[#6C3DE8] text-xs font-semibold tracking-wider uppercase">
            Qualifications
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172044] tracking-tight">
            Academic Background
          </h2>
          <div className="w-10 h-1 bg-[#6C3DE8] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-[#566078] leading-relaxed pt-1 max-w-2xl mx-auto">
            My academic foundation in computer applications and design, supporting continuous growth in engineering.
          </p>
        </div>

        {/* Timeline: Horizontal on Desktop (lg), Vertical on Mobile */}
        <div className="relative">
          {/* Horizontal line for desktop */}
          <div
            className="hidden lg:block absolute top-10 left-16 right-16 h-0.5 bg-[#EAE5F8] z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 relative z-10">
            {educationList.map((item) => (
              <div
                key={item.degree}
                className="group relative flex flex-col rounded-2xl bg-white border border-[#EAE5F8] p-5 sm:p-6 shadow-2xs hover:shadow-xs hover:border-[#6C3DE8]/30 transition-all duration-300"
              >
                {/* Timeline node icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F5FF] text-[#6C3DE8] group-hover:bg-[#6C3DE8] group-hover:text-white flex items-center justify-center transition-colors duration-200 shadow-2xs">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F7F5FF] border border-[#EAE5F8] text-[#6C3DE8] text-xs font-semibold">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {item.status && (
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#8B5CF6] mb-1">
                        {item.status}
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-[#172044] leading-snug mb-2 group-hover:text-[#6C3DE8] transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-sm text-[#566078] font-medium mb-4">
                      {item.institution}
                    </p>
                  </div>

                  {/* Grade Badge */}
                  {item.grade && (
                    <div className="pt-3 border-t border-[#EAE5F8] flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#6C3DE8]" />
                      <span className="text-xs font-medium text-[#566078]">
                        {item.gradeLabel}:
                      </span>
                      <span className="text-xs font-bold text-[#172044] px-2 py-0.5 rounded-md bg-[#F7F5FF] border border-[#EAE5F8]">
                        {item.grade}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
