"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { profileData } from "@/data/profile";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopyEmail = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(profileData.email);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
      }
    } catch {
      // Clipboard fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setFormStatus("submitting");

    // Compose mailto as fallback and direct email link
    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 600);
  };

  return (
    <section id="contact" className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F5FF] border border-[#EAE5F8] text-[#6C3DE8] text-xs font-semibold tracking-wider uppercase">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172044] tracking-tight">
            Let&apos;s Connect
          </h2>
          <div className="w-10 h-1 bg-[#6C3DE8] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-[#566078] leading-relaxed pt-1 max-w-2xl mx-auto">
            Feel free to reach out for opportunities, collaborations, or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start max-w-5xl mx-auto">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-lg font-bold text-[#172044] mb-1">
              Contact Information
            </h3>
            <p className="text-xs sm:text-sm text-[#566078] mb-4">
              I am open to full stack software development roles, discussions on ERP engineering, and new challenges.
            </p>

            {/* Email Card */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#F7F5FF] border border-[#EAE5F8] flex items-center justify-between group hover:border-[#6C3DE8]/40 transition-all">
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-3 flex-1 min-w-0"
              >
                <div className="w-9 h-9 rounded-lg bg-white text-[#6C3DE8] border border-[#EAE5F8] flex items-center justify-center shrink-0 group-hover:bg-[#6C3DE8] group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-semibold text-[#566078] block">Email Me</span>
                  <span className="text-xs sm:text-sm font-bold text-[#172044] group-hover:text-[#6C3DE8] truncate block transition-colors">
                    {profileData.email}
                  </span>
                </div>
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg bg-white border border-[#EAE5F8] text-[#566078] hover:text-[#6C3DE8] ml-2 shrink-0 transition-colors"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone Card */}
            <a
              href={`tel:${profileData.phone.replace(/\s+/g, "")}`}
              className="p-3.5 sm:p-4 rounded-xl bg-[#F7F5FF] border border-[#EAE5F8] flex items-center gap-3 group hover:border-[#6C3DE8]/40 transition-all block"
            >
              <div className="w-9 h-9 rounded-lg bg-white text-[#6C3DE8] border border-[#EAE5F8] flex items-center justify-center shrink-0 group-hover:bg-[#6C3DE8] group-hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-[#566078] block">Call / WhatsApp</span>
                <span className="text-xs sm:text-sm font-bold text-[#172044] group-hover:text-[#6C3DE8] transition-colors">
                  {profileData.phone}
                </span>
              </div>
            </a>

            {/* Location Card */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#F7F5FF] border border-[#EAE5F8] flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white text-[#6C3DE8] border border-[#EAE5F8] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-[#566078] block">Location</span>
                <span className="text-xs sm:text-sm font-bold text-[#172044]">
                  {profileData.location}
                </span>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-2">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#172044] mb-2">
                Professional Profiles
              </h4>
              <div className="flex gap-2.5">
                <a
                  href={profileData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#F7F5FF] border border-[#EAE5F8] text-[#172044] hover:text-[#6C3DE8] hover:border-[#6C3DE8]/40 transition-all text-xs sm:text-sm font-semibold"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={profileData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#F7F5FF] border border-[#EAE5F8] text-[#172044] hover:text-[#6C3DE8] hover:border-[#6C3DE8]/40 transition-all text-xs sm:text-sm font-semibold"
                >
                  <GithubIcon className="w-4 h-4 text-[#172044]" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#F7F5FF] border border-[#EAE5F8] p-5 sm:p-6 rounded-2xl shadow-2xs">
            <h3 className="text-lg font-bold text-[#172044] mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-[#566078] mb-4">
              Fill out the form below to initiate direct communication with me.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-bold text-[#172044] uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Chen"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EAE5F8] text-xs sm:text-sm text-[#172044] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C3DE8]/20 focus:border-[#6C3DE8] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[11px] font-bold text-[#172044] uppercase tracking-wider mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EAE5F8] text-xs sm:text-sm text-[#172044] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C3DE8]/20 focus:border-[#6C3DE8] transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-[11px] font-bold text-[#172044] uppercase tracking-wider mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Software Developer Opportunity / Discussion"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EAE5F8] text-xs sm:text-sm text-[#172044] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C3DE8]/20 focus:border-[#6C3DE8] transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] font-bold text-[#172044] uppercase tracking-wider mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Madhumathi, I would like to discuss..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EAE5F8] text-xs sm:text-sm text-[#172044] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C3DE8]/20 focus:border-[#6C3DE8] transition-all resize-none"
                />
              </div>

              {formStatus === "error" && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 text-red-600 text-xs border border-red-200">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {formStatus === "success" && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-50 text-emerald-700 text-xs border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you! Your email client has been prepared. I look forward to speaking with you!</span>
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#6C3DE8] hover:bg-[#5929D9] shadow-md shadow-[#6C3DE8]/25 hover:shadow-lg hover:shadow-[#6C3DE8]/30 transition-all duration-200 disabled:opacity-70 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{formStatus === "submitting" ? "Opening Email..." : "Send Message"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
