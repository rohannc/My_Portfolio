<script setup>
import NavbarCustomized from "./components/NavbarCustomized.vue";
import AboutMe from "./components/AboutMe.vue";
import GitHubHeatmap from "./components/GitHubHeatmap.vue";
import ThemeCustomizer from "./components/ThemeCustomizer.vue";
import TerminalOverlay from "./components/TerminalOverlay.vue";
import Experience from "./components/Experience.vue";
import Skills from "./components/Skills.vue";
import Project from "./components/Project.vue";
import Achievements from "./components/Achievements.vue";
import Education from "./components/Education.vue";
import ContactMe from "./components/ContactMe.vue";
import Footer from "./components/Footer.vue";

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-200">
    <div id="theme-content" class="flex flex-col flex-grow">
      <NavbarCustomized />
      <main class="flex-grow overflow-x-hidden">
      <AboutMe />
      <div data-aos="fade-up">
        <GitHubHeatmap />
      </div>
      <div data-aos="fade-up">
        <Experience />
      </div>
      <div data-aos="fade-up">
        <Skills />
      </div>
      <div data-aos="fade-up">
        <Project />
      </div>
      <div data-aos="fade-up">
        <Achievements />
      </div>
      <div data-aos="fade-up">
        <Education />
      </div>
      <div data-aos="fade-up">
        <ContactMe />
      </div>
    </main>
    <Footer />
    </div>
    <ThemeCustomizer />
    <TerminalOverlay />
  </div>
</template>
