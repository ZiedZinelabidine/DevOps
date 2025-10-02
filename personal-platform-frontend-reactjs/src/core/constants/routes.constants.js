export const RootRoute = "/";
export const RootRoute301 = "/index.html";

export const PublicRoutes = {
  search: "search",
  freelancers: "search/prestataires",
  freelancersByCountry: "search/prestataires/country/:country",
  freelancersByJob: "search/prestataires/job/:job",
  freelancersBySkill: "search/prestataires/skill/:skill",
  freelancersByLanguage: "search/prestataires/language/:language",
  freelancersByRate: "search/prestataires/rate/:max",
  

  products: "search/products",
  productsBySkill: "search/products/skill/:skill",
  productsByLanguage: "search/products/language/:language",


  projects: "search/projects",
  projectsByCategory: "search/projects/category/:category",
  projectsByApplications: "search/projects/applications/:min/:max",
  projectsBySkill: "search/projects/skill/:skill",
  projectsByLocation: "search/projects/location/:location",
  projectsByLanguage: "search/projects/language/:language",


  contrats: "search/contrats",
  contratsByCategory: "search/contrats/category/:category",
  contratsByApplications: "search/contrats/applications/:min/:max",
  contratsBySkill: "search/contrats/skill/:skill",
  contratsByLocation: "search/contrats/location/:location",
  contratsByLanguage: "search/contrats/language/:language",
  

  agences: "search/agences",
  agencesbyId: "search/agences/id/:id",
  agencesbyRegion: "search/agences/region/:region",
  agencesbyVille: "search/agences/ville/:ville",
  agencesbySkill: "search/agences/skill/:skill",
  agencesbyPrice: "search/agences/price/:price",


  marketplacehpubuntu: "marketplaceubuntu",
  marketplacehpdebian: "marketplacedebian",
  marketplacehpredhat: "marketplaceredhat",
  marketplacehpmysql: "marketplacemysql",
  marketplacehppostgres: "marketplacepostgres",
  marketplacehpmongodb: "marketplacemongodb",

  design: "freelance-graphiste",
  devback: "freelance-informatique",
  devfront: "freelance-info",
  freelanceJobs:"freelance-jobs",
  devmobile: "freelance-app",
  devwp: "freelance-wordpress",
  devseo: "freelance-seo",
  siteseo: "freelance-digital-marketing",
  sitetests: "freelance-designer",
  devshopify: "freelance-site",
  siteshopify: "freelance-dev",
  siteback: "freelance-developpeur-web",
  sitefront: "freelance-web",
  siteapi:"freelance-developpeur", 
  sitewp: "freelance-it",
  sitemobile: "freelance-application",
  freelanceEDMgoogleAds: "freelance-google-ads",
  demandeundevis: "svc/app-as-service",
  shareProduct: "svc/demand-share-product",
  createCustomProduct: "svc/infra-as-service",
  devops: "infogerance-devops",
  infogeranceEDMAWS : "infogerance-aws",
  infogeranceEDMServeur : "infogerance-hebergement",
  siteaws: "infogerance-serveur",
  formationaws: "formation-aws",
  formationdocker: "docker-formation",
  formationgit: "formation-git",
  formationk8s: "formation-kubernetes",
  formationterraform: "formation-terraform",


  monitoringELK: "formations/monitoring-site-web-elk/:chapter",
  awesomephp: "awesome-frameworks/php",
  awesome: "formations/awesome-frameworks/:chapter",
  siteWeb: "formations/creer-site-web-gratuit/:chapter",
  applicationMobile: "formations/creer-une-application-mobile/:chapter",
  git: "formations/git/:chapter",
  gitlab: "formations/gitlab/:chapter",

    // Locations
    ProfilsSwipe: "profilsswipe",
  
    // Plateform
    plateformFreelance: "plateform-Freelance-2025/:chapter",

  JobsSwipe: "JobsSwipe",

//  agenceweb: "/agence-web",
  agenceseo: '/agence-seo',
  agencecommunicationnice: '/agence-de-communication-nice',
  agenceseostrasbourg: '/agence-seo-strasbourg',
  agencemarketing: '/agence-marketing',
  agenceseocaen: '/agence-seo-caen',
  agenceseomarseille: '/agence-seo-marseille',
  agenceseomontpellier: '/agence-seo-montpellier',
  agenceseonice: '/agence-seo-nice',
  agenceseoangers: '/agence-seo-angers',
  agenceseosaintetienne: '/agence-seo-saint-etienne',
};

