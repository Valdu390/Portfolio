<script setup>
import { skillsCategory, skills as skillsList } from '@/data/skills.js';
import { experiences } from '@/data/experiences.js';
import { ref } from 'vue';

const props = defineProps({
    id: String,
    title: String,
    experience: String,
    context: String,
    date: String,
    description: String,
    links: Array,
    skills: Array,
    images: Array,
});

const currentIndex = ref(0);

function prev() {
    if (currentIndex.value > 0) currentIndex.value--;
}

function next() {
    if (currentIndex.value < props.images.length - 1) currentIndex.value++;
}

function getSkillData(id) {
    return skillsList.find(i => i.id == id)
}

function getExperienceData(id) {
    return experiences.find(i => i.id == id)
}
</script>

<template>
    <!-- Project card -->
    <section :id='id' class="project-card">
        <div>
            <h3>{{ title }}</h3>
        </div>
        <div>
            <div class="left">
                <h4>Cadre : <a :href="'#' + experience"> {{ getExperienceData(experience).title }} </a></h4>
                <h4>Temporalité : {{ date }}</h4>
                <h4>Contexte : {{ context }}</h4>
            </div>
            <div v-if="images.length" class="carousel-container">
                <button @click="prev" :disabled="currentIndex === 0">‹</button>

                <section class="image-item">
                    <img :src="images[currentIndex]" :alt="'Image ' + (currentIndex + 1)" />
                </section>

                <button @click="next" :disabled="currentIndex === images.length - 1">›</button>
            </div>
        </div>
        <div>
            <h4>Description</h4>
            <p> {{ description }}</p>
        </div>
        <div>
            <h4>Liens supplémentaire</h4>
            <ul>
                <li v-if="links.length == 0">Aucun lien supplémentaire</li>
                <li v-for="(link, index) in links" :key="index">
                    <a :href="link.link" target=" _blank" rel="noopener noreferrer">
                        {{ link.title }}
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <h4>Compétences développées</h4>
            <li v-for="(skill, skillIndex) in skills" :key="skillIndex">
                <a href="#Skills" :class="getSkillData(skill).category">{{ getSkillData(skill).title
                }} ({{
                        getSkillData(skill).category }})</a>
            </li>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            overlayVisible: false,
        };
    },
}
</script>

<style scoped>
.images-scroll-container {
    display: flex;
    overflow-x: auto;
    /* scroll horizontal */
    gap: 10px;
    padding: 10px 0;
    scroll-behavior: smooth;
    /* scroll fluide */
}

.image-item {
    flex: 0 0 auto;
    /* empêche les images de se compresser */
    width: 200px;
    height: 150px;
    border-radius: 6px;
    overflow: hidden;
}

.image-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
</style>