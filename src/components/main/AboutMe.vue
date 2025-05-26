<script setup>
import { aboutMe } from "@/data/aboutMe.js";
</script>

<template>
    <section id="AboutMe">
        <h2>À propos de moi</h2>
        <p v-for="p in aboutMe.paragraphe" :id="p.id"> {{ p }}</p>
    </section>
</template>

<style scoped>
p {
    text-indent: 2rem;
    padding-left: 1rem;
    padding-right: 5rem;
}
</style>