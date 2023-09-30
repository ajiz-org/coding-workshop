export const APP_TEXT = {
    title : "Game Of Secrets",
    register : "Register Now !",
}

export interface TimelineData {
    title : string,
    modules : {
        title : string,
        time : string,
        subModuleTitles? : string[]
    }[]
}


export const TIMELINE_DATA  : TimelineData[] = [
    {
        title : "Journée 1: Introduction et Premières Itérations",
        modules : [
            {
                title : "Introduction à la cryptographie",
                time : "13:30 - 14:30",
                subModuleTitles : [
                    "-Qu'est-ce que la cryptographie?",
                    "-Pourquoi la cryptographie est-elle importante? (Web 3.0, ...)",
                    "-Autres utilisations de la cryptographie (Git, P2P, ...)",
                    "-Démonstrations rapides: SSH, génération de mot de passe, ..."
                ]
            },
            {
                title : "Première Itération - Tout est monitoré par un bot.",
                time : "14:30 - 15:30",
                subModuleTitles : [
                    "-Communication en clair.",
                    "-Partage de secret commun.",
                    "-Introduction de HMAC pour l'authentification.",
                    "-Attribution des rôles par le bot.",
                    "-Introduction du chiffrement symétrique (AES).",
                    "-Exécution complète de la permière version du jeu"
                ]
            },
            {
                title : "Pause",
                time : "15:30 - 16:00",
            },
            {
                title : "Deuxième Itération - Moins de confiance en la plateforme.",
                time : "16:00 - 17:30",
                subModuleTitles : [
                    "-Introduction des schémas asymétriques (RSA).",
                    "-Signature et vérification des messages.",
                    "-Introduction de la certification."
                ]
            },
            {
                title : "Discussion, questions et réponses.",
                time : "17:30 - 18:00",
            },
        ]
    },{
        title : "Journée 2: Itérations Avancées et Jeu Pratique",
        modules : [
            {
                title : "Révision rapide de la journée précédente.",
                time : "14:00 - 15:30",
            },
            {
                title : "Troisième Itération - Moins de confiance en bot.",
                time : "14:00 - 15:30",
                subModuleTitles : [
                    "-Création des identités secrètes.",
                    "-Multi-party Coin Tossing pour l'attribution aléatoire des rôles.",
                    "-Introduction du chiffrement hybride."
                ]
            },
            {
                title : "Pause",
                time : "15:30 - 16:00",
            },
            {
                title : "Quatrième Itération - Ajout de la voyante.",
                time : "16:00 - 17:30",
                subModuleTitles : [
                    "-Introduction de la signature basée sur le hachage.",
                    "-Clés éphémères pour la communication entre les loups.",
                    "-Multi Part Oblivious Transfer (1-n) pour la voyante.",
                    "-Exécution complète de la version finale du jeu"
                ]
            },
            {
                title : "Discussion, questions, réponses",
                time : "17:30 - 18:00",
                subModuleTitles : [
                    "-Ouverture vers la Prochaine Session: developper une version déployable sur des blockchains privé (avec smart contract)",
                ]
            },
        ]
    }
]
   