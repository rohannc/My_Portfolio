<script setup>
import { ref, computed } from "vue";
import { achievements } from "../data/portfolioData.js";

const selectedFilter = ref("all");

const filterOptions = [
  { label: "All Milestones", value: "all" },
  { label: "Winner", value: "gold" },
  { label: "Podiums & Finalists", value: "podium" }
];

const filteredAchievements = computed(() => {
  if (selectedFilter.value === "all") return achievements;
  if (selectedFilter.value === "podium") {
    return achievements.filter((item) => item.badgeType === "bronze" || item.badgeType === "finalist");
  }
  return achievements.filter((item) => item.badgeType === selectedFilter.value);
});
</script>

<template>
  <section id="achievements" class="scroll-mt-20 py-10 sm:py-14 relative border-t border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-8">
        <span class="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">Competitive Milestones</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white mt-1.5 tracking-tight">
          Honors & Achievements
        </h2>
        <p class="text-sm sm:text-base text-slate-400 mt-3">
          State-level entrance ranks, competitive coding victories, and hackathon milestones.
        </p>

        <!-- Filter Pills -->
        <div class="flex flex-wrap items-center justify-center gap-2 mt-6">
          <button
            v-for="filter in filterOptions"
            :key="filter.value"
            @click="selectedFilter = filter.value"
            type="button"
            class="px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
            :class="[
              selectedFilter === filter.value
                ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                : 'bg-slate-900/60 text-slate-400 hover:text-white border border-white/5 hover:border-white/20'
            ]"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>

      <!-- Achievements Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(item, idx) in filteredAchievements"
          :key="idx"
          class="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between border border-white/5"
        >
          <div>
            <!-- Top Badges Row -->
            <div class="flex items-center justify-between gap-2 mb-4">
              <!-- Position Badge -->
              <span
                class="px-2.5 py-1 rounded-lg text-xs font-semibold font-mono"
                :class="{
                  'bg-amber-500/10 text-amber-300 border border-amber-500/30': item.badgeType === 'gold',
                  'bg-orange-500/10 text-orange-300 border border-orange-500/30': item.badgeType === 'bronze',
                  'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30': item.badgeType === 'rank',
                  'bg-purple-500/10 text-purple-300 border border-purple-500/30': item.badgeType === 'finalist',
                  'bg-blue-500/10 text-blue-300 border border-blue-500/30': item.badgeType === 'participant'
                }"
              >
                {{ item.position }}
              </span>

              <span class="text-xs font-mono text-slate-500">
                {{ item.year }}
              </span>
            </div>

            <!-- Title & Institution -->
            <h3 class="text-lg font-bold text-white mb-1.5 leading-snug">
              {{ item.title }}
            </h3>
            <p class="text-xs font-medium text-indigo-300 mb-3">
              {{ item.subtitle }}
            </p>

            <p class="text-xs text-slate-400 leading-relaxed mb-6">
              {{ item.description }}
            </p>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
            <a
              v-if="item.view"
              :href="item.view"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
              View Document
            </a>
            <span v-else class="text-slate-600">No document</span>

            <a
              v-if="item.linkedin"
              :href="item.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors"
              title="View on LinkedIn"
            >
              <span>LinkedIn</span>
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>