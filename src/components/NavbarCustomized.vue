<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { personalInfo, socialLinks } from "../data/portfolioData.js";

const navItems = [
  { name: "About", url: "#about" },
  { name: "Experience", url: "#experience" },
  { name: "Skills", url: "#skills" },
  { name: "Projects", url: "#projects" },
  { name: "Achievements", url: "#achievements" },
  { name: "Education", url: "#education" },
  { name: "Contact", url: "#contact" }
];

const activeSection = ref("about");
const isMenuOpen = ref(false);
const isScrolled = ref(false);

let isManualScroll = false;
let scrollTimeout = null;

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;

  if (isManualScroll) return;

  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // If user has scrolled close to the bottom, highlight the last section (contact)
  if (scrollPosition + windowHeight >= documentHeight - 60) {
    activeSection.value = "contact";
    return;
  }

  // Find which section is currently at the top (with 140px navbar offset)
  const sections = Array.from(document.querySelectorAll("section[id]"));
  const offset = 140;

  const validIds = navItems.map(item => item.url.replace("#", ""));
  let foundId = null;

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i];
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    
    if (sectionTop - offset <= scrollPosition) {
      if (validIds.includes(section.id)) {
        foundId = section.id;
        break;
      } else if (section.id === 'heatmap') {
        foundId = 'about';
        break;
      }
    }
  }

  if (foundId) {
    activeSection.value = foundId;
  } else if (sections.length > 0) {
    activeSection.value = "about";
  }
};

const handleNavClick = (event, url) => {
  event.preventDefault();
  const id = url.replace("#", "");
  const targetElement = document.getElementById(id);

  activeSection.value = id;
  isMenuOpen.value = false;

  if (targetElement) {
    isManualScroll = true;
    clearTimeout(scrollTimeout);

    // Smooth scroll directly to the element taking scroll-margin-top into account
    targetElement.scrollIntoView({ behavior: "smooth" });

    // Update browser URL hash without jump
    if (history.pushState) {
      history.pushState(null, null, url);
    } else {
      window.location.hash = url;
    }

    // Re-enable scroll spy after smooth scroll finishes
    scrollTimeout = setTimeout(() => {
      isManualScroll = false;
    }, 850);
  }
};

const openResume = () => {
  window.open(personalInfo.resumeUrl, "_blank");
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  // Initial check on load
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  if (scrollTimeout) clearTimeout(scrollTimeout);
});
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled
        ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-3 shadow-lg shadow-black/20'
        : 'bg-transparent py-5'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <!-- Brand / Profile link -->
      <a
        href="#about"
        @click="handleNavClick($event, '#about')"
        class="flex items-center gap-3 group focus:outline-none cursor-pointer"
      >
        <div class="relative">
          <img
            src="../assets/ProfileImageCropped.jpg"
            alt="Rohan Chakraborty"
            class="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-500/40 group-hover:ring-cyan-400 transition-all duration-300"
          />
          <span
            class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-950"
            title="Software Engineer at Visa"
          ></span>
        </div>
        <div class="flex flex-col">
          <span
            class="text-sm font-semibold tracking-tight text-white group-hover:text-cyan-300 transition-colors"
          >
            {{ personalInfo.name }}
          </span>
          <span class="text-[11px] font-mono text-cyan-400 hidden sm:block">
            Software Engineer at <span class="visa-highlight">Visa</span>
          </span>
        </div>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
        <a
          v-for="item in navItems"
          :key="item.url"
          :href="item.url"
          @click="handleNavClick($event, item.url)"
          class="px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer"
          :class="[
            activeSection === item.url.replace('#', '')
              ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-sm shadow-indigo-500/25'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          ]"
        >
          {{ item.name }}
        </a>
      </nav>

      <!-- Right CTAs: Socials + Resume -->
      <div class="hidden sm:flex items-center gap-3">
        <a
          href="https://github.com/rohannc"
          target="_blank"
          rel="noopener noreferrer"
          class="w-9 h-9 flex items-center justify-center rounded-lg border border-white/5 bg-slate-900/50 text-slate-300 hover:text-white hover:border-indigo-500/40 transition-colors"
          title="GitHub"
        >
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path
              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
            />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/rohanchakraborty0108/"
          target="_blank"
          rel="noopener noreferrer"
          class="w-9 h-9 flex items-center justify-center rounded-lg border border-white/5 bg-slate-900/50 text-slate-300 hover:text-white hover:border-indigo-500/40 transition-colors"
          title="LinkedIn"
        >
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            />
          </svg>
        </a>

        <button
          @click="openResume"
          type="button"
          class="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors shadow-sm shadow-indigo-600/30"
        >
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          View Resume
        </button>
      </div>

      <!-- Mobile Menu Toggle Button -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        type="button"
        class="md:hidden p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900/50 border border-white/5 focus:outline-none"
        aria-label="Toggle navigation menu"
      >
        <svg v-if="!isMenuOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Dropdown Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMenuOpen"
        class="md:hidden mt-2 mx-4 p-4 rounded-2xl bg-slate-900/95 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col gap-2"
      >
        <a
          v-for="item in navItems"
          :key="item.url"
          :href="item.url"
          @click="handleNavClick($event, item.url)"
          class="px-4 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer"
          :class="[
            activeSection === item.url.replace('#', '')
              ? 'bg-indigo-600/20 text-indigo-300 font-semibold border border-indigo-500/30'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          ]"
        >
          {{ item.name }}
        </a>

        <div class="pt-3 border-t border-white/10 flex items-center justify-between">
          <button
            @click="openResume"
            class="flex-1 mr-2 py-2 flex items-center justify-center gap-1.5 text-xs font-semibold text-white bg-indigo-600 rounded-lg"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View Resume
          </button>
          <div class="flex items-center gap-2">
            <a
              href="https://github.com/rohannc"
              target="_blank"
              class="p-2 rounded-lg bg-slate-800 text-slate-300"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a
              href="https://www.linkedin.com/in/rohanchakraborty0108/"
              target="_blank"
              class="p-2 rounded-lg bg-slate-800 text-slate-300"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>