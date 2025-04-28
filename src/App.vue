<script setup>
import NavbarCustomized from './components/NavbarCustomized.vue'
import AboutMe from './components/AboutMe.vue'
import Skills from './components/Skills.vue'
import Footer from './components/Footer.vue'
import Education from './components/Education.vue'
import Achievements from './components/Achievements.vue'
import ContactMe from './components/ContactMe.vue'

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

</script>

<template>
    <NavbarCustomized/>
    <AboutMe/>
    <Skills/>
    <Education/>
    <Achievements/>
    <ContactMe/>
    <Footer/>
</template>

<style scoped>

</style>
