"use client";

import React from "react";
import {
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  Workflow,
} from "lucide-react";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-12 lg:py-16 bg-[#F7F5FF] border-y border-[#EAE5F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#EAE5F8] text-[#6C3DE8] text-xs font-semibold tracking-wider uppercase">
            Career Journey
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172044] tracking-tight">
            Work Experience
          </h2>
          <div className="w-10 h-1 bg-[#6C3DE8] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-[#566078] leading-relaxed pt-1 max-w-2xl mx-auto">
            Professional track record of building production software, integrating backend APIs, and streamlining enterprise workflows.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp) => (
            <div key={exp.company} className="relative pl-6 sm:pl-9 pb-8 last:pb-0">
              {/* Vertical Timeline Guide Line */}
              <div
                className="absolute left-2 sm:left-3.5 top-3 bottom-0 w-0.5 bg-[#EAE5F8]"
                aria-hidden="true"
              />

              {/* Timeline Indicator Dot */}
              <div className="absolute left-0 sm:left-1 top-2.5 w-5 h-5 rounded-full bg-white border-4 border-[#6C3DE8] shadow-xs flex items-center justify-center z-10" />

              {/* Card Container */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EAE5F8] shadow-2xs hover:shadow-xs transition-all duration-300">
                {/* Header row: Designation & Period */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 mb-3.5 pb-3.5 border-b border-[#EAE5F8]">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#172044]">
                      {exp.designation}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm text-[#566078] mt-1">
                      <span className="inline-flex items-center gap-1.5 font-medium text-[#6C3DE8]">
                        <Building2 className="w-3.5 h-3.5" />
                        {exp.company}
                      </span>
                      <span className="hidden sm:inline text-gray-300">•</span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F5FF] border border-[#EAE5F8] text-[#6C3DE8] text-xs font-semibold self-start sm:self-center">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </div>
                </div>

                {/* Project Highlight */}
                <div className="mb-4 p-3.5 rounded-xl bg-[#F7F5FF]/80 border border-[#EAE5F8]">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#172044] mb-1">
                    <Workflow className="w-4 h-4 text-[#6C3DE8]" />
                    <span>Project: {exp.projectTitle}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#566078] leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Key Responsibilities */}
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#172044] mb-2.5">
                    Key Responsibilities &amp; Impact
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#566078] leading-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#6C3DE8] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
