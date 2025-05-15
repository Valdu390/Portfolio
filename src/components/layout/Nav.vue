<template>
    <nav>
        <a href="index.html#AboutMe">À propos de moi</a>
        <a href="index.html#Projects">Projets réalisés</a>
        <a href="index.html#Skills">Compétence</a>
        <a href="index.html#Experiences">Expériences professionnalisantes</a>
    </nav>
</template>

<style scoped>
    nav {
        display: flex;
        justify-content: space-evenly;
    }

    a {
        color: var(--color-nav);
        text-decoration: none;
        padding: 10px;
        margin: 5px;
    }
</style>