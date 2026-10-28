import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { profileData } from "@/data/profile";
import BackToTop from "@/components/BackToTop";
import CurrentYear from "@/components/CurrentYear";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#172044] text-white pt-10 pb-8 border-t-2 border-[#6C3DE8]/30 relative overflow-hidden">
      {/* Subtle purple background ambient glow */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#6C3DE8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/10">
          {/* Brand info */}
          <div className="md:col-span-6 space-y-4">
            <Link href="#home" className="flex items-center gap-2.5 group">
              <span className="w-9 h-9 rounded-xl bg-[#6C3DE8] text-white flex items-center justify-center font-extrabold text-lg shadow-sm">
                M
              </span>
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#8B5CF6] transition-colors">
                Madhumathi <span className="text-[#8B5CF6]">B</span>
              </span>
            </Link>
            <p className="text-sm font-medium text-[#8B5CF6]">
              {profileData.role}
            </p>
            <p className="text-sm text-gray-300 max-w-md leading-relaxed">
              Dedicated to building robust enterprise applications, high-performance web systems, and delightful digital user interfaces.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B5CF6]">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-2 flex flex-col justify-between space-y-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B5CF6] mb-3">
                Connect
              </h4>
              <div className="flex gap-2">
                <a
                  href={profileData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#6C3DE8] hover:border-[#6C3DE8] transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={profileData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#6C3DE8] hover:border-[#6C3DE8] transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#6C3DE8] hover:border-[#6C3DE8] transition-all"
                  aria-label="Email Me"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <BackToTop />
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3">
          <p>
            &copy; <CurrentYear /> Madhumathi B. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Crafted with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
