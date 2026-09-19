<script setup>
import NavbarCustomized from "./components/NavbarCustomized.vue";
import AboutMe from "./components/AboutMe.vue";
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
    <NavbarCustomized />
    <main class="flex-grow">
      <AboutMe />
      <Experience />
      <Skills />
      <Project />
      <Achievements />
      <Education />
      <ContactMe />
    </main>
    <Footer />
  </div>
</template>
