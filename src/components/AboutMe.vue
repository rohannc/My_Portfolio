<script setup>
import { ref } from "vue";
import { personalInfo } from "../data/portfolioData.js";
import codolioStats from "../data/codolioStats.json";



const openResume = () => {
  window.open(personalInfo.resumeUrl, "_blank");
};

const downloadResume = () => {
  window.open(personalInfo.resumeDownloadUrl, "_blank");
};

const openCodolio = () => {
  window.open(personalInfo.codolioUrl, "_blank");
};
</script>

<template>
  <section id="about" class="scroll-mt-20 relative pt-24 pb-12 md:pt-32 md:pb-14 overflow-hidden bg-mesh bg-grid">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Top Hero Section -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        <!-- Left: Text & Pitch -->
        <div class="lg:col-span-7 flex flex-col items-start text-left">
          <!-- Role & Status Pill: Reversed Fonts -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-xs mb-4 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span class="font-mono text-cyan-300">Software Engineer at <span class="visa-highlight">Visa</span></span>
            <span class="text-slate-500">·</span>
            <span class="font-sans font-semibold text-white">Master of Computer Applications, Jadavpur University</span>
          </div>

          <!-- Headline -->
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-3">
            Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">Rohan Chakraborty</span>
          </h1>

          <p class="text-base sm:text-lg font-medium text-slate-200 mb-4">
            Software Engineer at <span class="visa-highlight">Visa</span> in Bengaluru · AI & Agentic Systems
          </p>

          <!-- Bio with Visa experience and competitive background -->
          <div class="space-y-3 text-slate-400 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
            <p>
              I am a Software Engineer at <span class="visa-highlight">Visa</span> in Bengaluru, having completed my <span class="text-cyan-300 font-medium">Master of Computer Applications</span> degree from <span class="text-white font-medium">Jadavpur University</span>.
            </p>
            <p>
              During my journey at <span class="visa-highlight">Visa</span>, I focused on optimizing the SDLC by engineering <span class="text-cyan-300 font-medium">Autonomous AI Agents</span> ( Python, LangGraph, MCP ) and building secure, <span class="text-indigo-300 font-medium">CI/CD pipelines with Human-In-The-Loop</span> to automate vulnerability remediation and accelerate feature delivery.
            </p>
            <p>
              Beyond enterprise software, I am deeply passionate about competitive programming, hackathons, and analytical problem-solving — holding <span class="text-amber-300 font-semibold">Rank 17 in WBJECA</span>, over {{ codolioStats.totalSolved }} solved DSA challenges, and multiple collegiate coding championship victories.
            </p>
          </div>

          <!-- CTAs -->
          <div class="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <a
              href="#projects"
              class="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 transition-all duration-200 shadow-md shadow-indigo-500/25"
            >
              Explore Featured Project
            </a>

            <button
              @click="downloadResume"
              type="button"
              class="inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-indigo-500/40 transition-all duration-200"
            >
              <svg class="mr-2 w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Download Resume
            </button>

            <button
              @click="openCodolio"
              type="button"
              class="inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-300 bg-slate-900/50 hover:bg-slate-800 border border-white/5 hover:border-white/20 transition-all duration-200"
              title="View Codolio Profile"
            >
              <span>Codolio Profile</span>
              <svg class="ml-1.5 w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Right: Modern Full-Box Portrait + Maven pom.xml Dossier -->
        <div class="lg:col-span-5 flex justify-center">
          <div class="relative w-full max-w-md">
            <!-- Ambient Glow Aura -->
            <div class="absolute -inset-2 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-cyan-500/20 to-purple-500/20 blur-2xl"></div>

            <div class="relative glass-card rounded-3xl p-5 sm:p-6 border border-white/10 shadow-2xl space-y-4">
              <!-- Top Profile Layout: Square Image Fitted Edge-to-Edge + Bio Details -->
              <div class="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 p-4 rounded-2xl bg-slate-900/80 border border-white/5">
                <!-- Square Fitted Image (Slightly Enlarged & Shifted Slightly Left) -->
                <div class="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden flex-shrink-0 ring-2 ring-indigo-500/50 shadow-xl group bg-slate-950 sm:-ml-1.5">
                  <img
                    src="../assets/ProfileImage.jpg"
                    alt="Rohan Chakraborty"
                    class="w-full h-full object-cover object-[center_12%] group-hover:scale-105 transition-transform duration-300"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none"></div>
                </div>

                <!-- Identity info (Without redundant heading, Bengaluru on next line) -->
                <div class="flex-1 min-w-0 text-center sm:text-left self-center sm:self-start">
                  <h2 class="text-xl sm:text-2xl font-bold text-white leading-snug">{{ personalInfo.name }}</h2>
                  <p class="text-xs text-indigo-300 font-mono mt-1">
                    Software Engineer at <span class="visa-highlight">Visa</span>
                  </p>
                  <p class="text-xs text-slate-400 font-mono mt-0.5">
                    Bengaluru
                  </p>
                </div>
              </div>

              <!-- Metric Badges Row -->
              <div class="grid grid-cols-2 gap-2">
                <div class="p-2.5 rounded-xl bg-slate-900/60 border border-amber-500/25 flex items-center gap-2.5">
                  <div class="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-sm">
                    🏆
                  </div>
                  <div class="min-w-0">
                    <span class="block text-[10px] font-mono text-slate-400 uppercase">Entrance Exam</span>
                    <span class="text-xs font-bold text-amber-300 font-mono truncate block">Rank 17 · WBJECA</span>
                  </div>
                </div>

                <div class="p-2.5 rounded-xl bg-slate-900/60 border border-cyan-500/25 flex items-center gap-2.5">
                  <div class="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold text-sm">
                    ⚡
                  </div>
                  <div class="min-w-0">
                    <span class="block text-[10px] font-mono text-slate-400 uppercase">Competitive DSA</span>
                    <span class="text-xs font-bold text-cyan-300 font-mono truncate block">{{ codolioStats.totalSolved }} Solved</span>
                  </div>
                </div>
              </div>

              <!-- Terminal Dossier Card: pom.xml -->
              <div class="rounded-2xl bg-slate-950/95 border border-white/10 overflow-hidden font-mono text-xs shadow-inner">
                <!-- Terminal Titlebar -->
                <div class="px-3.5 py-2 bg-slate-900/90 border-b border-white/5 flex items-center justify-between">
                  <div class="flex items-center gap-1.5">
                    <span class="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span class="ml-2 text-[11px] text-slate-400 font-mono">pom.xml</span>
                  </div>
                </div>

                <!-- Code Body: XML Format -->
                <div class="p-3 text-[11px] leading-relaxed text-slate-300 space-y-0.5 select-all overflow-x-auto">
                  <div><span class="text-indigo-400">&lt;developer&gt;</span></div>
                  <div class="pl-3">
                    <span class="text-indigo-400">&lt;name&gt;</span><span class="text-emerald-300">Rohan Chakraborty</span><span class="text-indigo-400">&lt;/name&gt;</span>
                  </div>
                  <div class="pl-3">
                    <span class="text-indigo-400">&lt;role&gt;</span><span class="text-cyan-300">Software Engineer at </span><span class="visa-highlight">Visa</span><span class="text-indigo-400">&lt;/role&gt;</span>
                  </div>
                  <div class="pl-3">
                    <span class="text-indigo-400">&lt;education&gt;</span><span class="text-amber-300">Master of Computer Applications</span><span class="text-indigo-400">&lt;/education&gt;</span>
                  </div>
                  <div class="pl-3">
                    <span class="text-indigo-400">&lt;university&gt;</span><span class="text-slate-200">Jadavpur University</span><span class="text-indigo-400">&lt;/university&gt;</span>
                  </div>
                  <div class="pl-3">
                    <span class="text-indigo-400">&lt;rank&gt;</span><span class="text-purple-300">Rank 17 (WBJECA)</span><span class="text-indigo-400">&lt;/rank&gt;</span>
                  </div>
                  <div><span class="text-indigo-400">&lt;/developer&gt;</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Stats Counter Grid: Sleek modern font styling -->
      <div class="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div
          v-for="stat in personalInfo.stats"
          :key="stat.label"
          class="glass-card glass-card-hover rounded-2xl p-4 sm:p-5 text-center sm:text-left border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
        >
          <span
            class="font-space text-2xl sm:text-3xl font-bold tracking-tight block"
            :class="stat.value === 'Visa' ? 'visa-highlight' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-200 to-white'"
          >
            {{ stat.value }}
          </span>
          <span class="block text-xs font-outfit font-semibold tracking-wider text-slate-200 uppercase mt-2">
            {{ stat.label }}
          </span>
          <span class="block text-[11px] sm:text-xs text-slate-400 font-sans mt-1 leading-snug">
            {{ stat.desc }}
          </span>
        </div>
      </div>

      <!-- Core Pillars / What I Focus On -->
      <div class="mt-12">
        <div class="text-center max-w-xl mx-auto mb-6">
          <span class="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">Core Engineering Pillars</span>
          <h2 class="text-2xl sm:text-3xl font-bold text-white mt-1">What I Bring to the Table</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <!-- Pillar 1: Agentic AI & SDLC Automation -->
          <div class="glass-card glass-card-hover rounded-2xl p-5 sm:p-6 border-t-2 border-t-cyan-500">
            <div class="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-base font-bold text-white mb-1.5">Agentic AI & SDLC Automation</h3>
            <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Engineering autonomous AI agents (Python, LangGraph, Model Context Protocol) and Human-In-The-Loop CI/CD pipelines at <span class="visa-highlight">Visa</span> to remediate vulnerabilities and accelerate releases.
            </p>
          </div>

          <!-- Pillar 2: Computer Vision & Forensic AI -->
          <div class="glass-card glass-card-hover rounded-2xl p-5 sm:p-6 border-t-2 border-t-indigo-500">
            <div class="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 class="text-base font-bold text-white mb-1.5">Computer Vision & Forensics</h3>
            <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Deep experience in image forensic verification, Error Level Analysis (ELA), and dual-stream CNNs — achieving 99.98% validation accuracy on DeepFake detection benchmarks.
            </p>
          </div>

          <!-- Pillar 3: Competitive Programming & DSA -->
          <div class="glass-card glass-card-hover rounded-2xl p-5 sm:p-6 border-t-2 border-t-purple-500">
            <div class="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
            </div>
            <h3 class="text-base font-bold text-white mb-1.5">Competitive Problem Solving</h3>
            <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {{ codolioStats.totalSolved }} solved problems across LeetCode and GeeksforGeeks, Rank 17 in WBJECA 2024, and 9+ contest milestones across regional hackathons and mystery-solving championships.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
