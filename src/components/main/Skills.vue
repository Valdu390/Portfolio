<script setup>
import { ref, computed } from "vue";

import { skillsCategory, skills } from '@/data/skills.js';
import SkillCard from '@/components/cards/SkillCard.vue';

const cat = ref("Logiciel");

const filteredSkills = computed(() =>
    skills.filter((s) => s.category === cat.value)
);

function selectCategory(skillCat) {
    cat.value = skillCat;
}
</script>

<template>
    <section id="Skills">
        <h2>Compétences</h2>
        <div class="skill-category-list">
            <a v-for="skillCat in skillsCategory" :key="skillCat" href="#" @click.prevent="selectCategory(skillCat)"
                :class="skillCat.split(' ', 1)">
                {{ skillCat }}
            </a>
        </div>
        <div class="skills-list">
            <SkillCard v-for="skill in filteredSkills" :key="skill.id" :id="skill.id" :title="skill.title"
                :experiences="skill.experiences" :projects="skill.projects" :category="skill.category" />
        </div>
    </section>
</template>

<style scoped>
.skill-category-list {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
}

.skill-category-list a {
    border-radius: 20px;
    width: 20vw;
    text-align: center;
    padding-top: 5px;
    padding-bottom: 5px;
    box-shadow: 2px 2px 2px;
}

.skills-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px 20px;
}

.skill-category-list a:hover {
    box-shadow: 5px 5px 5px;
}
</style>