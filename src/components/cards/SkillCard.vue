<script setup>
import { projects as projectsList } from "@/data/projects.js";
import { experiences as experiencesList } from "@/data/experiences.js";
import { useOverlay } from "@/composables/useOverlay";
import { useIdToTitle } from "@/composables/useIdToTitle";

const { isOverlay, showOverlay, hideOverlay } = useOverlay();
const { idToTitleExperiences, idToTitleProjects, _ } = useIdToTitle();

const props = defineProps({
    id: String,
    title: String,
    category: String,
    experiences: Array,
    projects: Array
})
</script>

<template>
    <a href="" :id="id" @click.prevent="showOverlay" :class="category.split(' ', 1) + '-element' + ' skill-name'"> {{
        title }}</a>

    <div v-if="isOverlay" class="back-overlay">
        <div class="overlay">
            <div class="top">
                <h3>{{ title }}</h3>
                <a href="" @click.prevent="hideOverlay">Fermer</a>
            </div>

            <div>
                <h4>Projets</h4>
                <ul>
                    <li v-for="project in projectsList.filter(p => projects.includes(p.id))" :key="project.id">
                        <a :href="'#' + project.id"> {{ idToTitleProjects(project.id) }}</a>
                    </li>
                </ul>
            </div>
            <div>
                <h4>Contextes d'applications</h4>
                <ul>
                    <li v-for="experience in experiencesList.filter(e => experiences.includes(e.id))"
                        :key="experience.id">
                        <a :href="'#' + experience.id"> {{
                            idToTitleExperiences(experience.id) }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.skill-name {
    border-radius: 10px;
    padding: 5px;
    box-shadow: 2px 2px;
}

.skill-name:hover {
    box-shadow: 3px 3px 3px;
}
</style>