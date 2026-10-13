<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import { personalInfo, featuredProject } from '../data/portfolioData.js';
import codolioStats from '../data/codolioStats.json';

const isOpen = ref(false);
const searchQuery = ref('');
const selectedIndex = ref(0);
const searchInput = ref(null);

// Command / search items with rich searchable keywords
const actions = [
  // Navigation
  { id: 'nav-about', title: 'About & Bio', category: 'Navigation', keywords: ['about', 'bio', 'who', 'rohan', 'jadavpur', 'visa'], action: () => navigateTo('#about') },
  { id: 'nav-experience', title: 'Experience (Visa)', category: 'Navigation', keywords: ['experience', 'work', 'visa', 'job', 'internship', 'role', 'software engineer'], action: () => navigateTo('#experience') },
  { id: 'nav-skills', title: 'Skills & Tech Stack', category: 'Navigation', keywords: ['skills', 'tech', 'stack', 'python', 'java', 'langgraph', 'spring', 'kubernetes', 'mcp'], action: () => navigateTo('#skills') },
  { id: 'nav-projects', title: 'Featured Project (DeepFake Detection)', category: 'Navigation', keywords: ['project', 'deepfake', 'ela', 'detection', 'ai', 'vision', 'pytorch'], action: () => navigateTo('#projects') },
  { id: 'nav-heatmap', title: 'Coding Activity & Competitive Heatmap', category: 'Navigation', keywords: ['heatmap', 'activity', 'leetcode', 'geeksforgeeks', 'dsa', 'commits', 'stats'], action: () => navigateTo('#heatmap') },
  { id: 'nav-achievements', title: 'Achievements & Milestones', category: 'Navigation', keywords: ['achievements', 'awards', 'rank', 'wbjeca', 'hackathon', 'milestones'], action: () => navigateTo('#achievements') },
  { id: 'nav-education', title: 'Education (Jadavpur University)', category: 'Navigation', keywords: ['education', 'college', 'degree', 'jadavpur', 'university', 'mca', 'bca'], action: () => navigateTo('#education') },
  { id: 'nav-contact', title: 'Contact & Collaboration', category: 'Navigation', keywords: ['contact', 'email', 'message', 'reach', 'collaborate', 'hire'], action: () => navigateTo('#contact') },

  // Quick Actions
  { id: 'act-resume-view', title: 'View Official Resume', category: 'Actions', keywords: ['resume', 'cv', 'pdf', 'view'], action: () => window.open(personalInfo.resumeUrl, '_blank') },
  { id: 'act-resume-download', title: 'Download Resume (PDF)', category: 'Actions', keywords: ['download', 'resume', 'cv', 'pdf'], action: () => window.open(personalInfo.resumeDownloadUrl, '_blank') },
  { id: 'act-copy-email', title: `Copy Email: ${personalInfo.email}`, category: 'Actions', keywords: ['email', 'copy', 'mail', 'address'], action: () => copyEmail() },
  { id: 'act-open-github', title: 'Open GitHub Profile (@rohannc)', category: 'Actions', keywords: ['github', 'git', 'profile', 'code', 'repo'], action: () => window.open('https://github.com/rohannc', '_blank') },
  { id: 'act-open-linkedin', title: 'Open LinkedIn Profile', category: 'Actions', keywords: ['linkedin', 'profile', 'connect', 'social'], action: () => window.open('https://www.linkedin.com/in/rohanchakraborty0108/', '_blank') },
  { id: 'act-open-codolio', title: `Open Codolio Profile (${codolioStats.totalSolved} solved)`, category: 'Actions', keywords: ['codolio', 'dsa', 'profile', 'rating', 'problems'], action: () => window.open(personalInfo.codolioUrl, '_blank') },
  { id: 'act-deepfake-github', title: 'Open DeepFake Detection Repository', category: 'Actions', keywords: ['deepfake', 'github', 'repo', 'source', 'code'], action: () => window.open(featuredProject.githubUrl, '_blank') },
  { id: 'act-open-terminal', title: 'Open Interactive Terminal (Ctrl + `)', category: 'Actions', keywords: ['terminal', 'cli', 'bash', 'console', 'sudo'], action: () => openTerminal() },
];

// Dynamically match as user types each character (hidden when search input is empty)
const filteredActions = computed(() => {
  const q = searchQuery.value.trim().toLowerCase();
  if (!q) return [];
  
  return actions.filter(item => {
    const titleMatch = item.title.toLowerCase().includes(q);
    const categoryMatch = item.category.toLowerCase().includes(q);
    const keywordMatch = item.keywords?.some(k => k.toLowerCase().includes(q));
    return titleMatch || categoryMatch || keywordMatch;
  });
});

