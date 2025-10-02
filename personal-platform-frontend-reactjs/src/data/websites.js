export const websites = [
  {
    id: 1,
    name: "EcoTech Solutions",
    url: "www.ecotechsolutions.fr",
    description: "Site vitrine moderne pour une entreprise spécialisée dans les solutions environnementales, mettant en avant leurs services et réalisations.",
    technologies: ["WordPress", "Elementor Pro", "WPForms", "Yoast SEO"],
    features: [
      "Design responsive",
      "Formulaire de contact avancé",
      "Intégration de carte interactive",
      "Galerie de projets",
      "Blog d'actualités"
    ],
    cost: 5000,
    timeline: "6 semaines",
    category: ["Environnement", "B2B"],
    client: "EcoTech Solutions SAS",
    status: "live",
    lastUpdate: "2024-02-15",
    screenshots: []
  },
  {
    id: 2,
    name: "HealthyBites",
    url: "www.healthybites.fr",
    description: "Plateforme de commande de repas santé avec un design appétissant et une expérience utilisateur optimisée.",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    features: [
      "Système de commande en ligne",
      "Espace client personnalisé",
      "Paiement sécurisé",
      "Programme de fidélité",
      "Notifications en temps réel"
    ],
    cost: 12000,
    timeline: "12 semaines",
    category: ["Alimentation", "E-commerce"],
    client: "HealthyBites SARL",
    status: "live",
    lastUpdate: "2024-03-01",
    screenshots: []
  },
  {
    id: 3,
    name: "GreenEnergy",
    url: "www.greenenergy.fr",
    description: "Site vitrine élégant pour un fournisseur d'énergie renouvelable, avec calculateur d'économies d'énergie intégré.",
    technologies: ["Vue.js", "Tailwind CSS", "Firebase"],
    features: [
      "Calculateur d'économies personnalisé",
      "Chatbot d'assistance",
      "Blog énergétique",
      "Demande de devis en ligne",
      "Espace client"
    ],
    cost: 8500,
    timeline: "8 semaines",
    category: ["Énergie", "B2C"],
    client: "GreenEnergy France",
    status: "live",
    lastUpdate: "2024-02-28",
    screenshots: []
  }
];

export const getAllCategories = () => {
  const categories = new Set();
  
  websites.forEach(website => {
    website.category.forEach(cat => {
      categories.add(cat);
    });
  });
  
  return Array.from(categories).sort();
};

export const getAllTechnologies = () => {
  const technologies = new Set();
  
  websites.forEach(website => {
    website.technologies.forEach(tech => {
      technologies.add(tech);
    });
  });
  
  return Array.from(technologies).sort();
};