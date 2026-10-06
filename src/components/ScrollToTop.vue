<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const handleScroll = () => {
  const scrollPastThreshold = window.scrollY > 400;
  const footer = document.querySelector('footer');
  // Check if the top of the footer has scrolled into view
  const footerInView = footer ? footer.getBoundingClientRect().top < window.innerHeight : false;
  isVisible.value = scrollPastThreshold && !footerInView;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleScroll);
});
</script>

<template>
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4 scale-90"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-4 scale-90"
  >
    <button
      v-if="isVisible"
      @click="scrollToTop"
      type="button"
      class="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full glass-card bg-slate-900/80 hover:bg-slate-800 text-cyan-300 hover:text-white border border-white/10 hover:border-cyan-500/40 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer"
      title="Scroll to Top"
      aria-label="Scroll to Top"
    >
      <svg
        class="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2.5"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  </transition>
</template>
