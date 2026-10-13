<script setup>
import { ref, computed } from 'vue';

// 6 Core DSA Topic Dimensions
const topics = [
  {
    id: 'dp',
    title: 'Dynamic Programming',
    mastery: 92, // Percentage
    solved: 248,
    easy: 52,
    medium: 142,
    hard: 54,
    color: '#06b6d4', // Cyan
    subtopics: ['Knapsack', 'Memoization & 2D States', 'LCS / LIS', 'DP on Trees', 'Digit DP'],
    desc: 'Deep mastery in identifying optimal substructures, state transitions, space compression, and multi-dimensional tabular memoization.'
  },
  {
    id: 'graphs',
    title: 'Graph Theory & Trees',
    mastery: 94,
    solved: 312,
    easy: 64,
    medium: 188,
    hard: 60,
    color: '#a855f7', // Purple
    subtopics: ['BFS & DFS', 'Dijkstra / Bellman-Ford', 'Disjoint Set Union (DSU)', 'Topological Sort', 'Segment Trees & Fenwick'],
    desc: 'Expertise in cycle detection, minimum spanning trees, shortest paths, tree rerooting, and advanced tree range queries.'
  },
  {
    id: 'sliding',
    title: 'Sliding Window & Pointers',
    mastery: 88,
    solved: 184,
    easy: 48,
    medium: 112,
    hard: 24,
    color: '#10b981', // Emerald
    subtopics: ['Variable Window', 'Fixed Window', 'Two Pointers (Fast/Slow)', 'Prefix Sums', 'Monotonic Queue'],
    desc: 'Optimized contiguous subarray analysis, string hashing, and sliding window maximum in linear O(N) amortized time.'
  },
  {
    id: 'binary-search',
    title: 'Binary Search & Sorting',
    mastery: 90,
    solved: 215,
    easy: 60,
    medium: 125,
    hard: 30,
    color: '#f59e0b', // Amber
    subtopics: ['Search on Answer Space', 'Rotated Sorted Arrays', 'Lower / Upper Bound', 'Median of Streams', 'QuickSelect'],
    desc: 'Advanced monotonic predicate formulation, search space minimization, and divide-and-conquer logarithmic boundaries.'
  },
  {
    id: 'math',
    title: 'Math & Number Theory',
    shortLabel: 'Math',
    mastery: 85,
    solved: 165,
    easy: 55,
    medium: 88,
    hard: 22,
    color: '#ec4899', // Pink
    subtopics: ['Modular Arithmetic', 'Sieve of Eratosthenes', 'Bitmask DP', 'Combinatorics (nCr)', 'Fermat Little Theorem'],
    desc: 'Bitwise optimization, bit manipulation masks for exponential subsets, fast exponentiation, and prime factorization.'
  },
  {
    id: 'greedy',
    title: 'Greedy & Heuristics',
    mastery: 89,
    solved: 196,
    easy: 58,
    medium: 110,
    hard: 28,
    color: '#3b82f6', // Blue
    subtopics: ['Interval Scheduling', 'Huffman Coding', 'Activity Selection', 'Priority Queue Matching', 'Fractional Knapsack'],
    desc: 'Locally optimal choice verification, exchange arguments, heap-driven task ordering, and greedy heuristics.'
  }
];

const selectedTopicId = ref('dp');
const hoveredTopicId = ref(null);

const activeTopic = computed(() => {
  const currentId = hoveredTopicId.value || selectedTopicId.value;
  return topics.find(t => t.id === currentId) || topics[0];
});

// Radar geometry parameters (Center: 210, 210, Max Radius: 150)
const cx = 210;
const cy = 210;
const maxRadius = 145;
const levels = [0.25, 0.5, 0.75, 1.0];

// Calculate coordinate for a topic at a given scale factor (0 to 1)
function getPoint(index, valueRatio = 1) {
  const total = topics.length;
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  const r = maxRadius * valueRatio;
  return {
    x: cx + r * Math.cos(angle),
    y: cy + r * Math.sin(angle)
  };
}

