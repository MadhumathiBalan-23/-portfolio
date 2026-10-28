"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { profileData } from "@/data/profile";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for indicator
      const sections = navLinks.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-[#EAE5F8] py-2.5 sm:py-3"
          : "bg-white/85 backdrop-blur-sm py-3.5 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="#home"
            className="group flex items-center gap-2.5 text-xl font-bold tracking-tight text-[#172044] hover:text-[#6C3DE8] transition-colors"
          >
            <span className="w-9 h-9 rounded-xl bg-[#6C3DE8] text-white flex items-center justify-center font-extrabold text-lg shadow-sm shadow-[#6C3DE8]/30 group-hover:scale-105 transition-transform">
              M
            </span>
            <span className="text-[#172044]">
              Madhumathi <span className="text-[#6C3DE8]">B</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-[#6C3DE8] bg-[#F7F5FF] font-semibold"
                      : "text-[#566078] hover:text-[#6C3DE8] hover:bg-[#F7F5FF]/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={profileData.resumeUrl}
              download="Madhumathi_B_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#6C3DE8] hover:bg-[#5929D9] shadow-sm shadow-[#6C3DE8]/25 hover:shadow-md hover:shadow-[#6C3DE8]/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              title="Download Madhumathi's Resume"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={profileData.resumeUrl}
              download="Madhumathi_B_Resume.pdf"
              className="sm:hidden inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#F7F5FF] text-[#6C3DE8] border border-[#EAE5F8]"
              title="Download Resume"
              aria-label="Download Resume"
            >
              <Download className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-xl text-[#172044] hover:text-[#6C3DE8] hover:bg-[#F7F5FF] focus:outline-none focus:ring-2 focus:ring-[#6C3DE8]/20 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#EAE5F8] shadow-lg px-4 pt-2 pb-6 space-y-1 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "text-[#6C3DE8] bg-[#F7F5FF] font-semibold"
                      : "text-[#566078] hover:text-[#6C3DE8] hover:bg-[#F7F5FF]/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#EAE5F8] mt-3">
            <a
              href={profileData.resumeUrl}
              download="Madhumathi_B_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-[#6C3DE8] hover:bg-[#5929D9] shadow-sm shadow-[#6C3DE8]/25 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
