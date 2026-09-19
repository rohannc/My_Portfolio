<script setup>
import { personalInfo } from "../data/portfolioData.js";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <footer class="border-t border-white/5 py-10 bg-slate-950/90 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-6">
        <!-- Left Column: Branding & Role -->
        <div class="flex items-center justify-center md:justify-start gap-3 text-center md:text-left">
          <span class="text-sm font-semibold text-white tracking-tight">
            {{ personalInfo.name }}
          </span>
          <span class="text-xs text-slate-600 hidden sm:inline">|</span>
          <span class="text-xs text-slate-400 font-mono">
            Software Engineer at <span class="visa-highlight">Visa</span>
          </span>
        </div>

        <!-- Center Column: Stylized Back to Top Button -->
        <div class="flex items-center justify-center">
          <button
            @click="scrollToTop"
            type="button"
            class="group inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-xs font-mono font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/50 shadow-md hover:shadow-cyan-500/20 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <span>Back to Top</span>
            <div class="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
              <svg class="w-3 h-3 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
              </svg>
            </div>
          </button>
        </div>

        <!-- Right Column: Copyright Notice (Right Aligned) -->
        <div class="text-center md:text-right">
          <p class="text-xs text-slate-500 font-normal">
            © 2025 {{ personalInfo.name }}. Designed with precision.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>