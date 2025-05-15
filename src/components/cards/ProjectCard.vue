<script setup>
    import { skillsCategory, skills as skillsList } from '@/data/skills.js';
    import { experiences } from '@/data/experiences.js';

    defineProps(['id', 'title', 'experience', 'context', 'date', 'description', "links", "skills", "images"]);

    function getSkillData(id) {
        return skillsList.find(i => i.id == id)
    }

    function getExperienceData(id) {
      return experiences.find(i => i.id == id)
    }
</script>

<template>
    <section :id='id' class="project-card-class">
        
        <!-- En tête -->
        <section class="project-header">
            <h2> {{ title }}</h2>
            <h3>Cadre : <a :href="'#' + experience"> {{ getExperienceData(experience).title }} </a></h3>
            <h3>Temporalité : {{ date }}</h3>
            <h3>Contexte : {{ context }}</h3>
            <h3>Description</h3>
            <p> {{ description }}</p>
        </section>
        
        <!-- Section caché par défaut -->
        <section class="footer" hidden>
            <section v-if="images.length > 0" class="images-class">
                <h3>Images</h3>
                <section v-for="(image,index) in images" class="image-class">
                    <img :src="'/' + image" :al="image"/>
                </section>
            </section>

            <section class="link-class">
                <h3>Liens supplémentaire</h3>
                <ul>
                    <li v-if="links.length == 0">Aucun lien supplémentaire</li>
    
                    <li v-for="(link, index) in links" :key="index">
                      <a :href="link.link" target="_blank" rel="noopener noreferrer">
                        {{ link.title }}
                      </a>
                    </li>
                </ul>
            </section>
    
            <section class="skill-class">
                <h3>Compétences développées</h3>
                
                <section v-for="(category, catIndex) in skillsCategory" :key="catIndex" class="category-class">
                  <h4>{{ category }}</h4>
                  <ul>
                    <li 
                      v-for="(skill, skillIndex) in skills.filter(s => getSkillData(s).category === category)" 
                      :key="skillIndex"
                    >
                      <a :href="'#' + skill">{{ getSkillData(skill).title }}</a>
                    </li>
                  </ul>
                </section>
            </section>
        </section>  
    </section>
</template>

<style scoped>
  .project-card-class {
    width: 45%;
    padding: 1rem;

    border: 1px black solid;
    border-radius: 25px;

    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: larger;
    margin-top: auto;
  }

  h3 {
    font-size: medium;
    margin: auto;
  }

  a {
    text-decoration: none;
  }
</style>