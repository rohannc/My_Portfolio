<script setup>
import { educationHistory } from "../data/portfolioData.js";
</script>

<template>
  <section id="education" class="scroll-mt-20 py-14 relative border-t border-white/5 bg-slate-950/40">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-8">
        <span class="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">Academic Background</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white mt-1.5 tracking-tight">
          Education & Credentials
        </h2>
        <p class="text-sm sm:text-base text-slate-400 mt-3">
          Formal academic training in computer science, software engineering foundations, and analytical thinking.
        </p>
      </div>

      <!-- Connected Timeline -->
      <div class="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/20 space-y-6 ml-2 sm:ml-4">
        <div
          v-for="(item, idx) in educationHistory"
          :key="idx"
          class="relative group"
        >
          <!-- Timeline Node / Dot -->
          <div
            class="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-400 ring-4 ring-slate-950 group-hover:border-cyan-400 group-hover:scale-125 transition-all duration-200"
          ></div>

          <!-- Content Card -->
          <div class="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-white/5">
            <div class="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div>
                <span class="inline-block text-xs font-mono font-semibold text-cyan-400 mb-1">
                  {{ item.period }} · {{ item.location }}
                </span>
                <h3 class="text-xl font-bold text-white leading-tight">
                  {{ item.degree }}
                </h3>
                <p class="text-sm font-medium text-indigo-300 mt-1">
                  {{ item.institution }}
                </p>
              </div>

              <!-- Score Badge -->
              <span class="px-3 py-1 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-mono text-xs font-semibold">
                {{ item.score }}
              </span>
            </div>

            <!-- Key Courses -->
            <div class="mt-4 pt-4 border-t border-white/5">
              <span class="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2 font-medium">
                Relevant Coursework
              </span>
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="course in item.courses"
                  :key="course"
                  class="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900/90 text-slate-300 border border-white/5"
                >
                  {{ course }}
                </span>
              </div>
            </div>

            <!-- View PDF Link if available -->
            <div v-if="item.linkToPdf" class="mt-4 pt-3 flex justify-end">
              <a
                :href="item.linkToPdf"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                View Marksheet / Degree Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>