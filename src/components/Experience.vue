<script setup>
import { experiences } from "../data/portfolioData.js";
</script>

<template>
  <section id="experience" class="scroll-mt-20 relative py-10 sm:py-16 border-t border-white/5">
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
      <div class="max-w-5xl mx-auto space-y-5 sm:space-y-8">
        <div
          v-for="exp in experiences"
          :key="exp.role + exp.period"
          class="glass-card rounded-2xl p-4 sm:p-8 transition-all duration-300 relative overflow-hidden"
          :class="exp.current
            ? 'border border-blue-500/30 border-t-4 border-t-blue-500 bg-gradient-to-br from-slate-900/95 via-blue-950/20 to-slate-900/95 shadow-xl hover:border-blue-500/50'
            : 'border border-white/5 border-t-4 border-t-cyan-500 bg-slate-900/80 shadow-lg hover:border-cyan-500/30'"
        >
          <!-- Header Bar: Visa Logo Badge, Role Title, Status Badge, Period -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between items-center text-center sm:text-left gap-3.5 sm:gap-4 pb-4 sm:pb-5 mb-4 sm:mb-5 border-b border-white/5">
            <div class="flex flex-col sm:flex-row items-center sm:items-center gap-2.5 sm:gap-4 w-full sm:w-auto">
              <!-- Official Visa Brandmark with Glowing Shadow Backdrop & No Border -->
              <div
                class="relative flex items-center justify-center flex-shrink-0 py-1 sm:py-0 group"
                title="Visa Inc."
              >
                <!-- Ambient Glowing Halo Behind the Logo (No Border) -->
                <div class="absolute inset-0 -inset-x-3 -inset-y-1 bg-gradient-to-r from-blue-500/25 via-cyan-400/20 to-amber-500/20 rounded-full blur-md opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <svg
                  class="relative h-[24px] sm:h-[21px] w-auto transition-all duration-300 drop-shadow-[0_0_14px_rgba(59,130,246,0.65)] drop-shadow-[0_0_24px_rgba(255,255,255,0.4)] group-hover:drop-shadow-[0_0_20px_rgba(250,166,26,0.8)] group-hover:scale-105"
                  viewBox="0 0 1000.046 323.653"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                >
                  <title>Visa</title>
                  <g transform="matrix(4.4299631,0,0,4.4299631,-81.165783,-105.04783)">
                    <!-- Letter 'I' -->
                    <polygon
                      points="116.145,95.719 97.858,95.719 109.296,24.995 127.582,24.995"
                      fill="#FFFFFF"
                    />
                    <!-- Letter 'S' -->
                    <path
                      d="m 182.437,26.724 c -3.607,-1.431 -9.328,-3.011 -16.402,-3.011 -18.059,0 -30.776,9.63 -30.854,23.398 -0.15,10.158 9.105,15.8 16.027,19.187 7.075,3.461 9.48,5.72 9.48,8.805 -0.072,4.738 -5.717,6.922 -10.982,6.922 -7.301,0 -11.213,-1.126 -17.158,-3.762 l -2.408,-1.13 -2.559,15.876 c 4.289,1.954 12.191,3.688 20.395,3.764 19.188,0 31.68,-9.481 31.828,-24.153 0.073,-8.051 -4.814,-14.22 -15.35,-19.261 -6.396,-3.236 -10.313,-5.418 -10.313,-8.729 0.075,-3.01 3.313,-6.093 10.533,-6.093 5.945,-0.151 10.313,1.278 13.622,2.708 l 1.654,0.751 2.487,-15.272 0,0 z"
                      fill="#FFFFFF"
                    />
                    <!-- Letter 'A' -->
                    <path
                      d="m 206.742,70.664 c 1.506,-4.063 7.301,-19.788 7.301,-19.788 -0.076,0.151 1.503,-4.138 2.406,-6.771 l 1.278,6.094 c 0,0 3.463,16.929 4.215,20.465 -2.858,0 -11.588,0 -15.2,0 l 0,0 z m 22.573,-45.669 -14.145,0 c -4.362,0 -7.676,1.278 -9.558,5.868 l -27.163,64.855 19.188,0 c 0,0 3.159,-8.729 3.838,-10.609 2.105,0 20.771,0 23.479,0 0.525,2.483 2.182,10.609 2.182,10.609 l 16.932,0 -14.753,-70.723 0,0 z"
                      fill="#FFFFFF"
                    />
                    <!-- Letter 'V' Body -->
                    <path
                      d="M 82.584,24.995 64.675,73.222 62.718,63.441 C 59.407,52.155 49.023,39.893 37.435,33.796 l 16.404,61.848 19.338,0 28.744,-70.649 -19.337,0 0,0 z"
                      fill="#FFFFFF"
                    />
                    <!-- Iconic Gold Wing / Accent Flick on 'V' -->
                    <path
                      d="m 48.045,24.995 -29.422,0 -0.301,1.429 c 22.951,5.869 38.151,20.016 44.396,37.02 L 56.322,30.94 c -1.053,-4.517 -4.289,-5.796 -8.277,-5.945 l 0,0 z"
                      fill="#faa61a"
                    />
                  </g>
                </svg>
              </div>

              <div class="flex-1 min-w-0 flex flex-col items-center sm:items-start">
                <!-- Line 1: Role Title & Badge -->
                <div class="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                  <h3 class="text-lg sm:text-2xl font-extrabold text-white tracking-tight">
                    {{ exp.role }}
                  </h3>
                  <!-- Badge -->
                  <span
                    class="px-2 py-0.5 rounded-full text-[11px] sm:text-xs font-mono font-semibold inline-flex items-center gap-1.5"
                    :class="exp.current
                      ? 'bg-blue-500/15 text-blue-400 border border-blue-500/30'
                      : 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'"
                  >
                    <span v-if="exp.current" class="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                    <span v-else class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    {{ exp.badge }}
                  </span>
                </div>

                <!-- Line 2: Company, Type & Location Metadata -->
                <div class="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-300 mt-2 sm:mt-1 flex-wrap font-medium">
                  <span class="visa-highlight text-sm sm:text-sm font-extrabold sm:font-bold px-2 py-0.5 sm:px-0 sm:py-0 rounded-md sm:rounded-none bg-blue-500/10 sm:bg-transparent border border-blue-500/25 sm:border-0 shadow-sm sm:shadow-none">{{ exp.company }}</span>
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

            <!-- Line 3: Date Period Badge -->
            <div class="self-center sm:self-center">
              <span class="inline-flex items-center px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-mono font-medium bg-slate-800/90 text-cyan-300 border border-white/5 shadow-sm">
                {{ exp.period }}
              </span>
            </div>
          </div>

          <!-- Role Overview / Summary Banner -->
          <!-- Full-Time Role Banner -->
          <div
            v-if="exp.current"
            class="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 mb-4 sm:mb-5 text-xs sm:text-sm text-blue-200"
          >
            <div class="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 font-bold text-xs sm:text-sm">
              ⚡
            </div>
            <p class="font-medium leading-relaxed">
              {{ exp.summary }}
            </p>
          </div>

          <!-- Internship Transition Banner -->
          <div
            v-else
            class="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-slate-950/70 border border-cyan-500/20 mb-4 sm:mb-5 text-xs sm:text-sm text-slate-200"
          >
            <div class="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-cyan-500/15 text-cyan-400 flex items-center justify-center flex-shrink-0 font-bold text-xs sm:text-sm mt-0.5">
              💡
            </div>
            <p class="leading-relaxed">
              {{ exp.summary }}
            </p>
          </div>

          <!-- Structured Key Contributions Grid (for Internship) -->
          <div v-if="exp.contributions && exp.contributions.length > 0" class="mb-5 sm:mb-6">
            <h4 class="text-[11px] sm:text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase mb-2.5 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
              <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Key Contributions & Technical Impact
            </h4>

            <div class="grid grid-cols-1 gap-2.5 sm:gap-3">
              <div
                v-for="(contrib, cIdx) in exp.contributions"
                :key="cIdx"
                class="p-3 sm:p-4 rounded-xl bg-slate-900/60 border border-white/5 hover:border-white/10 transition-colors"
              >
                <div class="flex items-center gap-2 mb-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></span>
                  <h5 class="text-xs sm:text-sm font-bold text-white tracking-tight">
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
          <div v-else-if="exp.description" class="mb-5 sm:mb-6">
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {{ exp.description }}
            </p>
          </div>

          <!-- Technologies & Core Tooling -->
          <div class="pt-4 border-t border-white/5">
            <div class="flex items-center justify-between gap-2 mb-3">
              <div class="flex items-center gap-2 text-[11px] sm:text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
                <span>Technologies & Core Tooling</span>
              </div>
              <span class="text-[10px] sm:text-[11px] font-mono text-slate-500 bg-slate-800/60 px-2 py-0.5 rounded-full border border-white/5">
                {{ exp.skills.length }} tools
              </span>
            </div>

            <div class="flex flex-wrap gap-1.5 sm:gap-2">
              <span
                v-for="tech in exp.skills"
                :key="tech"
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-mono bg-slate-800/60 text-slate-200 border border-white/5 hover:border-cyan-500/40 hover:text-cyan-300 hover:bg-slate-800 transition-all duration-200 cursor-pointer shadow-sm group/tech"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-cyan-400/60 group-hover/tech:bg-cyan-400 group-hover/tech:scale-125 transition-all"></span>
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
