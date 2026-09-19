<script setup>
import { experiences } from "../data/portfolioData.js";
</script>

<template>
  <section id="experience" class="scroll-mt-20 py-16 relative border-t border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-12">
        <span class="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">Career Milestone</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white mt-1.5 tracking-tight">
          Work Experience
        </h2>
        <p class="text-sm sm:text-base text-slate-400 mt-3">
          Engineering autonomous AI agents, enterprise developer workflows, and secure, human-in-the-loop CI/CD pipelines.
        </p>
      </div>

      <!-- Experience Cards Stack -->
      <div class="max-w-5xl mx-auto space-y-8">
        <div
          v-for="exp in experiences"
          :key="exp.role + exp.period"
          class="glass-card rounded-2xl p-6 sm:p-8 transition-all duration-300 relative overflow-hidden"
          :class="exp.current
            ? 'border border-blue-500/30 border-t-4 border-t-blue-500 bg-gradient-to-br from-slate-900/95 via-blue-950/20 to-slate-900/95 shadow-xl hover:border-blue-500/50'
            : 'border border-white/5 border-t-4 border-t-cyan-500 bg-slate-900/80 shadow-lg hover:border-cyan-500/30'"
        >
          <!-- Header Bar: Visa Logo Badge, Role Title, Status Badge, Period -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-5 border-b border-white/5">
            <div class="flex items-start sm:items-center gap-4">
              <!-- Highlighted White Visa Logo (No Background) -->
              <div
                class="flex items-center justify-center flex-shrink-0 pt-0.5"
                title="Visa Inc."
              >
                <svg
                  class="h-6 sm:h-7 w-auto fill-white drop-shadow-[0_0_12px_rgba(255,255,255,0.85)] drop-shadow-[0_0_3px_#ffffff] transition-all duration-300 group-hover:drop-shadow-[0_0_18px_rgba(255,255,255,1)] group-hover:scale-105"
                  viewBox="0 0 1000 324.68"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                >
                  <title>Visa</title>
                  <path d="m651.19.5c-70.93,0-134.32,36.77-134.32,104.69,0,77.9,112.42,83.28,112.42,122.42,0,16.48-18.88,31.23-51.14,31.23-45.77,0-79.98-20.61-79.98-20.61l-14.64,68.55s39.41,17.41,91.73,17.41c77.55,0,138.58-38.57,138.58-107.66,0-82.32-112.89-87.54-112.89-123.86,0-12.91,15.5-27.05,47.66-27.05,36.29,0,65.89,14.99,65.89,14.99l14.33-66.2S696.61.5,651.18.5h0ZM2.22,5.5L.5,15.49s29.84,5.46,56.72,16.36c34.61,12.49,37.07,19.77,42.9,42.35l63.51,244.83h85.14L379.93,5.5h-84.94l-84.28,213.17-34.39-180.7c-3.15-20.68-19.13-32.48-38.68-32.48,0,0-135.41,0-135.41,0Zm411.87,0l-66.63,313.53h81L494.85,5.5h-80.76Zm451.76,0c-19.53,0-29.88,10.46-37.47,28.73l-118.67,284.8h84.94l16.43-47.47h103.48l9.99,47.47h74.95L934.12,5.5h-68.27Zm11.05,84.71l25.18,117.65h-67.45l42.28-117.65h0Z"/>
                </svg>
              </div>

              <div>
                <div class="flex items-center gap-2.5 flex-wrap">
                  <h3 class="text-lg sm:text-2xl font-extrabold text-white tracking-tight">
                    {{ exp.role }}
                  </h3>
                  <!-- Badge -->
                  <span
                    class="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold inline-flex items-center gap-1.5"
                    :class="exp.current
                      ? 'bg-blue-500/15 text-blue-400 border border-blue-500/30'
                      : 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'"
                  >
                    <span v-if="exp.current" class="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                    <span v-else class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    {{ exp.badge }}
                  </span>
                </div>

                <div class="flex items-center gap-2 text-xs sm:text-sm text-slate-300 mt-1 flex-wrap font-medium">
                  <span class="visa-highlight-white">{{ exp.company }}</span>
                  <span class="text-slate-600">•</span>
                  <span>{{ exp.employmentType }}</span>
                  <span class="text-slate-600">•</span>
                  <span class="text-slate-400 flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    {{ exp.location }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Date Period Badge -->
            <div class="flex-shrink-0 self-start sm:self-center">
              <span class="px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-800/90 text-cyan-300 border border-white/5 inline-block">
                {{ exp.period }}
              </span>
            </div>
          </div>

          <!-- Role Overview / Summary Banner -->
          <!-- Full-Time Role Banner -->
          <div
            v-if="exp.current"
            class="flex items-center gap-3 p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 mb-5 text-xs sm:text-sm text-blue-200"
          >
            <div class="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 font-bold text-sm">
              ⚡
            </div>
            <p class="font-medium leading-relaxed">
              {{ exp.summary }}
            </p>
          </div>

          <!-- Internship Transition Banner -->
          <div
            v-else
            class="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/70 border border-cyan-500/20 mb-5 text-xs sm:text-sm text-slate-200"
          >
            <div class="w-7 h-7 rounded-lg bg-cyan-500/15 text-cyan-400 flex items-center justify-center flex-shrink-0 font-bold text-sm mt-0.5">
              💡
            </div>
            <p class="leading-relaxed">
              {{ exp.summary }}
            </p>
          </div>

          <!-- Structured Key Contributions Grid (for Internship) -->
          <div v-if="exp.contributions && exp.contributions.length > 0" class="mb-6">
            <h4 class="text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase mb-3 flex items-center gap-2">
              <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Key Contributions & Technical Impact
            </h4>

            <div class="grid grid-cols-1 gap-3">
              <div
                v-for="(contrib, cIdx) in exp.contributions"
                :key="cIdx"
                class="p-4 rounded-xl bg-slate-900/60 border border-white/5 hover:border-white/10 transition-colors"
              >
                <div class="flex items-center gap-2 mb-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <h5 class="text-sm font-bold text-white tracking-tight">
                    {{ contrib.title }}
                  </h5>
                </div>
                <p class="text-xs sm:text-sm text-slate-400 leading-relaxed pl-3.5">
                  {{ contrib.desc }}
                </p>
              </div>
            </div>
          </div>

          <!-- Full-Time Role Overview Description -->
          <div v-else-if="exp.description" class="mb-6">
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {{ exp.description }}
            </p>
          </div>

          <!-- Technologies & Core Tooling -->
          <div>
            <div class="text-[11px] font-mono text-slate-500 uppercase mb-2">Technologies & Core Tooling</div>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tech in exp.skills"
                :key="tech"
                class="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800/80 text-slate-300 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
