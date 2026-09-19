<script setup>
import { educationHistory } from "../data/portfolioData.js";

const getTierLabel = (idx) => {
  if (idx === 0) return "Postgraduate Degree";
  if (idx === 1) return "Undergraduate Degree";
  return "Higher Secondary Education";
};

const getTierAccent = (idx) => {
  if (idx === 0) return {
    border: "border-t-cyan-400/80 hover:border-cyan-400/50",
    badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    glow: "from-cyan-500/10",
    iconBg: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30"
  };
  if (idx === 1) return {
    border: "border-t-indigo-400/80 hover:border-indigo-400/50",
    badge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
    glow: "from-indigo-500/10",
    iconBg: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30"
  };
  return {
    border: "border-t-purple-400/80 hover:border-purple-400/50",
    badge: "bg-purple-500/10 text-purple-300 border-purple-500/30",
    glow: "from-purple-500/10",
    iconBg: "bg-purple-500/15 text-purple-400 border-purple-500/30"
  };
};
</script>

<template>
  <section id="education" class="scroll-mt-20 py-16 relative border-t border-white/5 bg-slate-950/40">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-10">
        <span class="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">Academic Background</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white mt-1.5 tracking-tight">
          Education & Credentials
        </h2>
        <p class="text-sm sm:text-base text-slate-400 mt-3">
          Formal academic training in computer science, software engineering foundations, and analytical thinking.
        </p>
      </div>

      <!-- Modern Cards Stack (No left timeline border) -->
      <div class="space-y-6">
        <div
          v-for="(item, idx) in educationHistory"
          :key="idx"
          class="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 border-t-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden"
          :class="getTierAccent(idx).border"
        >
          <!-- Subtle top corner glow -->
          <div
            class="absolute top-0 right-0 w-64 h-28 bg-gradient-to-bl to-transparent opacity-40 pointer-events-none"
            :class="getTierAccent(idx).glow"
          ></div>

          <!-- Header: Tier Tag, Period & Score -->
          <div class="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-white/5 relative z-10">
            <div class="flex items-center gap-3">
              <!-- Tier Icon Badge -->
              <div
                class="w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0"
                :class="getTierAccent(idx).iconBg"
              >
                <!-- Master's / Postgraduate Cap -->
                <svg v-if="idx === 0" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                <!-- Bachelor's / Undergraduate Scroll -->
                <svg v-else-if="idx === 1" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <!-- Secondary School Book -->
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>

              <div>
                <span class="text-xs font-mono font-semibold uppercase tracking-wider block" :class="idx === 0 ? 'text-cyan-400' : idx === 1 ? 'text-indigo-400' : 'text-purple-400'">
                  {{ getTierLabel(idx) }}
                </span>
                <span class="text-xs text-slate-400 font-mono">
                  {{ item.period }} · {{ item.location }}
                </span>
              </div>
            </div>

            <!-- Score Pill -->
            <div class="flex items-center gap-2">
              <span class="px-3 py-1 rounded-xl font-mono text-xs font-bold border shadow-sm" :class="getTierAccent(idx).badge">
                {{ item.score }}
              </span>
            </div>
          </div>

          <!-- Degree & Institution Body -->
          <div class="mb-4 relative z-10">
            <h3 class="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
              {{ item.degree }}
            </h3>
            <div class="flex items-center gap-2 mt-1.5 text-sm sm:text-base font-medium text-slate-300">
              <svg class="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>{{ item.institution }}</span>
            </div>
          </div>

          <!-- Relevant Coursework -->
          <div class="pt-4 border-t border-white/5 relative z-10">
            <span class="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2.5 font-medium">
              Key Academic Modules & Coursework
            </span>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="course in item.courses"
                :key="course"
                class="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900/90 text-slate-300 border border-white/10 hover:border-cyan-500/30 hover:text-white transition-colors"
              >
                {{ course }}
              </span>
            </div>
          </div>

          <!-- Certificate / Marksheet Link -->
          <div v-if="item.linkToPdf" class="mt-4 pt-3 border-t border-white/5 flex justify-end relative z-10">
            <a
              :href="item.linkToPdf"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors bg-cyan-950/40 border border-cyan-500/20 px-3 py-1.5 rounded-lg hover:border-cyan-400/50"
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              View Marksheet / Certificate
              <svg class="w-3 h-3 ml-0.5 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>