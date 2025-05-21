<template>
    <nav>
        <a href="#AboutMe">À propos de moi</a>
        <a href="#Projects">Projets réalisés</a>
        <a href="#Skills">Compétences</a>
        <a href="#Experiences">Expériences professionnalisantes</a>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    justify-content: space-evenly;
    position: sticky;
    top: 0px;
    z-index: 1000;
}

a {
    text-align: center;
    text-decoration: none;
    width: 20%;
    padding: 10px;
    margin: 5px;
    box-shadow: 0 2px 4px;
    border-radius: 20px;
}

a:hover {
    box-shadow: 0 4px 4px;
}
</style>