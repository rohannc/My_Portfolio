<script setup>
import { ref } from "vue";
import { personalInfo } from "../data/portfolioData.js";

const copied = ref(false);

const copySnippet = () => {
  const code = `const engineer = {
  name: "${personalInfo.name}",
  company: "Visa",
  role: "Software Engineer",
  location: "Bengaluru, India",
  education: "MCA @ Jadavpur University",
  focus: ["Autonomous AI Agents", "LangGraph", "MCP"],
  sdlc: "Human-In-The-Loop CI/CD & Remediation",
  rank: "AIR 17 (WBJECA 2024)",
  dsaSolved: "450+ problems"
};`;
  navigator.clipboard.writeText(code).then(() => {
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  });
};

const openResume = () => {
  window.open(personalInfo.resumeUrl, "_blank");
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
          <!-- Role & Status Pill -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-4 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span class="font-semibold text-white">Software Engineer @ Visa</span>
            <span class="text-slate-500">·</span>
            <span class="text-cyan-300 font-mono">MCA @ Jadavpur University</span>
          </div>

          <!-- Headline -->
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-3">
            Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">Rohan Chakraborty</span>
          </h1>

          <p class="text-base sm:text-lg font-medium text-slate-200 mb-4">
            Software Engineer at <span class="text-indigo-400 font-semibold">Visa</span> in Bengaluru · AI & Agentic Systems Enthusiast
          </p>

          <!-- Bio with Visa experience and competitive background -->
          <div class="space-y-3 text-slate-400 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
            <p>
              I am a Software Engineer at <span class="text-white font-medium">Visa</span> in Bengaluru, having completed my Master of Computer Applications (MCA) degree from <span class="text-white font-medium">Jadavpur University</span>.
            </p>
            <p>
              During my journey at Visa, I focused on optimizing the SDLC by engineering <span class="text-cyan-300 font-medium">autonomous AI agents</span> (Python, LangGraph, MCP) and building secure, <span class="text-indigo-300 font-medium">Human-In-The-Loop CI/CD pipelines</span> to automate vulnerability remediation and accelerate feature delivery.
            </p>
            <p class="text-xs sm:text-sm text-slate-400">
              Beyond enterprise software, I am deeply passionate about competitive programming, hackathons, and analytical problem-solving — holding <span class="text-amber-300 font-semibold">General Merit Rank 17 in WBJECA</span>, over 450 solved DSA challenges, and multiple collegiate coding championship victories.
            </p>
          </div>

          <!-- CTAs -->
          <div class="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <a
              href="#projects"
              class="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 transition-all duration-200 shadow-md shadow-indigo-500/25"
            >
              Explore Featured Project
              <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            <button
              @click="openResume"
              type="button"
              class="inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-indigo-500/40 transition-all duration-200"
            >
              <svg class="mr-2 w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Resume (PDF)
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

        <!-- Right: Enhanced Profile Card with Medium Sized Image & Code Dossier -->
        <div class="lg:col-span-5 flex justify-center">
          <div class="relative w-full max-w-md">
            <!-- Ambient Glow Aura -->
            <div class="absolute -inset-2 rounded-3xl bg-gradient-to-r from-indigo-500/25 via-cyan-500/20 to-purple-500/25 blur-2xl"></div>

            <div class="relative glass-card rounded-3xl p-5 sm:p-6 border border-white/10 shadow-2xl space-y-4">
              <!-- Top Profile Layout: Prominent Medium Avatar + Bio Details -->
              <div class="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 p-4 rounded-2xl bg-slate-900/80 border border-white/5">
                <!-- Medium Enlaraged Image (140px/w-36) with Ambient Ring -->
                <div class="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden flex-shrink-0 ring-2 ring-indigo-500/50 shadow-xl group">
                  <img
                    src="../assets/ProfileImageCropped.jpg"
                    alt="Rohan Chakraborty"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                  <div class="absolute bottom-1.5 left-2 right-2 text-center">
                    <span class="inline-block px-2 py-0.5 rounded-full bg-indigo-600/90 text-[10px] font-mono font-medium text-white shadow">
                      Visa Engineer
                    </span>
                  </div>
                </div>

                <!-- Identity info -->
                <div class="flex-1 min-w-0 text-center sm:text-left">
                  <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-300 font-semibold mb-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Software Engineer</span>
                  </div>
                  <h2 class="text-lg sm:text-xl font-bold text-white leading-snug">{{ personalInfo.name }}</h2>
                  <p class="text-xs font-mono text-cyan-300 mt-0.5">Visa · Bengaluru</p>
                  <p class="text-[11px] text-slate-400 mt-1">MCA, Jadavpur University</p>

                  <div class="mt-2.5 flex flex-wrap gap-1 justify-center sm:justify-start">
                    <span class="px-2 py-0.5 rounded-md bg-slate-800 text-[10px] font-mono text-slate-300 border border-white/5">
                      Python
                    </span>
                    <span class="px-2 py-0.5 rounded-md bg-slate-800 text-[10px] font-mono text-slate-300 border border-white/5">
                      LangGraph
                    </span>
                    <span class="px-2 py-0.5 rounded-md bg-slate-800 text-[10px] font-mono text-slate-300 border border-white/5">
                      MCP
                    </span>
                  </div>
                </div>
              </div>

              <!-- Floating Metric Badges Row -->
              <div class="grid grid-cols-2 gap-2">
                <div class="p-2.5 rounded-xl bg-slate-900/60 border border-amber-500/25 flex items-center gap-2.5">
                  <div class="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-sm">
                    🏆
                  </div>
                  <div class="min-w-0">
                    <span class="block text-[10px] font-mono text-slate-400 uppercase">Entrance Exam</span>
                    <span class="text-xs font-bold text-amber-300 font-mono truncate block">AIR 17 · WBJECA</span>
                  </div>
                </div>

                <div class="p-2.5 rounded-xl bg-slate-900/60 border border-cyan-500/25 flex items-center gap-2.5">
                  <div class="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold text-sm">
                    ⚡
                  </div>
                  <div class="min-w-0">
                    <span class="block text-[10px] font-mono text-slate-400 uppercase">Competitive DSA</span>
                    <span class="text-xs font-bold text-cyan-300 font-mono truncate block">450+ Solved</span>
                  </div>
                </div>
              </div>

              <!-- Terminal Dossier Card -->
              <div class="rounded-2xl bg-slate-950/95 border border-white/10 overflow-hidden font-mono text-xs shadow-inner">
                <!-- Terminal Titlebar -->
                <div class="px-3.5 py-2 bg-slate-900/90 border-b border-white/5 flex items-center justify-between">
                  <div class="flex items-center gap-1.5">
                    <span class="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span class="ml-2 text-[11px] text-slate-400">rohan.config.ts</span>
                  </div>
                  <button
                    @click="copySnippet"
                    type="button"
                    class="text-[10px] text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                    title="Copy snippet"
                  >
                    <span>{{ copied ? "Copied!" : "Copy" }}</span>
                    <svg v-if="!copied" class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                    </svg>
                  </button>
                </div>

                <!-- Code Body -->
                <div class="p-3 text-[11px] leading-relaxed text-slate-300 space-y-0.5 select-all">
                  <div><span class="text-purple-400">const</span> <span class="text-cyan-300">engineer</span> = {</div>
                  <div class="pl-3"><span class="text-slate-400">company:</span> <span class="text-emerald-300">"Visa"</span>,</div>
                  <div class="pl-3"><span class="text-slate-400">role:</span> <span class="text-emerald-300">"Software Engineer"</span>,</div>
                  <div class="pl-3"><span class="text-slate-400">education:</span> <span class="text-amber-300">"MCA @ Jadavpur University"</span>,</div>
                  <div class="pl-3"><span class="text-slate-400">agenticAI:</span> [<span class="text-cyan-300">"LangGraph"</span>, <span class="text-cyan-300">"MCP"</span>],</div>
                  <div class="pl-3"><span class="text-slate-400">pipeline:</span> <span class="text-emerald-300">"Human-In-The-Loop CI/CD"</span></div>
                  <div>};</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Stats Counter Grid -->
      <div class="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div
          v-for="stat in personalInfo.stats"
          :key="stat.label"
          class="glass-card glass-card-hover rounded-2xl p-4 text-center sm:text-left"
        >
          <span class="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
            {{ stat.value }}
          </span>
          <span class="block text-xs sm:text-sm font-semibold text-slate-200 mt-1">{{ stat.label }}</span>
          <span class="block text-[11px] text-slate-400 mt-0.5">{{ stat.desc }}</span>
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
              Engineering autonomous AI agents (Python, LangGraph, Model Context Protocol) and Human-In-The-Loop CI/CD pipelines at Visa to remediate vulnerabilities and accelerate releases.
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
              450+ solved problems across LeetCode and GeeksforGeeks, General Merit Rank 17 in WBJECA 2024, and 9+ contest milestones across regional hackathons and mystery-solving championships.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
