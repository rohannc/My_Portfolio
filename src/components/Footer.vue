<script setup>
import { personalInfo } from "../data/portfolioData.js";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <footer class="border-t border-white/5 py-10 bg-slate-950/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <span class="text-sm font-semibold text-white">
          {{ personalInfo.name }}
        </span>
        <span class="text-xs text-slate-500 hidden sm:inline">|</span>
        <span class="text-xs text-slate-400 font-mono">
          Software Engineer @ Visa
        </span>
      </div>

      <p class="text-xs text-slate-500 text-center sm:text-left">
        © 2025 {{ personalInfo.name }}. Designed with precision.
      </p>

      <button
        @click="scrollToTop"
        type="button"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-white bg-slate-900/60 border border-white/5 hover:border-white/20 transition-colors"
      >
        <span>Back to Top</span>
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
        </svg>
      </button>
    </div>
  </footer>
</template>