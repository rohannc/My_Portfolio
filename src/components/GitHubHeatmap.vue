<script setup>
import { ref, computed } from 'vue';
import codolioStats from '../data/codolioStats.json';
import ActivityHeatmapGrid from './ActivityHeatmapGrid.vue';
import DsaSkillRadarChart from './DsaSkillRadarChart.vue';

const activeStatsView = ref('platforms'); // 'platforms' | 'radar'

// Platform metadata mapping
const platformMeta = {
  leetcode: {
    title: 'LeetCode',
    color: '#FFA116',
    bg: 'rgba(255, 161, 22, 0.1)',
    border: 'rgba(255, 161, 22, 0.25)',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/leetcode.svg',
    url: 'https://leetcode.com/u/rohanch0108003/'
  },
  geeksforgeeks: {
    title: 'GeeksforGeeks',
    color: '#2F8D46',
    bg: 'rgba(47, 141, 70, 0.1)',
    border: 'rgba(47, 141, 70, 0.25)',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/geeksforgeeks.svg',
    url: 'https://auth.geeksforgeeks.org/user/rohannju/'
  },
  codechef: {
    title: 'CodeChef',
    color: '#8B4513',
    bg: 'rgba(139, 69, 19, 0.1)',
    border: 'rgba(139, 69, 19, 0.25)',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/codechef.svg',
    url: 'https://www.codechef.com/users/rohannc'
  },
  codeforces: {
    title: 'Codeforces',
    color: '#1F8ACB',
    bg: 'rgba(31, 138, 203, 0.1)',
    border: 'rgba(31, 138, 203, 0.25)',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/codeforces.svg',
    url: 'https://codeforces.com/profile/Rohannc01'
  },
  codestudio: {
    title: 'Coding Ninjas',
    color: '#F48024',
    bg: 'rgba(244, 128, 36, 0.1)',
    border: 'rgba(244, 128, 36, 0.25)',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/codingninjas.svg',
    url: 'https://www.naukri.com/code360'
  },
  hackerrank: {
    title: 'HackerRank',
    color: '#00EA64',
    bg: 'rgba(0, 234, 100, 0.1)',
    border: 'rgba(0, 234, 100, 0.25)',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/hackerrank.svg',
    url: 'https://www.hackerrank.com/profile/chakrabortyroha2'
  }
};

const primaryPlatforms = computed(() => {
  const list = codolioStats.platforms || [];
  return ['leetcode', 'geeksforgeeks']
    .map(name => {
      const p = list.find(item => item.name === name);
      if (!p) return null;
      return {
        ...p,
        meta: platformMeta[name]
      };
    })
    .filter(Boolean);
});

const secondaryPlatforms = computed(() => {
  const list = codolioStats.platforms || [];
  return ['codechef', 'codeforces', 'codestudio', 'hackerrank']
    .map(name => {
      const p = list.find(item => item.name === name);
      if (!p) return null;
      return {
        ...p,
        meta: platformMeta[name]
      };
    })
    .filter(Boolean);
});
</script>

