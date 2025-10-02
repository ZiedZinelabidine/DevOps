export const companies = [
  {
    id: 1,
    name: 'EcoTech Solutions',
    sector: ['Technology', 'Environment'],
    website: 'www.ecotechsolutions.fr',
    ceo: 'Jean Dupont',
    email: 'contact@ecotechsolutions.fr',
    tools: ['WordPress', 'Google Cloud'],
    hosting: 'OVH',
    siteCost: 5000,
    revenue: 8000,
    description: 'EcoTech Solutions développe des technologies innovantes pour réduire l\'impact environnemental des entreprises, en proposant des solutions de gestion des déchets et d\'optimisation énergétique.'
  },
  {
    id: 2,
    name: 'HealthyBites',
    sector: ['Alimentation', 'Santé'],
    website: 'www.healthybites.fr',
    ceo: 'Marie Martin',
    email: 'info@healthybites.fr',
    tools: ['Shopify', 'AWS'],
    hosting: 'AWS',
    siteCost: 7500,
    revenue: 7500,
    description: 'HealthyBites propose des repas sains et équilibrés, livrés à domicile, avec des ingrédients biologiques et des recettes adaptées à tous les régimes alimentaires.'
  },
  {
    id: 3,
    name: 'GreenEnergy',
    sector: ['Énergie', 'Environnement'],
    website: 'www.greenenergy.fr',
    ceo: 'Pierre Lambert',
    email: 'contact@greenenergy.fr',
    tools: ['React', 'Node.js', 'AWS'],
    hosting: 'AWS',
    siteCost: 10000,
    revenue: 9000,
    description: 'GreenEnergy est spécialisée dans la production et la distribution d\'énergie renouvelable, en proposant des solutions solaires et éoliennes pour les particuliers et les entreprises.'
  },
  {
    id: 4,
    name: 'TechInnov',
    sector: ['Technologie', 'Innovation'],
    website: 'www.techinnov.fr',
    ceo: 'Sophie Dubois',
    email: 'info@techinnov.fr',
    tools: ['Angular', 'Firebase'],
    hosting: 'Google Cloud',
    siteCost: 6000,
    revenue: 7000,
    description: 'TechInnov conçoit des solutions technologiques pour les entreprises, en se concentrant sur l\'automatisation des processus et l\'intelligence artificielle.'
  },
  {
    id: 5,
    name: 'FashionHub',
    sector: ['Mode', 'E-commerce'],
    website: 'www.fashionhub.fr',
    ceo: 'Laura Petit',
    email: 'contact@fashionhub.fr',
    tools: ['Shopify', 'Stripe'],
    hosting: 'Shopify',
    siteCost: 8000,
    revenue: 9500,
    description: 'FashionHub est une plateforme e-commerce qui met en avant des créateurs de mode indépendants, en proposant des vêtements uniques et durables.'
  },
  {
    id: 6,
    name: 'SmartHomeTech',
    sector: ['Domotique', 'Technologie'],
    website: 'www.smarthometech.fr',
    ceo: 'Marc Leroy',
    email: 'info@smarthometech.fr',
    tools: ['React', 'AWS'],
    hosting: 'AWS',
    siteCost: 12000,
    revenue: 10000,
    description: 'SmartHomeTech développe des solutions domotiques pour rendre les maisons plus intelligentes et plus efficaces sur le plan énergétique.'
  },
  {
    id: 7,
    name: 'EcoTravel',
    sector: ['Tourisme', 'Environnement'],
    website: 'www.ecotravel.fr',
    ceo: 'Alice Moreau',
    email: 'contact@ecotravel.fr',
    tools: ['WordPress', 'Google Cloud'],
    hosting: 'Google Cloud',
    siteCost: 9000,
    revenue: 8500,
    description: 'EcoTravel propose des voyages éco-responsables, en mettant l\'accent sur des destinations et des hébergements respectueux de l\'environnement.'
  },
  {
    id: 8,
    name: 'FoodBox',
    sector: ['Alimentation', 'Livraison'],
    website: 'www.foodbox.fr',
    ceo: 'Thomas Bernard',
    email: 'info@foodbox.fr',
    tools: ['Shopify', 'Stripe'],
    hosting: 'Shopify',
    siteCost: 7000,
    revenue: 7200,
    description: 'FoodBox est un service de livraison de repas qui propose des box culinaires avec des recettes simples et des ingrédients frais pour cuisiner à la maison.'
  },
  {
    id: 9,
    name: 'GreenFashion',
    sector: ['Mode', 'Durabilité'],
    website: 'www.greenfashion.fr',
    ceo: 'Julie Lemoine',
    email: 'contact@greenfashion.fr',
    tools: ['Wix', 'Stripe'],
    hosting: 'Wix',
    siteCost: 6500,
    revenue: 7800,
    description: 'GreenFashion est une marque de mode durable qui utilise des matériaux recyclés et éthiques pour créer des vêtements tendance et respectueux de l\'environnement.'
  },
  {
    id: 10,
    name: 'TechEdu',
    sector: ['Éducation', 'Technologie'],
    website: 'www.techedu.fr',
    ceo: 'Paul Garnier',
    email: 'info@techedu.fr',
    tools: ['WordPress', 'Google Cloud'],
    hosting: 'Google Cloud',
    siteCost: 8500,
    revenue: 9200,
    description: 'TechEdu propose des formations en ligne pour apprendre les compétences technologiques essentielles, en se concentrant sur la programmation, la data science et le design.'
  }
];

export const getAllSectors = () => {
  const sectors = new Set();
  
  companies.forEach(company => {
    company.sector.forEach(sector => {
      sectors.add(sector);
    });
  });
  
  return Array.from(sectors).sort();
};