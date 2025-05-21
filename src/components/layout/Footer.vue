<template>
    <footer>
        <div>
            <h2>Contacts</h2>
            <a class="linkedin" href="https://www.linkedin.com/in/besnard-valentin" target="_blank">Profil LinkedIn</a>
            <a class="github" href="https://github.com/Valdu390" target="_blank">Page github</a>
            <a class="gmail" href="mailto:besnard.valentin2005@gmail.com">Ecrire un mail</a>
        </div>
        <div>
            <p>Page réalisé par Valentin BESNARD avec Vue JS dans le cadre d'un BUT
                Informatique à Lyon 1 (2023 - 2026)</p>
        </div>
    </footer>
</template>

<style scoped>
h2 {
    margin-top: 0rem;
}

footer {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
}

div {
    width: 45vw;
    display: flex;
    flex-direction: column;
}

a {
    display: inline-block;
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 2em;
    padding-left: 2.5em;
    line-height: 2.5em;
}

div:nth-child(2) {
    justify-content: flex-end;
}

div:nth-child(2) p {
    text-align: right;
}

.linkedin {
    background-image: url('/images/footer/linkedin.svg');
}

.github {
    background-image: url('/images/footer/github.png');
}

.gmail {
    background-image: url('/images/footer/gmail.svg');
}
</style>