export const DashboardCompanyRoutes = {
  jobopenings: "jobopenings",
  projects: "projects",
  profil: "profil",
  chat: "dashboardCompany",
  profils: "profils",
  composeyourteam: "composeyourteam",
  trainingsession: "trainingsession",
  appDetails: "detailsAppEntreprise/:id",
  payments: "payments",
  appspurchased: "appspurchased",
  products: "/products",
  videoTrainingDetails: "/detailsVideoTrainingEntreprise/:id",
  sessionTrainingDetails: "/detailsSessionTrainingEntreprise/:id",
  purchasedservices: "servicespurchased",
  purchasedservicesDetails: "/detailsPurchasedApplicationEntreprise/:id",
  purchasedservicesSessionTrainingDetails:
    "/detailsPurchasedSessionTrainingEntreprise/:id",
  purchasedservicesVideoTrainingDetails:
    "/detailsPurchasedVideoTrainingEntreprise/:id",
  createSessionTrainingRequest: "sessionTraining/create",
  sessionTrainingRequest: "sessionTrainingRequest",
  trainingSessionRequest: "trainingsessionRequests",
  joinus: "about-us",
  profileFreelances: "profilsCandidates",
  company: "company",
};

export const DashboardFreelancerRoutes = {
  projects: "projects",
  jobopenings: "jobopenings",
  profilCandidat: "profilcandidat",
  chat: "dashboardCandidat",
  producer: "producer",
  wallet: "/wallet",
  myproduct: "/myproduct/",
  contracts: "contracts"
};

export const DashboardRecruterRoutes = {
  chat: "dashboardRecruter",
  projects: "projects",
  itGalaxyContactor: "itgalaxycontactor",
  itGalaxyRecruitment: "itgalaxyrecruitment",
  recruitmentDash: "recruitmentDash",
  shareCandidat: "freelance",
  shareJob: "shareJob",
  contracts: "contracts",
  myoffers: "myoffers"

};

export const DashboardAccountingRoutes = {
  chat: "dashboardAccounting",
  homepageAccounting: "hpAccounting",
  signupAccounting: "signupAccounting",
  myWorkingFolder: "myworkingfolder",
};

export const TrainingRoutes = {
  videosTrainings: "videosTrainings",
};

export const AuthRoutes = {
  login: "/login",
  logout: "/logout",
  signup: "/signup",
  verifyemail: "verify-email",
  resetpassword: "reset-password",
  checkyouremailplz: "checkyouremailplz",
  dashboard: "dashboard",
  UserAgreement: "useragreement",
  PrivacyPolicy: "privacypolicy",
  TermsOfService: "termsofservice",
  ChangePassword: "changepassword",
  signup_freelancer: "/signup/freelancer",
  signup_company: "/signup/company",
  forget_password: "/forget-password",
  composeyourteam: "/composeyourteam",
};

export const ItGalaxyMarketplaceRoutes = {
  marketplace: "marketplace",
  itgalaxyProductDetails: "itgalaxyProductDetails/:token",
  itgalaxyProductPurchased: "itgalaxyProductPurchased/:token",
  productPurchased: "productPurchased/:token",
  server: "createProductServer",
  database: "createProductDatabase",
  github: "createProductGithub",
  products: "myproducts",

};

export const ErrorRoutes = {
  page404: "/404",
  page500: "/500",
  error: "/*",
};

export const BlogRoutes = {
  blog: "blog",
  blogPost: "blog/:slug",
};
