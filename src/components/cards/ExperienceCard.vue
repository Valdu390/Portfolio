<script setup>
import { skills as skillsList } from "@/data/skills.js";
import { projects as projectsList } from "@/data/projects.js";
import { useIdToTitle } from "@/composables/useIdToTitle";

import { useOverlay } from "@/composables/useOverlay";
const { _, idToTitleProjects, idToTitleSkills } = useIdToTitle();

const { isOverlay, showOverlay, hideOverlay } = useOverlay();

const props = defineProps({
    id: String,
    title: String,
    context: String,
    date: String,
    description: String,
    skills: Array,
    projects: Array
})

function getSkillData(id) {
    return skillsList.find(i => i.id == id)
}
</script>

<template>
    <div :id="id">
        <h3>{{ title }}</h3>
        <h4>Contexte : {{ context }}</h4>
        <h4>Temporalité : {{ date }}</h4>
        <h4>Description</h4>
        <p>{{ description }}</p>
        <a href="#" @click.prevent="showOverlay">Voir plus</a>
    </div>

    <div v-if="isOverlay" class="back-overlay">
        <div class="overlay">
            <div class="top">
                <h3>{{ title }}</h3>
                <a href="" @click.prevent="hideOverlay">Fermer</a>
            </div>
            <div>
                <h4>Contexte : {{ context }}</h4>
                <h4>Temporalité : {{ date }}</h4>
                <h4>Description</h4>
                <p>{{ description }}</p>
            </div>
            <div>
                <h4>Projets réalisés</h4>
                <ul>
                    <li v-for="project in projectsList.filter(p => projects.includes(p.id))">
                        <a :href="'#' + project.id"> {{ idToTitleProjects(project.id) }}</a>
                    </li>
                </ul>
            </div>
            <div>
                <h4>Compétences acquises</h4>
                <ul>
                    <li v-for="skill in skillsList.filter(s => skills.includes(s.id))">
                        <a href="#Skills"> {{ idToTitleProjects(skill.id) }} ({{ getSkillData(skill.id).category }})</a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>