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
    <div :id='id' class="project-card">
        <div v-if="images.length" class="top">
            <img :src="images[0].link" alt="Image" />
        </div>
        <h3>{{ title }}</h3>
        <div class="center">
            <h4>Cadre : <a :href="'#' + experience"> {{ getExperienceData(experience).title }} </a></h4>
            <h4>Temporalité : {{ date }}</h4>
            <h4>Contexte : {{ context }}</h4>
            <h4>Description</h4>
            <p>
                {{ description.length > 300 ? description.slice(0, 300) + '...' : description }}
            </p>
            <a href="#" @click.prevent="showOverlay">Voir plus</a>
        </div>
    </div>
    <!-- Project card -->
    <section v-if="false" class="project-card">
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
.center {
    margin: 10px;
}

.top {
    width: 100%;
    height: 250px;
    overflow: hidden;
    border-radius: 26px;
}

.top img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
}
</style>