// Generate concentric polygon grid path
function getLevelPolygon(ratio) {
  return topics
    .map((_, i) => {
      const p = getPoint(i, ratio);
      return `${p.x},${p.y}`;
    })
    .join(' ');
}

// Generate data polygon path for mastery percentages
const dataPolygonPath = computed(() => {
  return topics
    .map((t, i) => {
      const p = getPoint(i, t.mastery / 100);
      return `${p.x},${p.y}`;
    })
    .join(' ');
});
</script>

<template>
  <div class="radar-container w-full rounded-2xl bg-slate-900/60 border border-white/5 p-5 sm:p-6 shadow-xl backdrop-blur-md font-sans">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
      <!-- Left: SVG Multi-Axis Radar Canvas (5 cols) -->
      <div class="lg:col-span-5 flex flex-col items-center justify-center relative">
        <svg viewBox="0 0 420 420" class="w-full max-w-[360px] h-auto select-none overflow-visible">
          <defs>
            <!-- Gradient for data polygon -->
            <radialGradient id="radar-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.5" />
              <stop offset="100%" stop-color="#a855f7" stop-opacity="0.15" />
            </radialGradient>
          </defs>

          <!-- Concentric Reference Polygons -->
          <g class="radar-grid">
            <polygon
              v-for="(lvl, idx) in levels"
              :key="idx"
              :points="getLevelPolygon(lvl)"
              fill="none"
              stroke="#334155"
              stroke-width="1"
              stroke-opacity="0.4"
              :stroke-dasharray="idx === levels.length - 1 ? 'none' : '3,3'"
            />
          </g>

          <!-- Axis Spokes -->
          <g class="radar-axes">
            <line
              v-for="(t, idx) in topics"
              :key="t.id"
              :x1="cx"
              :y1="cy"
              :x2="getPoint(idx, 1).x"
              :y2="getPoint(idx, 1).y"
              :stroke="activeTopic.id === t.id ? t.color : '#334155'"
              :stroke-width="activeTopic.id === t.id ? 2 : 1"
              :stroke-opacity="activeTopic.id === t.id ? 0.8 : 0.3"
              class="transition-colors duration-200"
            />
          </g>

          <!-- Master Data Polygon -->
          <polygon
            :points="dataPolygonPath"
            fill="url(#radar-glow)"
            stroke="#38bdf8"
            stroke-width="2.5"
            stroke-linejoin="round"
            class="transition-all duration-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]"
          />

          <!-- Data Points on Axes -->
          <g class="radar-points">
            <g
              v-for="(t, idx) in topics"
              :key="t.id"
              class="cursor-pointer group"
              @mouseenter="hoveredTopicId = t.id"
              @mouseleave="hoveredTopicId = null"
              @click="selectedTopicId = t.id"
            >
              <!-- Outer halo circle when active -->
              <circle
                v-if="activeTopic.id === t.id"
                :cx="getPoint(idx, t.mastery / 100).x"
                :cy="getPoint(idx, t.mastery / 100).y"
                r="10"
                fill="none"
                :stroke="t.color"
                stroke-width="1.5"
                class="transition-all duration-200"
              />

              <!-- Point Dot -->
              <circle
                :cx="getPoint(idx, t.mastery / 100).x"
                :cy="getPoint(idx, t.mastery / 100).y"
                :r="activeTopic.id === t.id ? 5 : 3.5"
                :fill="t.color"
                stroke="#090d16"
                stroke-width="1.5"
                class="transition-all duration-200"
              />

              <!-- Outer Axis Label Indicator -->
              <text
                :x="getPoint(idx, 1.18).x"
                :y="getPoint(idx, 1.18).y + 4"
                text-anchor="middle"
                class="text-[10px] font-mono select-none transition-colors duration-200"
                :class="activeTopic.id === t.id ? 'font-bold fill-white' : 'fill-slate-400 group-hover:fill-slate-200'"
              >
                {{ t.shortLabel || t.title.split(' ')[0] }}
              </text>
            </g>
          </g>

          <!-- Center Reference Dot -->
          <circle :cx="cx" :cy="cy" r="2.5" fill="#64748b" />
        </svg>

        <!-- Mastery Legend Summary -->
        <span class="text-[11px] font-mono text-slate-400 mt-2">
          Average Algorithmic Mastery: <span class="text-cyan-400 font-bold">89.6%</span>
        </span>
      </div>

      <!-- Right: Interactive Topic Deep-Dive Inspector (7 cols) -->
      <div class="lg:col-span-7 flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-slate-950/60 border border-white/5 shadow-inner min-h-[340px]">
        <div>
          <!-- Header: Topic Title -->
          <div class="flex items-center justify-between gap-3 pb-3 mb-3 border-b border-white/5">
            <div class="flex items-center gap-3">
              <span class="w-3 h-3 rounded-full" :style="{ backgroundColor: activeTopic.color }" />
              <h4 class="text-base sm:text-lg font-bold text-white tracking-tight">
                {{ activeTopic.title }}
              </h4>
            </div>
          </div>

          <!-- Description -->
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
            {{ activeTopic.desc }}
          </p>

          <!-- Problem Distribution Breakdown (Easy / Medium / Hard) -->
          <div class="mb-4">
            <div class="flex items-center justify-between text-xs font-mono mb-1.5">
              <span class="text-slate-400">Solved in Topic:</span>
              <span class="text-white font-bold">{{ activeTopic.solved }} problems</span>
            </div>

            <!-- Multi-tier progress bar -->
            <div class="w-full h-2 rounded-full bg-slate-800 overflow-hidden flex gap-0.5">
              <div 
                class="bg-emerald-400 h-full rounded-l-full" 
                :style="{ width: `${(activeTopic.easy / activeTopic.solved) * 100}%` }"
                :title="`Easy: ${activeTopic.easy}`"
              />
              <div 
                class="bg-amber-400 h-full" 
                :style="{ width: `${(activeTopic.medium / activeTopic.solved) * 100}%` }"
                :title="`Medium: ${activeTopic.medium}`"
              />
              <div 
                class="bg-rose-500 h-full rounded-r-full" 
                :style="{ width: `${(activeTopic.hard / activeTopic.solved) * 100}%` }"
                :title="`Hard: ${activeTopic.hard}`"
              />
            </div>

            <div class="flex items-center justify-between text-[10px] font-mono mt-1 text-slate-400">
              <span class="text-emerald-400 font-semibold">{{ activeTopic.easy }} Easy</span>
              <span class="text-amber-400 font-semibold">{{ activeTopic.medium }} Medium</span>
              <span class="text-rose-400 font-semibold">{{ activeTopic.hard }} Hard</span>
            </div>
          </div>

          <!-- Key Subtopics & Algorithmic Patterns -->
          <div>
            <span class="text-[11px] font-mono uppercase text-slate-400 tracking-wider">Mastered Patterns & Algorithms</span>
            <div class="flex flex-wrap gap-1.5 mt-2">
              <span
                v-for="sub in activeTopic.subtopics"
                :key="sub"
                class="text-xs px-2.5 py-1 rounded-lg bg-slate-900 border border-white/5 text-slate-300 font-mono"
              >
                {{ sub }}
              </span>
            </div>
          </div>
        </div>

        <!-- Quick Interactive Selector Strip at the Bottom -->
        <div class="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center gap-1.5">
          <button
            v-for="t in topics"
            :key="t.id"
            @click="selectedTopicId = t.id"
            class="px-2.5 py-1 rounded-md text-[11px] font-mono transition-all cursor-pointer border"
            :class="activeTopic.id === t.id 
              ? 'bg-slate-800 text-white border-white/30 font-semibold' 
              : 'bg-transparent text-slate-400 border-transparent hover:text-white hover:bg-slate-900'"
          >
            {{ t.shortLabel || t.title.split(' ')[0] }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
