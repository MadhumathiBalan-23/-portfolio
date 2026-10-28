"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Sparkles,
  X,
  Tag,
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { projects } from "@/data/projects";
import { ProjectItem } from "@/types/portfolio";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F5FF] border border-[#EAE5F8] text-[#6C3DE8] text-xs font-semibold tracking-wider uppercase">
            Portfolio Highlights
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172044] tracking-tight">
            Featured Projects
          </h2>
          <div className="w-10 h-1 bg-[#6C3DE8] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-[#566078] leading-relaxed pt-1 max-w-2xl mx-auto">
            A curated selection of real-world enterprise ERP applications, full stack web systems, and data-driven solutions I have developed.
          </p>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl bg-white border border-[#EAE5F8] overflow-hidden shadow-2xs hover:shadow-xs hover:border-[#6C3DE8]/40 transition-all duration-300"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F7F5FF] border-b border-[#EAE5F8]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                />
                {/* Category Pill Tag Overlay */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-xs font-bold text-[#6C3DE8] border border-[#EAE5F8] shadow-2xs">
                    <Sparkles className="w-3 h-3 text-[#6C3DE8]" />
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#172044] mb-2 group-hover:text-[#6C3DE8] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#566078] leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-[#F7F5FF] text-[#6C3DE8] text-xs font-semibold border border-[#EAE5F8]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action footer */}
                  <div className="pt-3 border-t border-[#EAE5F8] flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6C3DE8] hover:text-[#5929D9] transition-colors group/btn"
                    >
                      <span>Explore Overview</span>
                      <span className="transform group-hover/btn:translate-x-0.5 transition-transform">&rarr;</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-[#F7F5FF] border border-[#EAE5F8] text-[#172044] hover:text-[#6C3DE8] hover:border-[#6C3DE8]/30 transition-colors"
                          title="View Repository"
                          aria-label="View Source Code"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-[#F7F5FF] border border-[#EAE5F8] text-[#172044] hover:text-[#6C3DE8] hover:border-[#6C3DE8]/30 transition-colors"
                          title="Live Demo"
                          aria-label="View Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#EAE5F8] max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#F7F5FF] text-[#172044] hover:text-[#6C3DE8] hover:bg-[#EAE5F8] transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 border border-[#EAE5F8]">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#F7F5FF] text-[#6C3DE8] text-xs font-bold border border-[#EAE5F8]">
                  {selectedProject.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#172044]">
                {selectedProject.title}
              </h3>

              <p className="text-base text-[#566078] leading-relaxed">
                {selectedProject.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#172044] mb-2 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-[#6C3DE8]" />
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-[#F7F5FF] text-[#6C3DE8] text-xs font-semibold border border-[#EAE5F8]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAE5F8] flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#6C3DE8] text-white text-sm font-semibold hover:bg-[#5929D9] transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
