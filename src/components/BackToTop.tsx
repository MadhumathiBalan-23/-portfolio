"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      type="button"
      className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors cursor-pointer self-start"
      aria-label="Scroll back to top of the page"
    >
      <ArrowUp className="w-3.5 h-3.5 text-[#8B5CF6]" />
      <span>Back to top</span>
    </button>
  );
}
