"use client";

import React from "react";
import {
  Layers,
  Server,
  Smartphone,
  Database,
  Wrench,
  Check,
} from "lucide-react";
import { skillCategories } from "@/data/skills";

const categoryIcons: Record<string, React.ElementType> = {
  "Frontend Development": Layers,
  "Backend Development": Server,
  "Mobile Development": Smartphone,
  "Database Systems": Database,
  "Developer Tools & Workflow": Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F5FF] border border-[#EAE5F8] text-[#6C3DE8] text-xs font-semibold tracking-wider uppercase">
            Technical Proficiency
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172044] tracking-tight">
            Skills &amp; Technologies
          </h2>
          <div className="w-10 h-1 bg-[#6C3DE8] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-[#566078] leading-relaxed pt-1 max-w-2xl mx-auto">
            A comprehensive overview of the modern programming languages, frameworks, and developer tools I utilize to craft full stack applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {skillCategories.map((categoryGroup) => {
            const Icon = categoryIcons[categoryGroup.category] || Layers;
            return (
              <div
                key={categoryGroup.category}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EAE5F8] shadow-2xs hover:shadow-xs hover:border-[#6C3DE8]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F7F5FF] text-[#6C3DE8] flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#172044]">
                        {categoryGroup.category}
                      </h3>
                    </div>
                  </div>

                  {categoryGroup.description && (
                    <p className="text-xs text-[#566078] mb-5">
                      {categoryGroup.description}
                    </p>
                  )}

                  {/* Pills Grid */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {categoryGroup.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                          skill.highlight
                            ? "bg-[#F7F5FF] text-[#6C3DE8] border border-[#EAE5F8] hover:border-[#6C3DE8]/40 hover:bg-[#F0EBFF]"
                            : "bg-gray-50 text-[#172044] border border-gray-100 hover:border-[#EAE5F8] hover:bg-[#F7F5FF]"
                        }`}
                      >
                        <Check className="w-3 h-3 text-[#6C3DE8]" />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
