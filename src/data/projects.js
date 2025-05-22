// Mention de "MANQUE" s'il faut encore ajouter des liens ou des images

// #############################################################
//                          Les projets
// #############################################################
export const projects = [
    // ###############################
    // ###############################
    //     Stage IUT Informatique
    // ###############################
    // ###############################
    {
        id: "conformal-prediction-registration-of-algebraic-varieties",
        title: "Application de prédiction conforme",
        context: "Travail de stage",
        date: "Avril - Mai 2025",
        resume: "Travaill d'application de prédiction conforme sur de la registration of algebraic varieties.",
        description: "Durant ce travail, j'ai eu l'occasion de reprendre un projet git nommé registration of algebraic varieties pour le mettre à jour et mettre en place les éléments nécessaires pour évaluer la conformité des résultats fournis. Dans cette situation, j'ai eu à réaliser des algorithmes et à les optimiser pour permettre de réaliser les calcules de quantiles dans un temps suffisamment court avec un échantillon suffisamment large, par la même occasion, j'y ai réalisé une documentation.",
        links: [
            {
                title: "Registration of algebraic varieties",
                link: "https://github.com/flgoyens/variety-registration",
                type: "github"
            }
            // [MANQUE] Lien vers le dépôt pour récupérer le quantile + documentation overleaf
        ],
        images: [],
        skills: [
            // Logiciels
            "visual-studio-code", "git",
            // Langages
            "python",
            // Informatique
            "realisation-application", "redaction-documentation", "evolution-application", "optimisation-programme", "construction-algorithme", "qualite-developpement",
            // Soft skills
            "analyse"
        ],
        experience: "ufr-assp",
    },
    // ###############################
    // ###############################
    //         IUT Informatique
    // ###############################
    // ###############################
    {
        id: "annuaire-administrations-françaises",
        title: "Annuaire des administrations françaises",
        context: "Projet de cours d'introduction au décisionnelle",
        date: "Année 2024/2025 - 2ème année",
        resume: "Extraction et exploitation de l'annuaire des administrations françaises avec Microsoft Azure et Power BI.",
        description: "Ce projet consistait à nous apprendre à utiliser Microsoft Azure, notamment dans la collecte de données et leur stockage à partir d'API. Dans ce contexte, j'ai récupéré l'ensemble des bâtiments administratif français grâce à une fonction Azure en C#, les ais stockés, nettoyés puis exploiter dans une courte analyse des résultats grâce à Power BI.",
        links: [
            {
                title: "API utilisé pour ce projet",
                link: "https://api-lannuaire.service-public.fr/explore/dataset/api-lannuaire-administration-locale-competence-geographique/api/",
                type: "None",
            }
        ],
        images: [
            // [MANQUE] image des graphiques réalisés
        ],
        skills: [
            // Logiciels
            "microsoft-azure", "power-bi", "visual-studio-code",
            // Informatique
            "construction-algorithme", "exploitation-donnees", "realisation-visuel",
            // Soft skills
            "analyse"
        ],
        experience: "iut-informatique",
    },
    {
        id: "simulnation",
        title: "Simulnation",
        context: "Projet SAé",
        date: "Année 2024/2025 - 2ème année",
        resume: "Jeux de gestion et de stratégie d'une nation sur web.",
        description: "Simulnation représente un grand travail d'équipe sur l'ensemble du premier semestre de seconde année, il s'agit de réaliser un cahier des charges sur un projet de notre choix pour ensuite le développer. Dans le cas de notre groupe, nous avons fait le choix de réaliser un jeu de stratégie et gestion textuelle avec des technologies web. En somme, il s'agissait de permettre à un joueur de prendre la direction d'une petite nation dont il pourrait gérer les affaires économiques et militaires. Mais aussi échanger avec les autres nations que cela soit des messages, des ressources ou des alliances. Cette SAé a été une grande occasion pour améliorer mes compétences de communication interne, de travail d'équipe et de gestion d'équipe, mais aussi pour appliquer nos compétences acquises en html, CSS, JavaScript et Php.",
        links: [
            {
                title: "Cahier des charges réalisé pour le projet",
                link: "https://drive.google.com/file/d/1cLvHODdwdkoWWva8NvcTmpnd8OOSbMUl/view?usp=sharing",
                type: "pdf"
            },
            // [MANQUE] Lien git vers le projet
        ],
        images: [
            {
                title: "Page d'accueil du site",
                link: "images/projects/simulnation-2.png"
            },
            {
                title: "Page de recrutement de l'armée",
                link: "images/projects/simulnation-1.png"
            },
        ],
        skills: [
            // Logiciels
            "visual-studio-code", "git", "php-my-admin",
            // Langages
            "html", "css", "javascript", "php", "mysql",
            // Informatique
            "realisation-application", "optimisation-programme", "construction-algorithme", "qualite-developpement", "conception-bdd", "mise-en-place-bdd",
            // Soft skills
            "travail-equipe", "gestion-projet", "communication-interne",
        ],
        experience: "iut-informatique",
    },
    {
        id: "realisation-visuels-bi-power-bi",
        title: "Adventure Works Cycles",
        context: "Projet SAé",
        date: "Année 2023/2024 - 1er année",
        resume: "Réalisation de visuels BI avec Power BI  pour une entreprise d'équipement sportif.",
        description: "Dans le contexte de cette SAé, nous devions récupérer les bases de données d'une entreprise de vente d'équipements sportifs dans le but de réaliser des visuels d'aide à la décision. Ainsi, nous devions utiliser Power BI pour extraire les données, les nettoyer, les mettre en forme puis de réaliser des visuels accompagné d'une analyse sur la situation de l'entreprise et de conseils.",
        links: [],
        images: [
            // [MANQUE] Images des visuels réalisés
        ],
        skills: [
            // Logiciels
            "power-bi",
            // Informatique
            "exploitation-donnees", "realisation-visuel",
            // Soft skills
            "travail-equipe", "communication-interne", "analyse"
        ],
        experience: "iut-informatique",
    },
    {
        id: "avc-company",
        title: "AVC company",
        context: "Projet SAé",
        date: "Année 2023/2024 - 1er année",
        resume: "Logiciel Java permettant la gestion de l'espace aérien français.",
        description: "L'AVC company (Alex, Valentin, Cédric company) est un logiciel de gestion et de visualisation de vols originaire et destinataire de France métropolitaine. L'objectif de cette SAé était de réaliser une application java permettant de visualiser des vols et de pouvoir les gérer via des règles de gestion définis au préalable. Ce projet a été l'occasion d'apprendre à développer notre première application java, à lire un cahier des charges et à planifier à l'avance la répartition des tâches et du temps.",
        links: [
            {
                title: "Cahier des charges réalisé pour le projet",
                link: "https://drive.google.com/file/d/1Qi1hv0PVQg01ORu1sFs7SkXdyDJ6QMsf/view?usp=sharing",
                type: "pdf"
            },
            // [MANQUE] Git vers le projet
        ],
        images: [
            {
                title: "Schéma représentant les tâches à réalisés",
                link: "images/projects/avc-company-1.png"
            },
            // [MANQUE] Images de l'application
        ],
        skills: [
            // Logiciels
            "netbeans", "git",
            // Langage
            "java",
            // Informatique
            "realisation-application", "optimisation-programme", "construction-algorithme", "qualite-developpement",
            // Soft skills
            "travail-equipe", "gestion-projet", "communication-interne", "analyse"
        ],
        experience: "iut-informatique",
    },
    {
        id: "logiciel-gestion-piste-aeroport",
        title: "Projet GESTION’AIR",
        context: "Projet SAé",
        date: "Année 2023/2024 - 1er année",
        resume: "Logiciel en C permettant la gestion d'une piste d'aéroport.",
        description: "L'objectif de cette SAé était de réaliser une application en C qui doit permettre la gestion d'une piste d'aéroport et des éventuelles reprogrammations qui pourrait se produire. Ainsi, nous avons aussi eu à établir les différents algorithmes utilisés et à choisir celui qui se montrait le plus optimisé.",
        links: [
            // [MANQUE] Lien vers le git
        ],
        images: [
            // [MANQUE] Images de l'application
        ],
        skills: [
            // Logiciels
            "code-blocks", "git",
            // Langage
            "c",
            // Informatique
            "realisation-application", "redaction-documentation", "optimisation-programme", "construction-algorithme", "qualite-developpement",
            // Soft skills
            "travail-equipe", "communication-interne"
        ],
        experience: "iut-informatique",
    },
    {
        id: "soft-move",
        title: "SOFT Move",
        context: "Projet SAé",
        date: "Année 2023/2024 - 1er année",
        resume: "Site web qui promus les mobilités douce au sein de Lyon 1.",
        description: "SOFT Move est un petit site web qui cherche à mettre en avant les mobilités douces pour se rendre au sein de l'université. La SAé consistais à réaliser un sondage au près des étudiants sur leurs attentes pour un site traitant des mobilités douces et d'en réaliser ensuite le développement en html et css.",
        links: [
            // [MANQUE] Lien vers le git
        ],
        images: [
            // [MANQUE] Images de l'application
        ],
        skills: [
            // Logiciels
            "visual-studio-code", "git",
            // Langage
            "html", "css",
            // Informatique
            "realisation-application", "qualite-developpement",
            // Soft skills
            "travail-equipe", "analyse"
        ],
        experience: "iut-informatique",
    },
    {
        id: "conception-realisation-bdd-centre-formation-medicale",
        title: "Thérapeutes",
        context: "Projet SAé",
        date: "Année 2023/2024 - 1er année",
        resume: "Conception et réalisation d’une base de données pour un centre de formation médicale",
        description: "Durant ce projet, nous devions modéliser, concevoir et remplir une base de données. Nous avons pour cela des témoignages du fonctionnement interne, des présentations du fonctionnement non informatisé via les formulaires qui utilisait... Ainsi, j'ai pu développer mes capacités d'analyse de besoins et celle d'utilisation de Power AMC pour la partie modélisation et de SQL Developper pour la partie réalisation.",
        links: [],
        images: [
            {
                title: "MCD de la base de donnée",
                link: "images/projects/conception-realisation-bdd-centre-formation-medicale-1.png"
            }
        ],
        skills: [
            // Logiciels
            "power-amc", "sql-developper",
            // Langage
            "pl-sql",
            // Informatique
            "conception-bdd", "mise-en-place-bdd",
            // Soft skills
            "travail-equipe", "analyse",
        ],
        experience: "iut-informatique",
    },
];