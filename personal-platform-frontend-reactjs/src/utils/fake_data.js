export const products = [
  {
    id: 1,
    type: "HOME_PAGE",
    titleId: "formations.course2.title",
    skills: ["Server", "Cloud"],
    price: 8.99,
    rising_star_global: 4.9,
    comments: ['1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2'],
    description: "Réservez votre serveur Ubuntu à l'heure. Choisissez la taille qui correspond le mieux à vos besoins. Idéal pour lancer et tester vos projets, à des prix très compétitifs par rapport à d'autres fournisseurs, sans engagement."
  },
  {
    id: 2,
    userId: 1,
    type: "HOME_PAGE",
    titleId: "Do It Yourself",
    skills: ["Web", "Wordpress"],
    price: 10,
    rising_star_global: 4.7,
    comments: ['1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2'],
    description : "Créer votre Site ou application pour votre entreprise , personnalisable selon vos besoins avec notre IA. Ensuite , on s'occupe de la mise en marche en production. Nous proposons trois forfaits : Gratuit, Basique et Avancé."
  },
  {
    id: 11,
    userId: 1,
    type: "HOME_PAGE",
    titleId: "Server Debian",
    skills: ["Cloud", "Server"],
    price: 1,
    rising_star_global: 4.6,
    comments: ['2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','2','1','2'],
    description: "Réservez votre Serveur Debian à l'heure. Choisissez la taille qui correspond le mieux à vos besoins. Idéal pour lancer et tester vos projets, à des prix très compétitifs par rapport à d'autres fournisseurs, sans engagement."
  },
  {
    id: 4,
    type: "HOME_PAGE",
    titleId: "formations.course4.title",
    skills: ["Cloud", "Database"],
    price: 1,
    currency: "USD",
    rising_star_global: 5,
    comments: ['1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2'],
    description: "Réservez votre Base de donnée Postgres à l'heure. Choisissez la taille qui correspond le mieux à vos besoins. Idéal pour lancer et tester vos projets, à des prix très compétitifs par rapport à d'autres fournisseurs, sans engagement."
  },
  {
    id: 5,
    userId: 1,
    type: "HOME_PAGE",
    titleId: "Server Redhat",
    descriptionId: "formations.course3.description",
    skills: ["Cloud", "Server"],
    price: 1,
    rising_star_global: 3.9,
    stars: 4.9,
    comments: ['1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2'],
    description: "Réservez votre Serveur RedHat à l'heure. Choisissez la taille qui correspond le mieux à vos besoins. Idéal pour lancer et tester vos projets, à des prix très compétitifs par rapport à d'autres fournisseurs, sans engagement."
  },
  {
    id: 10,
    userId: 1,
    type: "HOME_PAGE",
    titleId: "Elasticsearch & kibana",
    skills: ["Cloud", "ELK"],
    price: 20,
    currency: "USD",
    rising_star_global: 4.9,
    comments: ['2','1','2','1','2','1','2','1','2','1','2','1','2','1','2'],
    description: "Stack de Supervision pour votre application , avec des differents dashboard Kibana pour bien controller votre application en production . Nous proposons trois forfaits : Gratuit, Basique et Avancé."
  },
  {
    id: 7,
    userId: 1,
    type: "HOME_PAGE",
    titleId: "Database Mysql",
    descriptionId: "formations.course3.description",
    skills: ["Cloud", "Database"],
    price: 1,
    rising_star_global: 4.3,
    comments: ['1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2'],
    description: "Réservez votre Base de donnée Mysql à l'heure. Choisissez la taille qui correspond le mieux à vos besoins. Idéal pour lancer et tester vos projets, à des prix très compétitifs par rapport à d'autres fournisseurs, sans engagement."

  },
  {
    id: 9,
    userId: 1,
    type: "HOME_PAGE",
    titleId: "Database Mongodb",
    descriptionId: "formations.course3.description",
    repo: null,
    status: "OPENED",
    skills: ["Cloud", "Mongodb"],
    price: 1,
    rising_star_global: 4.3,
    comments: ['1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2'],
    description: "Réservez votre Base de donnée MongoDB à l'heure. Choisissez la taille qui correspond le mieux à vos besoins. Idéal pour lancer et tester vos projets, à des prix très compétitifs par rapport à d'autres fournisseurs, sans engagement."

  },
  {
    id: 12,
    userId: 1,
    type: "HOME_PAGE",
    titleId: "Cluster Kubernetes",
    descriptionId: "formations.course3.description",
    skills: ["Cloud", "K8s"],
    price: 50,
    rising_star_global: 4.9,
    comments: ['1','2','1','2','1','2','1','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2'],
    description: "Mise en place d'un cluster kubernetes complet sur AWS Services , Azure , Google cloud ou On Promise sur vos serveurs, à des prix très compétitifs par rapport à d'autres fournisseurs, sans engagement."
  } 
];
