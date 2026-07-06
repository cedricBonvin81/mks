export interface CoursDateSaison {
    annee: string
    mois: { nom: string; jours: string }[]
  }
  
  export interface CoursItem {
    id: string
    nom: string
    public: string
    image: string
    type: string
    lieu: string
    jour?: string
    horaire?: string
    nbCours?: string
    duree?: string
    prix: string
    description: string
    avantages?: string[]
    rabais?: { condition: string; valeur: string }[]
    planningSaison?: CoursDateSaison[]
    tarifsPrive?: { personnes: string; tarif: string }[]
  }
  
  export const useCours = () => {
    // Le rabais famille est identique pour tous les cours collectifs annuels
    const rabaisFamilleStandard = [
      { condition: "2 personnes", valeur: "10%" },
      { condition: "3 personnes", valeur: "15%" },
      { condition: "4 personnes", valeur: "20%" }
    ]
  
    // 1. LES COURS COLLECTIFS ANNUELS
    const coursCollectifs = ref<CoursItem[]>([
        // MICRO-SPIDER
      {
        id: "micro-spider",
        nom: "MICRO-SPIDER",
        public: "3 - 5 ans",
        image: "/images/micro.png",
        type: "Régulier",
        lieu: "Salle d'escalade de la Moubra",
        jour: "Lundi",
        horaire: "17h30 - 19h00",
        nbCours: "25",
        duree: "1h30",
        prix: "700.-",
        description: "Ce cours est ludique et axé sur des jeux, le développement de l'équilibre, de la coordination et de la souplesse. Idéal pour faire ses premiers pas sur les prises en toute confiance.",
        avantages: [
           "Accès libre et gratuit à la salle toute l'année (même en dehors des cours)",
            "Matériel technique complet fourni (Chaussures, harnais, etc...)",
            "Encadrement par des entraîneurs certifiés et passionnés",
            "Rabais familial disponible",
          ],
        rabais: rabaisFamilleStandard,
        planningSaison: [
          {
            annee: "2026", // 14 cours
            mois: [
              { nom: "Septembre", jours: "07 - 14 - 21 - 28" },
              { nom: "Octobre", jours: "05 - 12 - 26" },
              { nom: "Novembre", jours: "02 - 09 - 16 - 23 - 30" },
              { nom: "Décembre", jours: "14 - 21" }
            ]
          },
          {
            annee: "2027", // 16 cours
            mois: [
              { nom: "Janvier", jours: "Centre Sportif fermé" },
              { nom: "Février", jours: "22" },
              { nom: "Mars", jours: "01 - 08 - 15 - 22" },
              { nom: "Avril", jours: "05 - 12 - 19 - 26" },
              { nom: "Mai", jours: "03 - 10" },
            
            ]
          }
        ]
      },
      // MINI-SPIDER
      {
        id: "mini-spider",
        nom: "MINI-SPIDER",
        public: "5 - 7 ans",
        image: "/images/mini.png",
        type: "Régulier",
        lieu: "Salle d'escalade de la Moubra",
        jour: "Lundi",
        horaire: "17h30 - 19h00",
        nbCours: "25",
        duree: "1h30",
        prix: "700.-",
        description: "Ce cours est ludique et axé sur des jeux, le développement de l'équilibre, coordination, souplesse. Nous verrons les premières manipulations de corde (noeud, assurage etc..) !",
        avantages: [
          "Accès libre et gratuit à la salle toute l'année (même en dehors des cours)",
           "Matériel technique complet fourni (Chaussures, harnais, etc...)",
           "Encadrement par des entraîneurs certifiés et passionnés",
           "Rabais familial disponible",
         ],
        rabais: rabaisFamilleStandard,
        planningSaison: [
            {
                annee: "2026", // 14 cours
                mois: [
                  { nom: "Septembre", jours: "07 - 14 - 21 - 28" },
                  { nom: "Octobre", jours: "05 - 12 - 26" },
                  { nom: "Novembre", jours: "02 - 09 - 16 - 23 - 30" },
                  { nom: "Décembre", jours: "14 - 21" }
                ]
              },
              {
                annee: "2027", // 16 cours
                mois: [
                  { nom: "Janvier", jours: "Centre Sportif fermé" },
                  { nom: "Février", jours: "22" },
                  { nom: "Mars", jours: "01 - 08 - 15 - 22" },
                  { nom: "Avril", jours: "05 - 12 - 19 - 26" },
                  { nom: "Mai", jours: "03 - 10" },
                
                ]
            }
        ]
      },
      // GECKO
      {
        id: "gecko",
        nom: "GECKO",
        public: "7 - 11 ans",
        image: "/images/gecko.png",
        type: "Régulier",
        lieu: "Salle d'escalade de la Moubra",
        jour: "Mardi",
        horaire: "17h30 - 19h00",
        nbCours: "25",
        duree: "1h30",
        prix: "700.-",
        description: "Approfondissement des techniques de grimpe, autonomie complète sur l'assurage, lecture des voies et escalade en tête pour les plus téméraires.",
        avantages: [
          "Accès libre et gratuit à la salle toute l'année (même en dehors des cours)",
           "Matériel technique complet fourni (Chaussures, harnais, etc...)",
           "Encadrement par des entraîneurs certifiés et passionnés",
           "Rabais familial disponible",
         ],
        rabais: rabaisFamilleStandard,
        planningSaison: [
            {
                annee: "2026", // 15 cours
                mois: [
                  { nom: "Septembre", jours: "01 - 08 - 15 - 22 - 29" },
                  { nom: "Octobre", jours: "06 - 13 - 27" },
                  { nom: "Novembre", jours: "03 - 10 - 17 - 24" },
                  { nom: "Décembre", jours: "01 - 15 - 22" }
                ]
              },
              {
                annee: "2027", // 10 cours
                mois: [
                  { nom: "Janvier", jours: "Centre Sportif fermé" },
                  { nom: "Février", jours: "23" },
                  { nom: "Mars", jours: "02 - 09 - 16 - 23" },
                  { nom: "Avril", jours: "06 - 13 - 20 - 27" },
                  { nom: "Mai", jours: "04" }, 
                ]
              }
        ]
      },
      // MONKEY
      {
        id: "monkey",
        nom: "MONKEY",
        public: "11 - 16 ans",
        image: "/images/monkey.png",
        type: "Régulier",
        lieu: "Salle d'escalade de la Moubra",
        jour: "Jeudi",
        horaire: "18h00 - 19h30",
        nbCours: "25",
        duree: "1h30",
        prix: "700.-",
        description: "Perfectionnement technique et physique, entraînement orienté bloc et voies, gestion du mental dans les projets plus complexes.",
        avantages: [
          "Accès libre et gratuit à la salle toute l'année (même en dehors des cours)",
           "Matériel technique complet fourni (Chaussures, harnais, etc...)",
           "Encadrement par des entraîneurs certifiés et passionnés",
           "Rabais familial disponible",
         ],
        rabais: rabaisFamilleStandard,
        planningSaison: [
            {
                annee: "2026", // 15 cours
                mois: [
                  
                  { nom: "Septembre", jours: "03 - 10 - 17 - 24" },
                  { nom: "Octobre", jours: "01 - 08 - 29" },
                  { nom: "Novembre", jours: "05 - 12 - 19 - 26" },
                  { nom: "Décembre", jours: "03 - 10 - 17" }
                ]
              },
              {
                annee: "2027", // 15 cours
                mois: [
                  { nom: "Janvier", jours: "Centre Sportif fermé" },
                  { nom: "Février", jours: "25" },
                  { nom: "Mars", jours: "04 - 11 - 18 - 25" },
                  { nom: "Avril", jours: "08 - 15 - 22 - 29" },
                  { nom: "Mai", jours: "13 - 20" },
                  
                ]
              }
        ]
      },
      // SUPER-MONKEY
      {
        id: "super-monkey",
        nom: "SUPER-MONKEY",
        public: "16 - 99 ans",
        image: "/images/super-monkey.jpg",
        type: "Régulier",
        lieu: "Salle d'escalade de la Moubra",
        jour: "Lundi",
        horaire: "19h30 - 21h00",
        nbCours: "25",
        duree: "1h30",
        prix: "700.-",
        description: "Le groupe pour tous les adultes et grands ados, débutants ou confirmés. Grimpe libre encadrée, conseils personnalisés et ambiance de tribu assurée.",
        avantages: [
          "Accès libre et gratuit à la salle toute l'année (même en dehors des cours)",
           "Matériel technique complet fourni (Chaussures, harnais, etc...)",
           "Encadrement par des entraîneurs certifiés et passionnés",
           "Rabais familial disponible",
         ],
        rabais: rabaisFamilleStandard,
        planningSaison: [
            {
                annee: "2026", // 14 cours
                mois: [
                  { nom: "Septembre", jours: "07 - 14 - 21 - 28" },
                  { nom: "Octobre", jours: "05 - 12 - 26" },
                  { nom: "Novembre", jours: "02 - 09 - 16 - 23 - 30" },
                  { nom: "Décembre", jours: "14 - 21" }
                ]
              },
              {
                annee: "2027", // 16 cours
                mois: [
                  { nom: "Janvier", jours: "Centre Sportif fermé" },
                  { nom: "Février", jours: "22" },
                  { nom: "Mars", jours: "01 - 08 - 15 - 22" },
                  { nom: "Avril", jours: "05 - 12 - 19 - 26" },
                  { nom: "Mai", jours: "03 - 10" },
                
                ]
              }
        ]
      }
    ])
  
    // 2. LES OFFRES PRIVÉES OU EN FAMILLE
   
  const coursPrives = ref<CoursItem[]>([
    {
      id: "prive", 
      nom: "SÉANCE PRIVÉE",
      public: "Débutant à Expert",
      image: "/images/prive.jpg",
      type: "À la carte",
      lieu: "Salle de la Moubra ou extérieur",
      description: "Grimpe à ton rythme, quand tu veux, avec un coach 100% dédié à ta réussite ! On ajuste chaque séance à tes objectifs pour te faire passer un cap à chaque session et devenir meilleur que la veille.",
      prix: "Dès 90.- / h",
      avantages: [
        "L'encadrement, le matériel technique et l'entrée à la salle sont compris dans le prix",
        "Horaire et jour totalement flexibles selon tes disponibilités",
        "Coaching personnalisé 100% focalisé sur tes points forts"
      ],
      tarifsPrive: [
        { personnes: "1 personne", tarif: "90.- / heure" },
        { personnes: "2 personnes", tarif: "110.- / heure" },
        { personnes: "3 personnes", tarif: "130.- / heure" },
        { personnes: "4 personnes", tarif: "150.- / heure" }
      ]
    },
    {
      id: "famille", 
      nom: "COURS EN FAMILLE",
      public: "Tribu (Parents + Enfants)",
      image: "/images/famille.jpg",
      type: "À la carte",
      lieu: "Salle d'escalade de la Moubra",
      duree: "1h30",
      description: "Venez grimper en famille ! Ce cours est destiné aux parents et enfants qui désirent s'initier à l'escalade ou se perfectionner, tout en partageant un agréable moment avec leur tribu.",
      prix: "150.-",
      avantages: [
        "Tribu : minimum 1 adulte et 1 enfant, maximum 2 adultes et 4 enfants",
        "L'encadrement, le matériel et l'entrée à la salle sont compris dans le prix du cours !",
        "Une formule idéale pour créer des souvenirs inoubliables ensemble"
      ],
      tarifsPrive: [
        { personnes: "Forfait unique famille (1h30 de cours)", tarif: "150.-" }
      ]
    }
  ])
  
    // Fonction pour récupérer un cours individuel par son ID unique
    const getCoursById = (id: string): CoursItem | undefined => {
      const all = [...coursCollectifs.value, ...coursPrives.value]
      return all.find(c => c.id === id.toLowerCase())
    }
  
    return {
      coursCollectifs,
      coursPrives,
      getCoursById
    }
  }