const navigateTo = (selector) => {
  isOpen.value = false;
  const el = document.querySelector(selector);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const copyEmail = () => {
  isOpen.value = false;
  navigator.clipboard?.writeText(personalInfo.email);
};

const openTerminal = () => {
  isOpen.value = false;
  // Trigger keyboard event for terminal
  window.dispatchEvent(new KeyboardEvent('keydown', { key: '`', ctrlKey: true }));
};

const openPalette = () => {
  isOpen.value = true;
  searchQuery.value = '';
  selectedIndex.value = 0;
  nextTick(() => {
    searchInput.value?.focus();
  });
};

const closePalette = () => {
  isOpen.value = false;
};

const handleSelect = (item) => {
  if (item && item.action) {
    item.action();
    isOpen.value = false;
  }
};

const handleKeydown = (e) => {
  // Global trigger: Ctrl+K or Cmd+K
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    if (isOpen.value) {
      closePalette();
    } else {
      openPalette();
    }
    return;
  }

  if (!isOpen.value) return;

  if (e.key === 'Escape') {
    e.preventDefault();
    closePalette();
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (filteredActions.value.length > 0) {
      selectedIndex.value = (selectedIndex.value + 1) % filteredActions.value.length;
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (filteredActions.value.length > 0) {
      selectedIndex.value = (selectedIndex.value - 1 + filteredActions.value.length) % filteredActions.value.length;
    }
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (filteredActions.value[selectedIndex.value]) {
      handleSelect(filteredActions.value[selectedIndex.value]);
    }
  }
};

defineExpose({
  openPalette,
  closePalette
});

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <Transition name="palette-fade">
    <div 
      v-if="isOpen" 
      class="fixed inset-0 z-[120] flex items-start justify-center pt-20 sm:pt-28 px-4 bg-slate-950/75 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      @click.self="closePalette"
    >
      <div class="palette-box w-full max-w-xl bg-slate-900/95 border border-white/10 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-cyan-500/20 flex flex-col font-sans">
        <!-- Search Input Bar -->
        <div class="flex items-center px-4 py-3.5 border-b border-white/10 gap-3 bg-slate-900">
          <svg class="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref="searchInput"
            v-model="searchQuery"
            type="text"
            placeholder="Type a command or search sections, resume, links..."
            class="w-full bg-transparent border-none outline-none text-white placeholder-slate-400 text-sm font-medium"
            @input="selectedIndex = 0"
          />
          <kbd class="px-2 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-slate-800 border border-white/10">ESC</kbd>
        </div>

        <!-- Results List -->
        <div class="max-h-80 overflow-y-auto p-2 custom-scrollbar space-y-1">
          <!-- Empty input state: guide user to start typing -->
          <div v-if="!searchQuery.trim()" class="py-10 text-center text-slate-400 flex flex-col items-center justify-center gap-2">
            <svg class="w-8 h-8 text-slate-600 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 15l-2 2m0 0l-2-2m2 2V9m0 12a9 9 0 110-18 9 9 0 010 18z" />
            </svg>
            <p class="text-xs sm:text-sm font-medium text-slate-300">Start typing to search...</p>
            <p class="text-[11px] text-slate-500 font-mono">
              Try typing <span class="text-cyan-400">"visa"</span>, <span class="text-cyan-400">"skills"</span>, <span class="text-cyan-400">"resume"</span>, or <span class="text-cyan-400">"project"</span>
            </p>
          </div>

          <!-- Typed query but no match found -->
          <div v-else-if="filteredActions.length === 0" class="py-8 text-center text-sm text-slate-400">
            No matching commands found for <span class="text-cyan-400 font-mono">"{{ searchQuery }}"</span>.
          </div>

          <!-- Dynamic matched items while user is typing -->
          <button
            v-for="(item, idx) in filteredActions"
            :key="item.id"
            @click="handleSelect(item)"
            @mouseenter="selectedIndex = idx"
            class="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm transition-colors cursor-pointer group"
            :class="idx === selectedIndex ? 'bg-cyan-500/15 text-white border border-cyan-500/30' : 'text-slate-300 hover:bg-slate-800/60 border border-transparent'"
          >
            <div class="flex items-center gap-3 truncate">
              <span class="text-xs font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-400 group-hover:text-cyan-300">
                {{ item.category }}
              </span>
              <span class="font-medium truncate">{{ item.title }}</span>
            </div>

            <div class="flex items-center gap-2 flex-shrink-0 text-slate-500 group-hover:text-cyan-400 transition-colors">
              <span class="text-[11px] opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline">Jump</span>
              <svg class="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        <!-- Footer / Keyboard Hint -->
        <div class="px-4 py-2.5 border-t border-white/5 bg-slate-950/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <div class="flex items-center gap-3">
            <span><kbd class="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded border border-white/10">↑</kbd> <kbd class="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded border border-white/10">↓</kbd> Navigate</span>
            <span><kbd class="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded border border-white/10">↵</kbd> Select</span>
          </div>
          <span class="text-cyan-400">Rohan's Portfolio Spotlight</span>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.palette-fade-enter-active,
.palette-fade-leave-active {
  transition: opacity 0.2s ease;
}

.palette-fade-enter-active .palette-box,
.palette-fade-leave-active .palette-box {
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease;
}

.palette-fade-enter-from {
  opacity: 0;
}

.palette-fade-enter-from .palette-box {
  opacity: 0;
  transform: translateY(-16px) scale(0.96);
}

.palette-fade-leave-to {
  opacity: 0;
}

.palette-fade-leave-to .palette-box {
  opacity: 0;
  transform: translateY(-8px) scale(0.98);
}

.custom-scrollbar::-webkit-scrollbar {
  width: 5px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}
</style>
