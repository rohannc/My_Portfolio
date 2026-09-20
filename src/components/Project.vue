<script setup>
import { ref } from "vue";
import { featuredProject } from "../data/portfolioData.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const swiperModules = [Autoplay, Pagination, Navigation, EffectFade];
const currentSlideIndex = ref(0);

const getAssetUrl = (filename) => {
  return new URL(`../assets/${filename}`, import.meta.url).href;
};

const openGitHub = () => {
  window.open(featuredProject.githubUrl, "_blank");
};
</script>

<template>
  <section id="projects" class="scroll-mt-20 py-10 sm:py-14 relative border-t border-white/5 bg-slate-950/60">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-8">
        <span class="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">Featured Engineering Project</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white mt-1.5 tracking-tight">
          DeepFake Image Detection
        </h2>
        <p class="text-sm sm:text-base text-slate-400 mt-3">
          A high-precision forensic platform combining Error Level Analysis ( ELA ) and Deep Learning to spot synthetic and manipulated facial imagery.
        </p>
      </div>

      <!-- Main Project Showcase Card -->
      <div class="glass-card rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
        <!-- Top Banner Bar -->
        <div class="px-6 py-4 bg-slate-900/80 border-b border-white/5 flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <span class="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {{ featuredProject.accuracy }} Validation Accuracy
            </span>
            <span class="text-xs font-mono text-slate-400 hidden sm:inline">AI + Forensic Forefront</span>
          </div>

          <div class="flex items-center gap-2.5">
            <button
              @click="openGitHub"
              type="button"
              class="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-white/10 transition-colors"
            >
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub Repository
              <svg class="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Middle: Two Columns (Carousel & Overview) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <!-- Left Col: Interactive Image Slider -->
          <div class="lg:col-span-7 p-6 sm:p-8 bg-slate-950/40 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
              <swiper
                :modules="swiperModules"
                :slides-per-view="1"
                :space-between="0"
                :loop="true"
                :autoplay="{ delay: 4000, disableOnInteraction: false }"
                :pagination="{ clickable: true }"
                :navigation="true"
                class="w-full aspect-video rounded-2xl"
              >
                <swiper-slide
                  v-for="(screen, idx) in featuredProject.screenshots"
                  :key="idx"
                  class="relative"
                >
                  <img
                    :src="getAssetUrl(screen.file)"
                    :alt="screen.caption"
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <!-- Caption overlay -->
                  <div class="absolute inset-x-0 bottom-0 pt-2.5 pb-7 px-4 bg-slate-950/90 backdrop-blur-sm border-t border-white/5 text-center text-xs font-mono text-slate-300 z-0">
                    {{ screen.caption }}
                  </div>
                </swiper-slide>
              </swiper>
            </div>

            <!-- Slide counter notice -->
            <p class="text-center text-xs text-slate-400 mt-3 font-mono">
              {{ featuredProject.screenshots.length }} Interactive system views & forensic evaluation charts
            </p>
          </div>

          <!-- Right Col: Technical Breakdown & Features -->
          <div class="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between relative z-10">
            <div>
              <h3 class="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-slate-400 mb-3">
                {{ featuredProject.title }}
              </h3>
              
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                 <svg class="w-3.5 h-3.5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                 <span class="text-[11px] font-mono text-indigo-300 font-semibold tracking-wide">
                  {{ featuredProject.tagline }}
                 </span>
              </div>

              <div class="relative mb-8">
                <div class="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-cyan-500 to-indigo-500 rounded-full"></div>
                <p class="text-sm text-slate-300 leading-relaxed pl-5">
                  {{ featuredProject.description }}
                </p>
              </div>

              <!-- Key Architecture Points -->
              <div class="mb-8">
                <div class="flex items-center gap-3 mb-5">
                  <div class="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
                  <span class="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold">
                    Key Capabilities
                  </span>
                  <div class="h-[1px] flex-1 bg-gradient-to-l from-white/10 to-transparent"></div>
                </div>
                
                <ul class="grid grid-cols-1 gap-2.5">
                  <li
                    v-for="(feat, idx) in featuredProject.keyFeatures"
                    :key="idx"
                    class="group flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/40 border border-white/5 hover:bg-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 shadow-sm"
                  >
                    <div class="mt-0.5 p-1 rounded-md bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-900 transition-colors shrink-0">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span class="text-xs text-slate-300 group-hover:text-slate-200 leading-relaxed">{{ feat }}</span>
                  </li>
                </ul>
              </div>

              <!-- Tech Stack Badges -->
              <div>
                <span class="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block mb-3 pl-1">
                  Powered By
                </span>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in featuredProject.techStack"
                    :key="tech.name"
                    class="px-3 py-1.5 rounded-lg text-[11px] font-medium font-mono bg-slate-950/60 border border-slate-800 text-slate-400 shadow-sm hover:border-indigo-500/50 hover:text-indigo-300 hover:shadow-[0_0_12px_rgba(99,102,241,0.15)] transition-all duration-300 cursor-default"
                  >
                    {{ tech.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Bar: Team & Authors -->
        <div class="px-6 py-6 bg-slate-900/60 border-t border-white/5">
          <span class="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-4 text-center sm:text-left">
            Project Contributors & Research Team
          </span>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              v-for="member in featuredProject.team"
              :key="member.name"
              :href="member.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-950/60 border border-white/5 hover:border-indigo-500/40 hover:bg-slate-900 transition-all duration-200 group"
            >
              <img
                :src="getAssetUrl(member.avatar)"
                :alt="member.name"
                class="w-11 h-11 rounded-full object-cover ring-2 ring-indigo-500/30 group-hover:ring-cyan-400 transition-colors"
              />
              <div class="flex flex-col min-w-0 flex-1">
                <span class="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                  {{ member.name }}
                </span>
                <div class="text-[11px] leading-snug mt-0.5">
                  <span class="block text-slate-300 font-medium truncate">{{ member.role }}</span>
                  <span v-if="member.subRole" class="block text-slate-400 text-[10px] truncate mt-0.5">{{ member.subRole }}</span>
                  <span v-else-if="!member.subRole" class="block line-clamp-2 text-slate-400">{{ member.role }}</span>
                </div>
              </div>
              <svg class="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #38bdf8;
  width: 32px;
  height: 32px;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(4px);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 14px;
  font-weight: bold;
}

:deep(.swiper-pagination-bullet) {
  background: #64748b;
  opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
  background: #38bdf8;
  opacity: 1;
  width: 20px;
  border-radius: 4px;
}

:deep(.swiper-pagination) {
  bottom: 6px !important;
  z-index: 10 !important;
}
</style>