<script setup>
import { skillCategories } from "../data/portfolioData.js";

const activeTimers = new WeakMap();

function handleChipEnter(event) {
  const chip = event.currentTarget;
  const container = chip.querySelector(".chip-title-container");
  const text = chip.querySelector(".chip-title-text");
  if (!container || !text) return;

  const overflow = text.scrollWidth - container.clientWidth;
  if (overflow <= 2) return;

  container.style.textOverflow = "clip";
  chip.dataset.hovered = "true";

  const speed = 35; // pixels per second
  const duration = Math.max(1.2, overflow / speed);

  const runScroll = () => {
    if (chip.dataset.hovered !== "true") return;

    // Scroll right to left (translating negative X)
    text.style.transition = `transform ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1)`;
    text.style.transform = `translateX(-${overflow + 4}px)`;

    const timer1 = setTimeout(() => {
      if (chip.dataset.hovered !== "true") return;

      // Pause at the end for 1.2s to allow reading
      const timer2 = setTimeout(() => {
        if (chip.dataset.hovered !== "true") return;

        // Return to start
        text.style.transition = `transform ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1)`;
        text.style.transform = "translateX(0px)";

        // Pause at start, then repeat if still hovering
        const timer3 = setTimeout(() => {
          if (chip.dataset.hovered === "true") {
            runScroll();
          }
        }, (duration + 1) * 1000);

        activeTimers.set(chip, timer3);
      }, 1200);

      activeTimers.set(chip, timer2);
    }, duration * 1000);

    activeTimers.set(chip, timer1);
  };

  runScroll();
}

function handleChipLeave(event) {
  const chip = event.currentTarget;
  chip.dataset.hovered = "false";

  if (activeTimers.has(chip)) {
    clearTimeout(activeTimers.get(chip));
    activeTimers.delete(chip);
  }

  const container = chip.querySelector(".chip-title-container");
  const text = chip.querySelector(".chip-title-text");
  if (text) {
    text.style.transition = "transform 0.35s ease-out";
    text.style.transform = "translateX(0px)";
  }
  if (container) {
    setTimeout(() => {
      if (chip.dataset.hovered !== "true") {
        container.style.textOverflow = "ellipsis";
      }
    }, 350);
  }
}
</script>

<template>
  <section id="skills" class="scroll-mt-20 py-10 sm:py-14 relative border-t border-white/5 bg-transparent">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-10">
        <span class="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">Technical Competencies</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white mt-1.5 tracking-tight">
          Skills & Technologies
        </h2>
        <p class="text-sm sm:text-base text-slate-400 mt-3">
          A structured breakdown of programming languages, libraries, computer science coursework, DevOps tools, cloud infrastructure, and engineering methodologies.
        </p>
      </div>

      <!-- Categories Grid: 2 columns on tablet/desktop, perfectly balanced with 6 cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <div
          v-for="(category, catIdx) in skillCategories"
          :key="catIdx"
          class="glass-card rounded-2xl p-6 sm:p-7 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <!-- Category Title Header -->
            <div class="flex items-center justify-between pb-4 mb-5 border-b border-white/5">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <!-- Code Icon -->
                  <svg v-if="category.icon === 'code'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <!-- Library / Frameworks Icon -->
                  <svg v-else-if="category.icon === 'library'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <!-- Academic / Coursework Icon -->
                  <svg v-else-if="category.icon === 'academic'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                  <!-- Tools Icon -->
                  <svg v-else-if="category.icon === 'tools'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <!-- Cloud Icon -->
                  <svg v-else-if="category.icon === 'cloud'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                  <!-- Layers / Methodologies Icon -->
                  <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 class="text-base sm:text-lg font-bold text-white tracking-tight">
                  {{ category.title }}
                </h3>
              </div>
              <span class="text-xs font-mono text-cyan-400/80 bg-cyan-950/40 border border-cyan-500/20 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                {{ category.skills.length }} {{ category.title.includes('Coursework') ? 'topics' : category.title.includes('Methodologies') ? 'concepts' : 'technologies' }}
              </span>
            </div>

            <!-- Skills Chips Grid -->
            <!-- If category has detailed descriptions (Cloud, Containers & Streaming), render rich cards -->
            <div
              v-if="category.skills.some(s => s.desc)"
              class="flex flex-col gap-3"
            >
              <div
                v-for="skill in category.skills"
                :key="skill.name"
                :title="skill.name"
                @mouseenter="handleChipEnter"
                @mouseleave="handleChipLeave"
                class="group flex items-start gap-2.5 sm:gap-3.5 p-3 sm:p-3.5 rounded-xl bg-slate-900/80 border border-white/5 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all duration-200 overflow-hidden cursor-pointer"
              >
                <div class="w-10 h-10 rounded-lg bg-slate-800 p-2 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform mt-0.5">
                  <img
                    :src="skill.icon"
                    :alt="skill.name"
                    class="w-full h-full object-contain"
                    :class="skill.invertIcon ? 'brightness-0 invert opacity-90' : ''"
                    loading="lazy"
                  />
                </div>
                <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
                  <div class="flex items-center gap-2 flex-wrap mb-0.5">
                    <div class="chip-title-container overflow-hidden whitespace-nowrap max-w-[200px]" style="text-overflow: ellipsis;">
                      <span class="chip-title-text inline-block whitespace-nowrap text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors will-change-transform">
                        {{ skill.name }}
                      </span>
                    </div>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/20 flex-shrink-0">
                      {{ skill.level }}
                    </span>
                  </div>
                  <span v-if="skill.desc" class="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    {{ skill.desc }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Standard 2-column grid for other categories: auto-scroll on hover if overflow -->
            <div
              v-else
              class="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
            >
              <div
                v-for="skill in category.skills"
                :key="skill.name"
                :title="skill.name"
                @mouseenter="handleChipEnter"
                @mouseleave="handleChipLeave"
                class="group flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/70 border border-white/5 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all duration-200 overflow-hidden cursor-pointer"
              >
                <div class="w-8 h-8 rounded-lg bg-slate-800 p-1.5 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <img
                    :src="skill.icon"
                    :alt="skill.name"
                    class="w-full h-full object-contain"
                    :class="skill.invertIcon ? 'brightness-0 invert opacity-90' : ''"
                    loading="lazy"
                  />
                </div>

                <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
                  <div class="chip-title-container w-full overflow-hidden whitespace-nowrap" style="text-overflow: ellipsis;">
                    <span class="chip-title-text inline-block whitespace-nowrap text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors will-change-transform">
                      {{ skill.name }}
                    </span>
                  </div>
                  <span class="text-[10px] font-mono text-slate-400 mt-0.5 truncate">
                    {{ skill.level }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>