<script setup>
import { ref } from "vue";
import { featuredProjects } from "../data/portfolioData.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const swiperModules = [Autoplay, Pagination, Navigation, EffectFade];

const getAssetUrl = (filename) => {
  return new URL(`../assets/${filename}`, import.meta.url).href;
};

const openUrl = (url) => {
  if (url) window.open(url, "_blank");
};
</script>

<template>
  <section id="projects" class="scroll-mt-20 py-12 sm:py-16 relative border-t border-white/5 bg-slate-950/70">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-10">
        <span class="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">Featured Systems</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white mt-1.5 tracking-tight">
          Featured Engineering Architectures
        </h2>
        <p class="text-sm sm:text-base text-slate-400 mt-2">
          Production systems showcasing AI computer vision forensics and multi-tenant distributed cloud platforms.
        </p>
      </div>

      <!-- DUAL SIDE-BY-SIDE / DEDICATED CARDS SHOWCASE (Option 3) -->
      <div class="space-y-12">
        <article
          v-for="(proj, pIdx) in featuredProjects"
          :key="proj.id"
          class="glass-card rounded-3xl border border-white/10 overflow-hidden shadow-2xl transition-all duration-300"
        >
          <!-- Top Card Bar: Badge + Title + Action CTAs -->
          <div class="px-6 py-4 bg-slate-900/90 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <span class="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center border border-cyan-500/20">
                0{{ pIdx + 1 }}
              </span>
              <span class="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                {{ proj.badge }}
              </span>
              <span class="text-xs font-mono text-slate-400 hidden sm:inline">{{ proj.category }}</span>
            </div>

            <!-- Action CTAs -->
            <div class="flex flex-wrap items-center gap-2">
              <!-- Primary / Backend Repo -->
              <button
                v-if="proj.githubUrl"
                @click="openUrl(proj.githubUrl)"
                type="button"
                class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-white/10 transition-colors cursor-pointer"
              >
                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>{{ proj.githubFrontendUrl ? 'Backend Repo' : 'GitHub Repo' }}</span>
                <svg class="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </button>

              <!-- Frontend Repo (for Khoj) -->
              <button
                v-if="proj.githubFrontendUrl"
                @click="openUrl(proj.githubFrontendUrl)"
                type="button"
                class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-white/10 transition-colors cursor-pointer"
              >
                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>Frontend Repo</span>
                <svg class="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </button>

              <!-- Swagger OpenAPI Docs -->
              <button
                v-if="proj.apiDocsUrl"
                @click="openUrl(proj.apiDocsUrl)"
                type="button"
                class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/70 hover:bg-cyan-900/70 border border-cyan-500/30 transition-colors cursor-pointer"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                <span>Swagger API</span>
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </button>
            </div>
          </div>

          <!-- Middle Split: Left Details & Right Visual Carousel -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch border-b border-white/5">
            <!-- Left Info Pane (lg: 6 cols) -->
            <div class="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5 space-y-6">
              <div>
                <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {{ proj.title }}
                </h3>
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mt-2">
                  <span class="text-xs font-mono text-indigo-300 font-semibold">{{ proj.tagline }}</span>
                </div>

                <div class="relative mt-4 mb-6">
                  <div class="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-cyan-500 to-indigo-500 rounded-full"></div>
                  <p class="text-xs sm:text-sm text-slate-300 leading-relaxed pl-4">
                    {{ proj.description }}
                  </p>
                </div>

                <!-- 2x2 Performance Highlights -->
                <div class="grid grid-cols-2 gap-3">
                  <div
                    v-for="(h, idx) in proj.highlights"
                    :key="idx"
                    class="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex flex-col justify-between shadow-sm hover:border-cyan-500/30 transition-colors"
                  >
                    <span class="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      {{ h.label }}
                    </span>
                    <span class="text-xs sm:text-sm font-bold text-white font-mono flex items-center gap-1.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      {{ h.value }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Tech Stack Badges -->
              <div>
                <span class="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-2">
                  Core Technologies
                </span>
                <div class="flex flex-wrap gap-1.5">
                  <span
                    v-for="tech in proj.techStack"
                    :key="tech.name"
                    class="px-2.5 py-1 rounded-lg text-[11px] font-medium font-mono bg-slate-900/90 border border-slate-800 text-slate-300"
                  >
                    {{ tech.name }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Right Visual Pane (lg: 6 cols) -->
            <div class="lg:col-span-6 p-6 sm:p-8 bg-slate-950/40 flex flex-col justify-center space-y-4">
              <!-- Window Chrome Header -->
              <div class="rounded-t-2xl bg-slate-900 border border-white/10 px-4 py-2 flex items-center justify-between">
                <div class="flex items-center gap-1.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                </div>
                <span class="text-[10px] font-mono text-slate-400">
                  {{ proj.id === 'khoj-healthcare' ? 'khoj-the-ultimate-guide.onrender.com' : 'deepfake-forensics.internal' }}
                </span>
                <span class="text-[10px] font-mono text-cyan-400">
                  {{ proj.screenshots.length }} views
                </span>
              </div>

              <!-- Swiper Screen -->
              <div class="relative border-x border-b border-white/10 rounded-b-2xl overflow-hidden shadow-2xl bg-slate-900">
                <swiper
                  :modules="swiperModules"
                  :slides-per-view="1"
                  :space-between="0"
                  :loop="true"
                  :autoplay="{ delay: 4000, disableOnInteraction: false }"
                  :pagination="{ clickable: true }"
                  :navigation="true"
                  class="w-full aspect-video"
                >
                  <swiper-slide
                    v-for="(screen, idx) in proj.screenshots"
                    :key="idx"
                    class="relative"
                  >
                    <img
                      :src="getAssetUrl(screen.file)"
                      :alt="screen.caption"
                      class="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div class="absolute inset-x-0 bottom-0 pt-2 pb-6 px-4 bg-slate-950/90 backdrop-blur-sm border-t border-white/5 text-center text-xs font-mono text-slate-300 z-0">
                      {{ screen.caption }}
                    </div>
                  </swiper-slide>
                </swiper>
              </div>

              <!-- Architecture Flow Strip -->
              <div class="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300">
                <span class="text-[10px] text-slate-400 uppercase font-semibold">Flow:</span>
                <template v-if="proj.id === 'khoj-healthcare'">
                  <span class="text-cyan-300">Vue 3</span>
                  <span class="text-slate-500">➔</span>
                  <span class="text-indigo-300">Spring Security 6 (JWT)</span>
                  <span class="text-slate-500">➔</span>
                  <span class="text-emerald-300">Supabase DB</span>
                </template>
                <template v-else>
                  <span class="text-cyan-300">Input Image/URL</span>
                  <span class="text-slate-500">➔</span>
                  <span class="text-indigo-300">ELA Forensics</span>
                  <span class="text-slate-500">➔</span>
                  <span class="text-emerald-300">98% CNN Classifier</span>
                </template>
              </div>
            </div>
          </div>

          <!-- Bottom Modular Grid: Architecture Pillars & Authors -->
          <div class="p-6 sm:p-8 bg-slate-950/30">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <!-- Modules (lg: 8 cols) -->
              <div class="lg:col-span-8">
                <span class="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-4">
                  Core Modules & Engineering Subsystems
                </span>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div
                    v-for="(item, idx) in (proj.modules || proj.keyFeatures.map(f => ({ title: 'Core Feature', desc: f })))"
                    :key="idx"
                    class="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-all"
                  >
                    <div class="flex items-center gap-2 mb-1">
                      <span class="w-4 h-4 rounded bg-cyan-500/10 text-cyan-400 text-[10px] font-bold font-mono flex items-center justify-center">
                        0{{ idx + 1 }}
                      </span>
                      <h5 class="text-xs font-semibold text-white">{{ item.title }}</h5>
                    </div>
                    <p class="text-xs text-slate-300 pl-6 leading-relaxed">{{ item.desc }}</p>
                  </div>
                </div>
              </div>

              <!-- Author / Team (lg: 4 cols) -->
              <div class="lg:col-span-4 flex flex-col justify-between">
                <span class="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold block mb-4">
                  {{ proj.teamTitle || 'Contributors' }}
                </span>
                <div class="space-y-2.5">
                  <a
                    v-for="member in proj.team"
                    :key="member.name"
                    :href="member.linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-indigo-500/40 hover:bg-slate-850 transition-all group"
                  >
                    <img
                      :src="getAssetUrl(member.avatar)"
                      :alt="member.name"
                      class="w-9 h-9 rounded-full object-cover ring-2 ring-indigo-500/30 group-hover:ring-cyan-400 transition-colors shrink-0"
                    />
                    <div class="flex flex-col min-w-0 flex-1">
                      <span class="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                        {{ member.name }}
                      </span>
                      <span class="text-[11px] text-slate-300 truncate">{{ member.role }}</span>
                      <span v-if="member.subRole" class="text-[10px] text-slate-400 truncate">{{ member.subRole }}</span>
                    </div>
                    <svg class="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 transition-colors mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </article>
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
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(6px);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  display: flex !important;
  transition: all 0.2s ease;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background: rgba(15, 23, 42, 0.98);
  border-color: rgba(56, 189, 248, 0.6);
  transform: scale(1.08);
}

:deep(.swiper-button-next) {
  right: 10px !important;
}

:deep(.swiper-button-prev) {
  left: 10px !important;
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 12px;
  font-weight: 800;
}

:deep(.swiper-pagination-bullet) {
  background: #94a3b8;
  opacity: 0.6;
  width: 6px;
  height: 6px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.swiper-pagination-bullet-active) {
  background: #38bdf8;
  opacity: 1;
  width: 20px;
  border-radius: 9999px;
  box-shadow: 0 0 10px rgba(56, 189, 248, 0.6);
}

:deep(.swiper-pagination) {
  bottom: 8px !important;
  z-index: 10 !important;
}
</style>