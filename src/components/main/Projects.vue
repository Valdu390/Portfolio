<script setup>
import ProjectCard from '@/components/cards/ProjectCard.vue';

import { projects } from '@/data/projects.js';
</script>

<template>
    <section id="Projects">
        <h2>Projets réalisés</h2>

        <section id="projects-list">
            <ProjectCard v-for="project in projects" :id="project.id" :title="project.title"
                :experience="project.experience" :date="project.date" :context="project.context"
                :description="project.description" :links="project.links" :skills="project.skills"
                :images="project.images" :resume="project.resume" />
        </section>
    </section>
</template>

<style scoped>
#projects-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 1rem;
}
</style>
