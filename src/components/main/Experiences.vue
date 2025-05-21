<script setup>
import ExperienceCard from '../cards/ExperienceCard.vue';

import { experiences } from '@/data/experiences';
</script>

<template>
    <section id="Experiences">
        <h2>Expériences professionnelle</h2>
        <div class="experiences-list">
            <ExperienceCard v-for="experience in experiences" :key="experience.id" :id="experience.id"
                :title="experience.title" :context="experience.context" :date="experience.date"
                :description="experience.description" :projects="experience.projects" :skills="experience.skills" />
        </div>
    </section>
</template>