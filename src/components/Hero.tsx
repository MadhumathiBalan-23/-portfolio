"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Briefcase,
  Download,
  ArrowRight,
  Globe,
  Server,
  Smartphone,
  Database,
  Code2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { profileData } from "@/data/profile";

export default function Hero() {
  const techCards = [
    {
      title: "Web Development",
      stack: "React.js • Next.js • TS",
      icon: Globe,
      color: "text-[#6C3DE8] bg-[#F7F5FF] border-[#EAE5F8]",
    },
    {
      title: "Backend Development",
      stack: "C# • .NET Web API • Node.js",
      icon: Server,
      color: "text-[#8B5CF6] bg-[#F7F5FF] border-[#EAE5F8]",
    },
    {
      title: "Mobile Development",
      stack: "React Native",
      icon: Smartphone,
      color: "text-[#6C3DE8] bg-[#F7F5FF] border-[#EAE5F8]",
    },
    {
      title: "Database Management",
      stack: "PostgreSQL • SQL Server",
      icon: Database,
      color: "text-[#8B5CF6] bg-[#F7F5FF] border-[#EAE5F8]",
    },
  ];

  return (
    <section
      id="home"
      className="relative pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden bg-white"
    >
      {/* Decorative background accents (subtle, non-distracting) */}
      <div className="absolute top-10 right-0 -z-10 w-80 h-80 bg-[#F7F5FF] rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-10 w-72 h-72 bg-[#EAE5F8]/30 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Bio & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            {/* Small Greeting Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F5FF] border border-[#EAE5F8] text-[#6C3DE8] text-xs font-semibold tracking-wider uppercase w-fit">
              <span className="w-2 h-2 rounded-full bg-[#6C3DE8] animate-pulse" />
              {profileData.greeting}
            </div>

            {/* Name & Role */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172044] tracking-tight leading-[1.15]">
                {profileData.name}
              </h1>
              <div className="flex items-center gap-2 pt-0.5">
                <span className="p-1 rounded-md bg-[#F7F5FF] text-[#6C3DE8] border border-[#EAE5F8]">
                  <Code2 className="w-4 h-4 text-[#6C3DE8]" />
                </span>
                <p className="text-lg sm:text-xl font-bold text-[#6C3DE8] tracking-tight">
                  {profileData.role}
                </p>
              </div>
            </div>

            {/* Quick Metadata Badges */}
            <div className="flex flex-wrap gap-2 text-xs text-[#566078]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F7F5FF] border border-[#EAE5F8] text-[#172044] font-medium shadow-2xs">
                <Briefcase className="w-3.5 h-3.5 text-[#6C3DE8]" />
                <span>Experience: <strong className="font-bold text-[#6C3DE8]">{profileData.experienceYears}</strong></span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F7F5FF] border border-[#EAE5F8] text-[#172044] font-medium shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-[#6C3DE8]" />
                <span>{profileData.location}</span>
              </span>
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F7F5FF] border border-[#EAE5F8] text-[#172044] font-medium hover:text-[#6C3DE8] hover:border-[#6C3DE8]/40 transition-colors shadow-2xs"
              >
                <Mail className="w-3.5 h-3.5 text-[#6C3DE8]" />
                <span>{profileData.email}</span>
              </a>
            </div>

            {/* Introduction Paragraph */}
            <p className="text-sm sm:text-base text-[#566078] leading-relaxed max-w-xl">
              {profileData.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#6C3DE8] hover:bg-[#5929D9] shadow-sm shadow-[#6C3DE8]/25 hover:shadow-md hover:shadow-[#6C3DE8]/30 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={profileData.resumeUrl}
                download="Madhumathi_B_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-[#172044] bg-white border border-[#EAE5F8] hover:bg-[#F7F5FF] hover:border-[#6C3DE8]/40 hover:text-[#6C3DE8] shadow-2xs transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#6C3DE8]" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 pt-1 text-[#566078]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#566078]">
                Connect:
              </span>
              <a
                href={profileData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#F7F5FF] border border-[#EAE5F8] text-[#172044] hover:text-[#6C3DE8] hover:border-[#6C3DE8]/40 hover:scale-105 transition-all"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={profileData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#F7F5FF] border border-[#EAE5F8] text-[#172044] hover:text-[#6C3DE8] hover:border-[#6C3DE8]/40 hover:scale-105 transition-all"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="p-2 rounded-lg bg-[#F7F5FF] border border-[#EAE5F8] text-[#172044] hover:text-[#6C3DE8] hover:border-[#6C3DE8]/40 hover:scale-105 transition-all"
                title="Send Email"
                aria-label="Send Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Professional Illustration & Floating Tech Cards */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            {/* Main Illustration Container */}
            <div className="relative w-full max-w-sm mx-auto aspect-square rounded-2xl bg-gradient-to-b from-[#F7F5FF] to-white p-2.5 border border-[#EAE5F8] shadow-xs">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-white">
                <Image
                  src="/images/developer-hero.jpg"
                  alt="Madhumathi B - Software Developer Illustration"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 380px"
                />
              </div>
            </div>

            {/* Technology Cards Grid */}
            <div className="w-full max-w-sm grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
              {techCards.map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <div
                    key={tech.title}
                    className="p-3 rounded-xl bg-white border border-[#EAE5F8] shadow-2xs hover:border-[#6C3DE8]/40 hover:shadow-xs transition-all duration-200 transform hover:-translate-y-0.5 group"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="p-1.5 rounded-lg bg-[#F7F5FF] text-[#6C3DE8] group-hover:bg-[#6C3DE8] group-hover:text-white transition-colors">
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-xs font-bold text-[#172044] leading-tight">
                        {tech.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-[#566078] font-medium leading-tight pl-0.5">
                      {tech.stack}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
