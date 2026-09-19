<script setup>
import { ref } from "vue";
import { skillCategories } from "../data/portfolioData.js";

const activeCategoryIndex = ref(0);
</script>

<template>
  <section id="skills" class="scroll-mt-20 py-14 relative border-t border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-8">
        <span class="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">Technical Competencies</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white mt-1.5 tracking-tight">
          Skills & Technologies
        </h2>
        <p class="text-sm sm:text-base text-slate-400 mt-3">
          A structured breakdown of programming languages, machine learning stacks, web frameworks, and engineering tools I build with.
        </p>
      </div>

      <!-- Categories Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="(category, catIdx) in skillCategories"
          :key="catIdx"
          class="glass-card rounded-2xl p-6 sm:p-7 border border-white/5 hover:border-indigo-500/30 transition-all duration-300"
        >
          <!-- Category Title -->
          <div class="flex items-center justify-between pb-5 mb-5 border-b border-white/5">
            <h3 class="text-lg font-bold text-white flex items-center gap-2.5">
              <span class="w-2 h-2 rounded-full bg-indigo-400"></span>
              {{ category.title }}
            </h3>
            <span class="text-xs font-mono text-slate-400">
              {{ category.skills.length }} skills
            </span>
          </div>

          <!-- Skills Chips / Cards Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="group flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/70 border border-white/5 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all duration-200"
            >
              <div class="w-8 h-8 rounded-lg bg-slate-800 p-1.5 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <img :src="skill.icon" :alt="skill.name" class="w-full h-full object-contain" loading="lazy" />
              </div>

              <div class="flex flex-col min-w-0">
                <span class="text-xs font-semibold text-slate-200 truncate group-hover:text-cyan-300 transition-colors">
                  {{ skill.name }}
                </span>
                <span class="text-[10px] font-mono text-slate-400">
                  {{ skill.level }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>