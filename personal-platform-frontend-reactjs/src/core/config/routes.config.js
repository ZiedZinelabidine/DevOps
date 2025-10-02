import RegisterAccounting from "components/Authentification/modals/registerAccounting";
import Profilfreelances from "components/ComponnentProfilItems/profilfreelances/profilfreelances";
import MarketplaceComponents from "components/DashboardItGalaxyMarketplaceComponnent/MarketplaceComponnents";
import VideosTrainingsComponnents from "components/DashboardTrainingComponnents/TrainingsComponnents/VideosTrainingsComponnents/VideosTrainingsComponnents";
import Jobs from "components/Jobs/Jobs";
import JobsHP from "components/JobsHP/JobsHP";
import Login from "components/Login/Login";
import ProductPurchased from "components/ProductPurchased/ProductPurchased";
import Register from "components/Register/Register";
import { useIntl } from "react-intl";
import ControllerAccounting from "shared/guards/ControllerAccounting";
import ControllerGuard from "shared/guards/ControllerGuard";
import AfterSignup from "../../components/AfterSignup/AfterSignup";
import ItGalaxyProductDatabase from "../../components/CreateItGalaxyProductsComponnent/ItGalaxyProductCreateDatabase/ItGalaxyProductCreateDatabase";
import ItGalaxyProductCreateServer from "../../components/CreateItGalaxyProductsComponnent/ItGalaxyProductCreateServer/ItGalaxyProductCreateServer";
import ItGalaxyProductDetail from "../../components/ItGalaxyProductDetail/ItGalaxyProductDetail";
import { JoinUs } from "../../components/JoinUs/JoinUs";
import ModalForgotPassword from "../../components/ModalITgalaxy/ModalForgotPassword/ModalForgotPassword";
import ModalResetPassword from "../../components/ModalITgalaxy/ModalResetPassword/ModalResetPassword";
import RecruitmentDash from "../../components/RecruitmentComponents/RecruitmentDash";
import ShareCandidat from "../../components/Sharing/shareCandidat";
import ShareJob from "../../components/Sharing/shareJobs";
import PrivacyPolicy from "../../components/TermsItGalaxy/PrivacyPolicy";
import TermsOfService from "../../components/TermsItGalaxy/TermsOfService";
import UserAgreement from "../../components/TermsItGalaxy/UserAgreement";
import VerifyEmail from "../../components/VerifyEmail/VerifyEmail";
import NotFound from "../../pages/404/notFound";
import Blog from "../../pages/Blog/Blog";
import BlogPost from "../../pages/Blog/components/BlogPost";
import ChatAccounting from "../../pages/Chat/ChatAccounting/ChatAccounting";
import ChatCandidat from "../../pages/Chat/ChatCandidat/ChatCandidat";
import ChatEntreprise from "../../pages/Chat/ChatEntreprise/ChatEntreprise";
import ChatRecruter from "../../pages/Chat/ChatRecruter/ChatRecruter";
import Company from "../../pages/Company/Company";
import DashboardHome from "../../pages/DashboardHomePage/DashboardHomePage";
import DashboardHomePageAccounting from "../../pages/DashboardHomePageAccounting/DashboardHomePageAccounting";
import DashboardITProducer from "../../pages/DashboardITProducer/DashboardITProducer";
import MyProductEdit from "../../pages/DashboardITProducer/MyProductEdit";
import DashboardTraining from "../../pages/DashboardTraining/DashboardTraining";
import ItGalaxyContactor from "../../pages/ItGalaxyContactor/ItGalaxyContactor";
import Marketplace from "../../pages/Marketplace/Marketplace";
import ItGalaxyProductPurchased from "../../pages/Marketplace/MarketplacePruchased/ItGalaxyProductPurchased/ItGalaxyProductPurchased";
import MyWorkingFolders from "../../pages/MyWorkingFolders/MyWorkingFolders";
import Profil from "../../pages/Profil/Profil";
import Projects from "../../pages/projects/projects";
import Recruitment from "../../pages/Recruitment/Recruitment";
import Wallet from "../../pages/Wallet/Wallet";
import ControllerCandidat from "../../shared/guards/ControllerCandidat";
import ControllerCompany from "../../shared/guards/ControllerCompany";
import ControllerRecruter from "../../shared/guards/ControllerRecruter";
import {
  AuthRoutes,
  BlogRoutes,
  DashboardAccountingRoutes,
  DashboardCompanyRoutes,
  DashboardFreelancerRoutes,
  DashboardRecruterRoutes,
  ItGalaxyMarketplaceRoutes,
  PublicRoutes,
  RootRoute,
  RootRoute301,
  TrainingRoutes,
} from "../constants/routes.constants";
import DashboardItGalaxyMarketplacePurchased from "pages/DashboardItGalaxyMarketplacePurchased/DashboardItGalaxyMarketplacePurchased";
import Contracts from "pages/Contracts/Contracts";
import MyOffers from "pages/MyOffers/MyOffers";
import HpUbuntu from "components/DashboardItGalaxyMarketplaceComponnent/HPMarketplace/HpUbuntu";
import HpDebian from "components/DashboardItGalaxyMarketplaceComponnent/HPMarketplace/HpDebian";
import HpRedhat from "components/DashboardItGalaxyMarketplaceComponnent/HPMarketplace/HpRedhat";
import HpMysql from "components/DashboardItGalaxyMarketplaceComponnent/HPMarketplace/HpMysql";
import HpPostgres from "components/DashboardItGalaxyMarketplaceComponnent/HPMarketplace/HpPostgres";
import HpMongodb from "components/DashboardItGalaxyMarketplaceComponnent/HPMarketplace/HpMongodb";
import Design from "components/DashboardHome/Pages/Design";
import SiteShopify from "components/DashboardHome/Pages/SiteShopify";
import SiteWp from "components/DashboardHome/Pages/SiteWp";
import SiteAWS from "components/DashboardHome/Pages/SiteAWS";
import SiteFrontend from "components/DashboardHome/Pages/SiteFrontend";
import SiteBackend from "components/DashboardHome/Pages/SiteBackend";
import SiteTest from "components/DashboardHome/Pages/SiteTest";
import SiteMobile from "components/DashboardHome/Pages/SiteMobile";
import SiteAPIs from "components/DashboardHome/Pages/SiteAPIs";
import Mobile from "components/DashboardHome/Pages/Mobile";
import Shopify from "components/DashboardHome/Pages/Shopify";
import Wp from "components/DashboardHome/Pages/Wp";
import Devops from "components/DashboardHome/Pages/Devops";
import Frontend from "components/DashboardHome/Pages/Frontend";
import Backend from "components/DashboardHome/Pages/Backend";
import Seo from "components/DashboardHome/Pages/Seo";
import SiteSEO from "components/DashboardHome/Pages/SiteSEO";
import AllContracts from "components/AllContracts/AllContracts";
import MonitoringSite from "@components/DashboardHome/Pages/Monitoring-site/MonitoringSite";
import Awesome from "@components/DashboardHome/Pages/Awesome/Awesome";
import Appgratruit from "@components/DashboardHome/Pages/Appgratruit/Appgratruit";
import FormDevis from "@components/DashboardHome/ItGalaxyAsService/FormDevis";
import FormDevisShareProduct from "@components/DashboardHome/ItGalaxyAsService/FormDevisShareProduct";
import FormDevisMarketplaceAsService from "@components/DashboardHome/ItGalaxyAsService/FormDevisMarketplaceAsService";
import GitPages from "@components/DashboardHome/Pages/GitPages/GitPages";
import GitlabPages from "@components/DashboardHome/Pages/CICD/GitlabPages";
import JobsSwipe from "@components/JobsSwipe/JobsSwipe";
import ProfilsSwipe from "@components/ProfilSwipe/ProfilSwipe";
import AgenceSearch from "@components/DashboardHome/AgenceSearch/AgenceSearch";
import FreelanceGoogleAds from "@components/DashboardHome/Pages/EMDFREELANCE/EMDGOOGLEADS/FreelanceGoogleAds";
import AgenceInfogeranceAWS from "@components/DashboardHome/Pages/AgenceInfogeranceAWS/AgenceInfogeranceAWS";
import InfogeranceServer from "@components/DashboardHome/Pages/EMDINFOGERANCE/EMDSERVEUR/infogeranceServer";
import { FormationAWS } from "@components/DashboardHome/Pages/Formations/AWS/Formation-aws";
import { FormationDocker } from "@components/DashboardHome/Pages/Formations/Docker/Formation-docker";
import { FormationGit } from "@components/DashboardHome/Pages/Formations/Git/Formation-git";
import { FormationK8S } from "@components/DashboardHome/Pages/Formations/Kubernetes/Formation-kubernetes";
import { FormationTerrafom } from "@components/DashboardHome/Pages/Formations/Terraform/Formation-terraform";

const businessIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images-webp/business.webp`;
const individualIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images-webp/individual.webp`;
const recruiterIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images-webp/recruiter.webp`;

const JoinUsWithTranslations = () => {
  const intl = useIntl();

  return (
    <JoinUs
      items={[
        {
          id: 0,
          icon: businessIcon,
          label: intl.formatMessage({
            id: "join_us.user_types.business.label",
          }),
          description: intl.formatMessage({
            id: "join_us.user_types.business.description",
          }),
        },
        {
          id: 1,
          icon: individualIcon,
          label: intl.formatMessage({
            id: "join_us.user_types.individual.label",
          }),
          description: intl.formatMessage({
            id: "join_us.user_types.individual.description",
          }),
        },
        {
          id: 2,
          icon: recruiterIcon,
          label: intl.formatMessage({
            id: "join_us.user_types.recruiter.label",
          }),
          description: intl.formatMessage({
            id: "join_us.user_types.recruiter.description",
          }),
        },
      ]}
      title={"Hello ✨"}
      description={intl.formatMessage({ id: "join_us.welcome_message" })}
    />
  );
};

export const RoutesConfig = [
  {
    path: RootRoute,
    element: <DashboardHome />,
  },
  {
    path: RootRoute301,
    element: <DashboardHome />,
  },
  {
    path: AuthRoutes.verifyemail,
    element: <VerifyEmail />,
  },
  {
    path: AuthRoutes.resetpassword,
    element: <ModalResetPassword />,
  },

  {
    path: AuthRoutes.checkyouremailplz,
    element: <AfterSignup />,
  },

  {
    path: AuthRoutes.UserAgreement,
    element: <UserAgreement />,
  },

  {
    path: AuthRoutes.PrivacyPolicy,
    element: <PrivacyPolicy />,
  },

  {
    path: AuthRoutes.TermsOfService,
    element: <TermsOfService />,
  },

  {
    path: AuthRoutes.verifyemail,
    element: <VerifyEmail />,
  },

  {
    path: AuthRoutes.signup,
    element: <Register />,
  },
  {
    path: AuthRoutes.login,
    element: <Login />,
  },

  {
    path: BlogRoutes.blog,
    element: <Blog />,
  },

  {
    path: BlogRoutes.blogPost,
    element: <BlogPost />,
  },

  {
    path: PublicRoutes.freelancers,
    element: <Profilfreelances />,
  },

  {
    path: PublicRoutes.freelancersByCountry,
    element: <Profilfreelances />,
  },

  {
    path: PublicRoutes.freelancersByJob,
    element: <Profilfreelances />,
  },

  {
    path: PublicRoutes.freelancersBySkill,
    element: <Profilfreelances />,
  },

  {
    path: PublicRoutes.freelancersByLanguage,
    element: <Profilfreelances />,
  },

  {
    path: PublicRoutes.freelancersByRate,
    element: <Profilfreelances />,
  },

  {
    path: PublicRoutes.freelanceEDMgoogleAds,
    element: <FreelanceGoogleAds />,
  },


  {
    path: PublicRoutes.projects,
    element: <Jobs />,
  },
  {
    path: PublicRoutes.freelanceJobs,
    element: <JobsHP />,
  },

  {
    path: PublicRoutes.projectsByCategory,
    element: <Jobs />,
  },

  {
    path: PublicRoutes.projectsByApplications,
    element: <Jobs />,
  },

  {
    path: PublicRoutes.projectsBySkill,
    element: <Jobs />,
  },

  {
    path: PublicRoutes.projectsByLocation,
    element: <Jobs />,
  },

  {
    path: PublicRoutes.projectsByLanguage,
    element: <Jobs />,
  },

  {
    path: PublicRoutes.contrats,
    element: <AllContracts />,
  },

  {
    path: PublicRoutes.contratsByCategory,
    element: <AllContracts />,
  },

  {
    path: PublicRoutes.contratsByApplications,
    element: <AllContracts />,
  },

  {
    path: PublicRoutes.contratsBySkill,
    element: <AllContracts />,
  },

  {
    path: PublicRoutes.contratsByLocation,
    element: <AllContracts />,
  },

  {
    path: PublicRoutes.contratsByLanguage,
    element: <AllContracts />,
  },

  {
    path: PublicRoutes.design,
    element: <Design />,
  },

  {
    path: PublicRoutes.devback,
    element: <Backend />,
  },
  {
    path: PublicRoutes.devfront,
    element: <Frontend />,
  },
  {
    path: PublicRoutes.devops,
    element: <Devops />,
  },
  {
    path: PublicRoutes.devwp,
    element: <Wp />,
  },
  {
    path: PublicRoutes.devshopify,
    element: <Shopify />,
  },
  {
    path: PublicRoutes.devmobile,
    element: <Mobile />,
  },

  {
    path: PublicRoutes.sitewp,
    element: <SiteWp />,
  },

  {
    path: PublicRoutes.siteapi,
    element: <SiteAPIs />,
  },


  {
    path: PublicRoutes.sitemobile,
    element: <SiteMobile />,
  },

  {
    path: PublicRoutes.sitetests,
    element: <SiteTest />,
  },

  {
    path: PublicRoutes.siteback,
    element: <SiteBackend />,
  },

  {
    path: PublicRoutes.sitefront,
    element: <SiteFrontend />,
  },

  {
    path: PublicRoutes.siteaws,
    element: <SiteAWS />,
  },

  {
    path: PublicRoutes.sitewp,
    element: <SiteWp />,
  },
  {
    path: PublicRoutes.siteshopify,
    element: <SiteShopify />,
  },
  {
    path: PublicRoutes.devseo,
    element: <Seo />,
  },
  {
    path: PublicRoutes.siteseo,
    element: <SiteSEO />,
  },

  {
    path: PublicRoutes.agences,
    element: <AgenceSearch />,
  },

  {
    path: PublicRoutes.agencesbyId,
    element: <AgenceSearch />,
  },

  {
    path: PublicRoutes.agencesbyRegion,
    element: <AgenceSearch />,
  },

  {
    path: PublicRoutes.agencesbySkill,
    element: <AgenceSearch />,
  },

  {
    path: PublicRoutes.agencesbyPrice,
    element: <AgenceSearch />,
  },
  {
    path: PublicRoutes.agencesbyVille,
    element: <AgenceSearch />,
  },

  /* { 
     path: PublicRoutes.agenceweb,
     element: <AgenceSearch />,
   }, */

  {
    path: PublicRoutes.agencecommunicationnice,
    element: <AgenceSearch />,
  },
  {
    path: PublicRoutes.agenceseostrasbourg,
    element: <AgenceSearch />,
  },
  {
    path: PublicRoutes.agencemarketing,
    element: <AgenceSearch />,
  },
  {
    path: PublicRoutes.agenceseocaen,
    element: <AgenceSearch />,
  },
  {
    path: PublicRoutes.agenceseomarseille,
    element: <AgenceSearch />,
  },
  {
    path: PublicRoutes.agenceseomontpellier,
    element: <AgenceSearch />,
  },
  {
    path: PublicRoutes.agenceseo,
    element: <AgenceSearch />,
  },

  {
    path: PublicRoutes.agenceseonice,
    element: <AgenceSearch />,
  },
  {
    path: PublicRoutes.agenceseoangers,
    element: <AgenceSearch />,
  },
  {
    path: PublicRoutes.agenceseosaintetienne,
    element: <AgenceSearch />,
  },
  {
    path: PublicRoutes.products,
    element: <MarketplaceComponents />,
  },
  {
    path: PublicRoutes.monitoringELK,
    element: <MonitoringSite />,
  },
  {
    path: PublicRoutes.productsBySkill,
    element: <MarketplaceComponents />,
  },

  {
    path: PublicRoutes.productsByLanguage,
    element: <MarketplaceComponents />,
  },

  {
    path: PublicRoutes.trainings,
    element: <VideosTrainingsComponnents />,
  },

  {
    path: PublicRoutes.trainingsBySkill,
    element: <VideosTrainingsComponnents />,
  },

  {
    path: PublicRoutes.trainingsByLanguage,
    element: <VideosTrainingsComponnents />,
  },

  {
    path: PublicRoutes.marketplacehpubuntu,
    element: <HpUbuntu />,
  },

  {
    path: PublicRoutes.marketplacehpdebian,
    element: <HpDebian />,
  },
  {
    path: PublicRoutes.marketplacehpredhat,
    element: <HpRedhat />,
  },
  {
    path: PublicRoutes.marketplacehpmysql,
    element: <HpMysql />,
  },
  {
    path: PublicRoutes.marketplacehppostgres,
    element: <HpPostgres />,
  },
  {
    path: PublicRoutes.marketplacehpmongodb,
    element: <HpMongodb />,
  },
  {
    path: PublicRoutes.awesome,
    element: <Awesome />,
  },
  {
    path: PublicRoutes.awesomephp,
    element: <Awesome />,
  },

  {
    path: PublicRoutes.applicationMobile,
    element: <Appgratruit />,
  },

  {
    path: PublicRoutes.demandeundevis,
    element: <FormDevis />,
  },

  {
    path: PublicRoutes.formationaws,
    element: <FormationAWS />,
  },
  {
    path: PublicRoutes.formationdocker,
    element: <FormationDocker />,
  },

  {
    path: PublicRoutes.formationgit,
    element: <FormationGit />,
  },

  {
    path: PublicRoutes.formationk8s,
    element: <FormationK8S />,
  },

  {
    path: PublicRoutes.formationterraform,
    element: <FormationTerrafom />,
  },

  {
    path: PublicRoutes.JobsSwipe,
    element: <JobsSwipe />,
  },
  {
    path: PublicRoutes.ProfilsSwipe,
    element: <ProfilsSwipe />,
  },


  {
    path: PublicRoutes.shareProduct,
    element: <FormDevisShareProduct />,
  },

  {
    path: PublicRoutes.createCustomProduct,
    element: <FormDevisMarketplaceAsService />,
  },

  {
    path: PublicRoutes.git,
    element: <GitPages />,
  },
  {
    path: PublicRoutes.gitlab,
    element: <GitlabPages />,
  },

  {
    path: PublicRoutes.infogeranceEDMAWS,
    element: <AgenceInfogeranceAWS />,
  },
  {
    path: PublicRoutes.infogeranceEDMServeur,
    element: <InfogeranceServer />,
  },


  // Freelancer Routes Config
  {
    path: DashboardFreelancerRoutes.projects,
    element: (
      <>
        <ControllerGuard />
        <Projects />
      </>
    ),
  },

  // Freelancer Routes Config
  {
    path: DashboardFreelancerRoutes.contracts,
    element: (
      <>
        <ControllerGuard />
        <Contracts />
      </>
    ),
  },


  // Company Routes Config
  {
    path: DashboardCompanyRoutes.chat,
    element: (
      <>
        <ControllerCompany />
        <ChatEntreprise />
      </>
    ),
  },

  {
    path: DashboardCompanyRoutes.profil,
    element: (
      <>
        <ControllerGuard />
        <Profil />
      </>
    ),
  },
  {
    path: DashboardRecruterRoutes.itGalaxyContactor,
    element: (
      <>
        <ControllerGuard />
        <ItGalaxyContactor />
      </>
    ),
  },

  {
    path: DashboardRecruterRoutes.itGalaxyRecruitment,
    element: (
      <>
        <ControllerGuard />
        <Recruitment />
      </>
    ),
  },

  {
    path: DashboardRecruterRoutes.recruitmentDash,
    element: (
      <>
        <ControllerGuard />
        <RecruitmentDash />
      </>
    ),
  },
  {
    path: DashboardRecruterRoutes.shareCandidat,
    element: (
      <ShareCandidat />
    ),
  },
  {
    path: DashboardRecruterRoutes.shareJob,
    element: (
      <>
        <ShareJob />
      </>
    ),
  },

  {
    path: DashboardCompanyRoutes.company,
    element: (
      <>
        <ControllerGuard />
        <Company />
      </>
    ),
  },

  {
    path: DashboardFreelancerRoutes.chat,
    element: (
      <>
        <ControllerCandidat />
        <ChatCandidat />
      </>
    ),
  },
  {
    path: DashboardFreelancerRoutes.producer,
    element: (
      <>
        <ControllerGuard />
        <DashboardITProducer />
      </>
    ),
  },

  {
    path: TrainingRoutes.videosTrainings,
    element: (
      <>
        <ControllerGuard />
        <DashboardTraining />
      </>
    ),
  },

  {
    path: ItGalaxyMarketplaceRoutes.marketplace,
    element: (
      <>
        <ControllerGuard />
        <Marketplace />
      </>
    ),
  },
  {
    path: ItGalaxyMarketplaceRoutes.products,
    element: (
      <>
        <ControllerGuard />
        <DashboardItGalaxyMarketplacePurchased />
      </>
    ),
  },
  {
    path: DashboardCompanyRoutes.joinus,
    element: <JoinUsWithTranslations />,
  },

  {
    path: AuthRoutes.ChangePassword,
    element: (
      <ModalForgotPassword
        show={true}
        onBack={"handleBacktoLogin"}
        onHide={"closeModal"}
      />
    ),
  },

  {
    path: DashboardFreelancerRoutes.wallet,
    element: (
      <>
        <ControllerGuard />
        <Wallet />
      </>
    ),
  },

  {
    path: DashboardRecruterRoutes.chat,
    element: (
      <>
        <ControllerRecruter />
        <ChatRecruter />
      </>
    ),
  },

  {
    path: DashboardAccountingRoutes.chat,
    element: (
      <>
        <ControllerAccounting />
        <ChatAccounting />
      </>
    ),
  },
  {
    path: DashboardRecruterRoutes.myoffers,
    element: (
      <>
        <ControllerRecruter />
        <MyOffers />
      </>
    ),
  },
  {
    path: DashboardAccountingRoutes.signupAccounting,
    element: (
      <RegisterAccounting
        openModalRegister={true}
        setOpenModalRegister={true}
        switchBetweenModals={false}
        proxy={"dashboard"}
        back={false}
      />
    ),
  },
  {
    path: DashboardAccountingRoutes.homepageAccounting,
    element: <DashboardHomePageAccounting />,
  },
  {
    path: DashboardAccountingRoutes.myWorkingFolder,
    element: (
      <>
        <ControllerGuard />
        <MyWorkingFolders />
      </>
    ),
  },

  {
    path: ItGalaxyMarketplaceRoutes.server,
    element: (
      <>
        <ControllerGuard />
        <ItGalaxyProductCreateServer />{" "}
      </>
    ),
  },
  {
    path: ItGalaxyMarketplaceRoutes.database,
    element: (
      <>
        <ControllerGuard /> <ItGalaxyProductDatabase />
      </>
    ),
  },
  {
    path: ItGalaxyMarketplaceRoutes.itgalaxyProductPurchased,
    element: (
      <>
        <ControllerGuard />
        <ItGalaxyProductPurchased />
      </>
    ),
  },

  {
    path: ItGalaxyMarketplaceRoutes.productPurchased,
    element: (
      <>
        <ControllerGuard /> <ProductPurchased />
      </>
    ),
  },

  {
    path: ItGalaxyMarketplaceRoutes.itgalaxyProductDetails,
    element: (
      <>
        <ControllerGuard /> <ItGalaxyProductDetail />
      </>
    ),
  },
  {
    path: TrainingRoutes.videosTrainings,
    element: (
      <>
        <ControllerGuard /> <DashboardTraining />
      </>
    ),
  },

  {
    path: DashboardFreelancerRoutes.myproduct,
    element: (
      <>
        <ControllerGuard /> <MyProductEdit />
      </>
    ),
  },

  {
    path: "*",
    element: <NotFound />,
  },
];
