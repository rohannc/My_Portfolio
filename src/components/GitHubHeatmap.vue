<script setup>
import codolioStats from '../data/codolioStats.json';
import ActivityHeatmapGrid from './ActivityHeatmapGrid.vue';
</script>

<template>
  <section id="heatmap" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
    <div class="glass-card rounded-3xl p-6 sm:p-8 border border-white/5 relative overflow-hidden group">
      <!-- Ambient Glow -->
      <div class="absolute -inset-x-20 -top-20 bg-cyan-500/10 blur-[100px] rounded-full h-64 pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>
      
      <div class="relative z-10">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <div>
            <h3 class="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <svg class="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              Coding Activity
            </h3>
            <p class="text-sm text-slate-400">A visual overview of my coding activity and commits over the past year. <span class="text-cyan-400">Darker shades indicate more activity.</span></p>
          </div>
          <div class="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 w-fit">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span class="text-sm font-semibold text-cyan-300">{{ codolioStats.activeDays || '682' }} Active Days</span>
            <span class="text-xs text-slate-400 font-mono">(Codolio)</span>
          </div>
        </div>
        
        <div class="w-full overflow-hidden rounded-xl bg-slate-900/50 border border-white/5 p-4 flex justify-center">
          <ActivityHeatmapGrid />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Scrollbar moved to child component */
</style>
