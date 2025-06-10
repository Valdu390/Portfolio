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
        resume: "Travail d'application de la prédiction conforme sur la registration of algebraic varieties.",
        description: "Dans le cadre de ce projet, j'ai repris un dépôt Git existant intitulé registration of algebraic varieties afin de le mettre à jour et d’y intégrer les éléments nécessaires à l’évaluation de la conformité des résultats produits. J’ai conçu et optimisé des algorithmes permettant le calcul efficace des quantiles sur des échantillons de grande taille. Ce travail a également donné lieu à la rédaction d’une documentation technique.",
        links: [
            {
                title: "Registration of algebraic varieties",
                link: "https://github.com/flgoyens/variety-registration",
                type: "github"
            }
            // [MANQUE] Lien vers le dépôt pour récupérer le quantile + documentation overleaf
        ],
        images: [
            {
                title: "Image du dépôt initial registration of algebraic varieties",
                link: "images/projects/conformal-prediction-registration-of-algebraic-varieties-1.png"
            },
            {
                title: "Image du code après remise en forme",
                link: "images/projects/conformal-prediction-registration-of-algebraic-varieties-2.png"
            },
        ],
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
        description: "Ce projet avait pour objectif de nous familiariser avec l’utilisation de Microsoft Azure, notamment pour la collecte et le stockage de données via des API. Dans ce cadre, j’ai récupéré l’ensemble des bâtiments administratifs français à l’aide d’une fonction Azure écrite en C#, puis j’ai stocké, nettoyé et exploité ces données dans le cadre d’une brève analyse menée avec Power BI.",
        links: [
            {
                title: "API",
                link: "https://api-lannuaire.service-public.fr/explore/dataset/api-lannuaire-administration-locale-competence-geographique/api/",
                type: "none",
            }
        ],
        images: [
            {
                title: "Exemple de graphique réalisé",
                link: "images/projects/annuaire-administrations-françaises-1.png"
            },
            {
                title: "Données restantes après leur nettoyage",
                link: "images/projects/annuaire-administrations-françaises-2.png"
            },
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
        resume: "Jeu de gestion et de stratégie d'une nation.",
        description: "Simulnation est un projet d’envergure mené en équipe durant tout le premier semestre de la deuxième année. Il s’agissait de rédiger un cahier des charges pour un projet libre, puis de le développer. Notre groupe a choisi de concevoir un jeu de stratégie et de gestion textuel, basé sur des technologies web. Le joueur y incarne le dirigeant d’une petite nation qu’il doit administrer sur les plans économique et militaire, tout en interagissant avec d’autres nations via des messages, des échanges de ressources ou des alliances. Cette SAÉ a été une excellente occasion de renforcer mes compétences en communication interne, en travail et gestion d’équipe, tout en consolidant mes connaissances techniques en HTML, CSS, JavaScript et PHP.",
        links: [
            {
                title: "Cahier des charges",
                link: "https://drive.google.com/file/d/1cLvHODdwdkoWWva8NvcTmpnd8OOSbMUl/view?usp=sharing",
                type: "pdf"
            },
            {
                title: "Code source",
                link: "https://github.com/valbesnard/Simulnation",
                type: "github"
            }
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
        resume: "Création de visuels BI avec Power BI pour une entreprise d’équipements sportifs.",
        description: "Dans le cadre de cette SAÉ, nous devions exploiter les bases de données d’une entreprise spécialisée dans la vente d’équipements sportifs afin de produire des visuels facilitant la prise de décision. À l’aide de Power BI, nous avons extrait, nettoyé et mis en forme les données, puis créé des visualisations accompagnées d’une analyse de la situation de l’entreprise et de recommandations stratégiques.",
        links: [],
        images: [
            {
                title: "Exemple de visuel réalisé",
                link: "images/projects/realisation-visuels-bi-power-bi-1.png"
            },
            {
                title: "Exemple de visuel réalisé",
                link: "images/projects/realisation-visuels-bi-power-bi-2.png"
            },
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
        resume: "Logiciel Java de gestion de l’espace aérien français.",
        description: "L’AVC Company (Alex, Valentin, Cédric Company) est un logiciel de gestion et de visualisation des vols ayant pour origine et destination la France métropolitaine. Cette SAÉ avait pour objectif de concevoir une application Java capable de visualiser des vols et de les gérer selon des règles de gestion prédéfinies. Ce projet a été l’occasion d’apprendre à développer notre première application en Java, à interpréter un cahier des charges, et à planifier efficacement la répartition des tâches et du temps de travail.",
        links: [
            {
                title: "Cahier des charges",
                link: "https://drive.google.com/file/d/1Qi1hv0PVQg01ORu1sFs7SkXdyDJ6QMsf/view?usp=sharing",
                type: "pdf"
            },
            {
                title: "Code source",
                link: "https://github.com/valbesnard/AVC-company",
                type: "github"
            }
        ],
        images: [
            {
                title: "Page d'accueil",
                link: "images/projects/avc-company-2.png"
            },
            {
                title: "Page d'affichage des vols",
                link: "images/projects/avc-company-3.png"
            },
            {
                title: "Schéma représentant les tâches à réalisés",
                link: "images/projects/avc-company-1.png"
            },
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
        resume: "Logiciel en C de gestion d'une piste d'aéroport.",
        description: "Cette SAÉ avait pour objectif de développer une application en C permettant la gestion d’une piste d’aéroport, y compris la reprogrammation des vols en cas d’imprévus. Nous avons également dû concevoir plusieurs algorithmes de gestion et sélectionner celui offrant les meilleures performances.",
        links: [
            {
                title: "Code source",
                link: "https://github.com/valbesnard/GESTION-AIR",
                type: "github"
            }
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
        resume: "Site web promouvant les mobilités douces au sein de Lyon 1.",
        description: "SOFT Move est un site web visant à encourager l’usage des mobilités douces pour se rendre à l’université Lyon 1. Cette SAÉ consistait à concevoir un sondage à destination des étudiants et du personnel afin d’identifier leurs attentes concernant un tel site, puis à développer ce dernier en HTML et CSS.",
        links: [
            {
                title: "Code source",
                link: "https://github.com/valbesnard/soft-move",
                type: "github"
            }
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
        resume: "Conception et réalisation d’une base de données pour un centre de formation médicale.",
        description: "Dans le cadre de ce projet, nous devions modéliser, concevoir et alimenter une base de données à partir de témoignages sur le fonctionnement interne du centre et de documents papier illustrant le système non informatisé, notamment des formulaires. Ce travail m’a permis de développer mes compétences en analyse des besoins, en modélisation avec Power AMC, ainsi qu’en implémentation avec SQL Developer.",
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