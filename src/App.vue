<script setup>
  // Layout
  import Header from "@/components/layout/Header.vue";
  import Nav from "@/components/layout/Nav.vue";
  import Footer from "@/components/layout/Footer.vue";
  // Main
  import AboutMe from "@/components/main/AboutMe.vue";
  import Projects from "@/components/main/Projects.vue";
  import Skills from "@/components/main/Skills.vue";
  import Experiences from "@/components/main/Experiences.vue";
</script>

<template>
  <Header />

  <Nav />

  <main>
    <AboutMe />

    <Projects />

    <Skills />

    <Experiences />
  </main>

  <Footer />
</template>

<style scoped>
  main {
    padding-left: 1rem;
    padding-right: 2rem;
  }
</style>