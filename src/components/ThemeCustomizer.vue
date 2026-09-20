<script setup>
import { ref, onMounted } from 'vue';

// Calculate hue rotation relative to base Cyan (Hue ~190°)
const themes = [
  { name: 'Cyan ( Default )', hue: 0, color: '#06b6d4' },
  { name: 'Emerald', hue: -30, color: '#10b981' },
  { name: 'Blue', hue: 27, color: '#3b82f6' },
  { name: 'Fuchsia', hue: 102, color: '#d946ef' },
  { name: 'Amber', hue: -152, color: '#f59e0b' },
];

const currentHue = ref(0);
const isOpen = ref(false);
const isLightMode = ref(false);

const applyTheme = () => {
  document.documentElement.style.setProperty('--theme-hue', `${currentHue.value}deg`);
  
  if (isLightMode.value) {
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
  }
  
  let filterStr = '';
  if (currentHue.value !== 0) {
    filterStr = `hue-rotate(${currentHue.value}deg)`;
  }
  
  document.getElementById('theme-content').style.filter = filterStr;
};

const setTheme = (hue) => {
  currentHue.value = hue;
  applyTheme();
};

const toggleLightMode = () => {
  isLightMode.value = !isLightMode.value;
  applyTheme();
};

onMounted(() => {
  const style = document.createElement('style');
  style.innerHTML = `
    #theme-content { transition: filter 0.5s ease-in-out; }
    img, video { transition: filter 0.5s ease-in-out; }
    /* Counteract hue-rotation on images to preserve true colors for photos */
    #theme-content[style*="hue-rotate"] img {
      filter: hue-rotate(calc(var(--theme-hue) * -1));
    }
    
    /* Keep the Visa blue highlight intact regardless of theme */
    #theme-content .visa-highlight {
      filter: hue-rotate(calc(var(--theme-hue) * -1));
    }
  `;
  document.head.appendChild(style);
});
</script>

<template>
  <!-- Transparent overlay to detect clicks outside -->
  <div v-if="isOpen" @click="isOpen = false" class="fixed inset-0 z-40"></div>

  <div id="theme-customizer-wrapper" class="fixed bottom-6 left-6 z-50 flex items-end">
    <div 
      class="flex flex-col gap-3 mb-2 transition-all duration-300 origin-bottom absolute bottom-14 left-1 items-center"
      :class="isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'"
    >
      <!-- Light Mode Toggle -->
      <button 
        @click="toggleLightMode"
        class="w-10 h-10 rounded-full shadow-lg border-2 border-white/20 hover:scale-110 transition-transform flex items-center justify-center cursor-pointer bg-slate-800 mb-2"
        :title="isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'"
      >
        <svg v-if="!isLightMode" class="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 24 24">
          <!-- Sun Icon -->
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.758a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
        </svg>
        <svg v-else class="w-5 h-5 text-indigo-300" fill="currentColor" viewBox="0 0 24 24">
          <!-- Moon Icon -->
          <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
        </svg>
      </button>

      <button 
        v-for="theme in themes" 
        :key="theme.name"
        @click="setTheme(theme.hue)"
        class="w-10 h-10 rounded-full shadow-lg border-2 hover:scale-110 transition-transform flex items-center justify-center cursor-pointer"
        :class="currentHue === theme.hue ? 'border-white' : 'border-white/20'"
        :style="{ backgroundColor: theme.color }"
        :title="theme.name"
      >
        <svg v-if="currentHue === theme.hue" class="w-5 h-5 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
        </svg>
      </button>
    </div>
    
    <button 
      @click="isOpen = !isOpen"
      class="w-12 h-12 rounded-full bg-slate-800 border border-white/10 text-white flex items-center justify-center shadow-xl hover:bg-slate-700 transition-colors z-10 cursor-pointer"
      title="Customize Theme"
      :class="{ 'ring-2 ring-cyan-500/50': isOpen }"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    </button>
  </div>
</template>