<template>
  <section id="heatmap" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16">
    <div class="glass-card rounded-3xl p-6 sm:p-8 border border-white/5 relative overflow-hidden group">
      <!-- Ambient Glow -->
      <div class="absolute -inset-x-20 -top-20 bg-cyan-500/10 blur-[100px] rounded-full h-64 pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>
      
      <div class="relative z-10">
        <!-- Section Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <div>
            <h3 class="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <svg class="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              Coding Activity & Platform Metrics
            </h3>
            <p class="text-sm text-slate-400">
              A visual overview of commits and problem solving over the past year. 
              <span class="text-cyan-400">Darker shades indicate more activity.</span>
            </p>
          </div>
          <div class="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 w-full sm:w-fit">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span class="text-sm font-semibold text-cyan-300">{{ codolioStats.activeDays || '706' }} Active Days</span>
            <span class="text-xs text-slate-400 font-mono">(Codolio)</span>
          </div>
        </div>
        
        <!-- Activity Heatmap Grid -->
        <div class="w-full overflow-hidden rounded-xl bg-slate-900/50 border border-white/5 p-4 flex justify-center mb-8">
          <ActivityHeatmapGrid />
        </div>

        <!-- Dynamic Platform Stats Breakdown / DSA Skill Radar Switcher -->
        <div>
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
            <div class="flex items-center gap-2">
              <span class="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
                {{ activeStatsView === 'platforms' ? 'Competitive Profiles' : 'Algorithmic Mastery' }}
              </span>
              <span class="text-xs text-slate-500">·</span>
              <span class="text-xs text-slate-400">{{ codolioStats.totalSolved }} Total Solved</span>
            </div>

            <!-- View Switcher Pills (Hidden on mobile) -->
            <div class="hidden sm:inline-flex p-1 rounded-xl bg-slate-900/90 border border-white/10 shadow-sm self-start sm:self-auto">
              <button
                type="button"
                @click="activeStatsView = 'platforms'"
                class="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer"
                :class="activeStatsView === 'platforms' 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm' 
                  : 'text-slate-400 hover:text-white'"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span>Platform Breakdown</span>
              </button>

              <button
                type="button"
                @click="activeStatsView = 'radar'"
                class="dsa-radar-tab-btn flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer"
                :class="activeStatsView === 'radar' 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-sm' 
                  : 'text-slate-400 hover:text-white'"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
                <span class="dsa-radar-tab-text">DSA Skill Radar</span>
              </button>
            </div>
          </div>

          <!-- View 1: Multi-Axis Algorithmic Skill Radar Chart (Desktop/Tablet only) -->
          <div v-if="activeStatsView === 'radar'" class="hidden sm:block w-full">
            <DsaSkillRadarChart />
          </div>

          <!-- View 2: Platform Cards (Row 1: LeetCode & GFG; Row 2: Secondary Platforms) -->
          <div v-else>
            <!-- First Row: 2 Major Cards (LeetCode & GeeksforGeeks) Double-Width -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <a
              v-for="platform in primaryPlatforms"
              :key="platform.name"
              :href="platform.meta.url"
              target="_blank"
              rel="noopener noreferrer"
              class="group block p-5 rounded-2xl bg-slate-900/70 border border-white/5 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-3">
                  <div 
                    class="w-10 h-10 rounded-xl flex items-center justify-center p-2 border"
                    :style="{ backgroundColor: platform.meta.bg, borderColor: platform.meta.border }"
                  >
                    <img 
                      :src="platform.meta.icon" 
                      :alt="platform.meta.title" 
                      class="w-full h-full object-contain filter invert opacity-90"
                      @error="(e) => e.target.style.display = 'none'"
                    />
                  </div>
                  <div>
                    <span class="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors block">
                      {{ platform.meta.title }}
                    </span>
                    <span class="text-xs font-mono text-slate-400 truncate block">
                      @{{ platform.userName }}
                    </span>
                  </div>
                </div>

                <div class="flex items-center gap-2">
                  <span v-if="platform.rating" class="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs font-semibold">
                    {{ platform.rating }} Rating
                  </span>
                  <svg class="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </div>
              </div>

              <!-- Solved Count & Details -->
              <div class="flex items-baseline justify-between pt-1 mb-2">
                <div>
                  <span class="text-2xl font-bold font-space text-white block">
                    {{ platform.totalSolved }}
                  </span>
                  <span class="text-[11px] font-mono uppercase text-slate-400">
                    Problems Solved
                  </span>
                </div>

                <div class="text-right">
                  <div v-if="platform.rank" class="text-xs font-mono text-slate-400">
                    Global Rank: {{ platform.rank }}
                  </div>
                  <div v-else class="text-xs font-mono text-emerald-400">
                    Top Collegiate Solver
                  </div>
                </div>
              </div>

              <!-- Difficulty Progress Bar for Primary Cards -->
              <div v-if="platform.easy || platform.medium || platform.hard" class="pt-2 border-t border-white/5">
                <div class="w-full h-2 rounded-full bg-slate-800 overflow-hidden flex gap-0.5">
                  <div 
                    class="bg-emerald-400 h-full rounded-l-full" 
                    :style="{ width: `${(platform.easy / platform.totalSolved) * 100}%` }"
                    :title="`Easy: ${platform.easy}`"
                  ></div>
                  <div 
                    class="bg-amber-400 h-full" 
                    :style="{ width: `${(platform.medium / platform.totalSolved) * 100}%` }"
                    :title="`Medium: ${platform.medium}`"
                  ></div>
                  <div 
                    class="bg-rose-400 h-full rounded-r-full" 
                    :style="{ width: `${(platform.hard / platform.totalSolved) * 100}%` }"
                    :title="`Hard: ${platform.hard}`"
                  ></div>
                </div>
                <div class="flex justify-between items-center text-[10px] font-mono text-slate-400 mt-2">
                  <span class="text-emerald-400">Easy: {{ platform.easy }}</span>
                  <span class="text-amber-400">Medium: {{ platform.medium }}</span>
                  <span class="text-rose-400">Hard: {{ platform.hard }}</span>
                </div>
              </div>
            </a>
          </div>

          <!-- Second Row: 4 Cards (CodeChef, Codeforces, Coding Ninjas, HackerRank) Full Width -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <a
              v-for="platform in secondaryPlatforms"
              :key="platform.name"
              :href="platform.meta.url"
              target="_blank"
              rel="noopener noreferrer"
              class="group block p-4 rounded-2xl bg-slate-900/70 border border-white/5 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-2.5">
                  <div 
                    class="w-8 h-8 rounded-lg flex items-center justify-center p-1.5 border"
                    :style="{ backgroundColor: platform.meta.bg, borderColor: platform.meta.border }"
                  >
                    <img 
                      :src="platform.meta.icon" 
                      :alt="platform.meta.title" 
                      class="w-full h-full object-contain filter invert opacity-90"
                      @error="(e) => e.target.style.display = 'none'"
                    />
                  </div>
                  <div>
                    <span class="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors block">
                      {{ platform.meta.title }}
                    </span>
                    <span class="text-[10px] font-mono text-slate-400 truncate block max-w-[110px]">
                      @{{ platform.userName }}
                    </span>
                  </div>
                </div>

                <svg class="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </div>

              <!-- Solved Count & Details -->
              <div class="flex items-baseline justify-between pt-1">
                <div>
                  <span class="text-xl font-bold font-space text-white block">
                    {{ platform.totalSolved }}
                  </span>
                  <span class="text-[10px] font-mono uppercase text-slate-400">
                    Solved
                  </span>
                </div>

                <div class="text-right">
                  <div v-if="platform.rating" class="text-xs font-bold text-amber-300 font-mono">
                    {{ platform.rating }} <span class="text-[9px] text-slate-400 font-normal">Rating</span>
                  </div>
                  <div v-else-if="platform.userLevelName" class="text-xs font-semibold text-cyan-300 font-mono">
                    {{ platform.userLevelName }}
                  </div>
                  <div v-else-if="platform.rank" class="text-[11px] font-mono text-slate-400">
                    {{ platform.rank }}
                  </div>
                  <div v-else class="text-[11px] font-mono text-emerald-400">
                    Active Solver
                  </div>
                </div>
              </div>

              <!-- Progress bar for platforms with category data -->
              <div v-if="platform.easy || platform.medium || platform.hard" class="mt-3 pt-2 border-t border-white/5">
                <div class="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden flex gap-0.5">
                  <div 
                    class="bg-emerald-400 h-full rounded-l-full" 
                    :style="{ width: `${(platform.easy / platform.totalSolved) * 100}%` }"
                  ></div>
                  <div 
                    class="bg-amber-400 h-full" 
                    :style="{ width: `${(platform.medium / platform.totalSolved) * 100}%` }"
                  ></div>
                  <div 
                    class="bg-rose-400 h-full rounded-r-full" 
                    :style="{ width: `${(platform.hard / platform.totalSolved) * 100}%` }"
                  ></div>
                </div>
                <div class="flex justify-between items-center text-[9px] font-mono text-slate-400 mt-1.5">
                  <span class="text-emerald-400">E: {{ platform.easy }}</span>
                  <span class="text-amber-400">M: {{ platform.medium }}</span>
                  <span class="text-rose-400">H: {{ platform.hard }}</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
/* Scrollbar moved to child component */
</style>

