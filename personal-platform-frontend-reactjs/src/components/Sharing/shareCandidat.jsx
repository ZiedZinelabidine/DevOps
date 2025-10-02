import { BlocShowJob } from "components/ModalITgalaxy/ModalApply/ModalApply.style";
import { useGetSharedCandidatQuery } from "../../redux/api/candidat/candidatApi";
import ViewCandidatProfil from "components/ComponnentProfilItems/Profils/Candidat/ViewCandidatProfil";
import Header from "components/Header/Header";
import Register from "components/Authentification/modals/register";
import { Mail } from 'lucide-react';
import { useState } from 'react';
import { Helmet } from "react-helmet";
import { categoryData } from "data/categoryData";

export default function ShareCandidat() {

  const queryParams = new URLSearchParams(window.location.search);
  const display = queryParams.get("token");
  const type = queryParams.get("type");
  const [openModalRegister, setOpenModalRegister] = useState(false);

  // Fetch candidate data
  const {
    data: candidateData,
    isLoading: isCandidateLoading,
    isError: isCandidateError,
  } = useGetSharedCandidatQuery(display);

  // Handle loading state
  if (isCandidateLoading) {
    return (
      <div style={{
        width: "100%",
        height: "100vh",
        backgroundColor: '#202124',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#9CA3AF'
      }}>
        Loading...
      </div>
    );
  }

  const getLabelByValue = (value) => {
    const category = categoryData.find(item => item.value === value);
    return category ? category.title : null; // returns null if value not found
  };

  // Handle error state
  if (isCandidateError || !candidateData) {
    return (
      <div style={{
        width: "100%",
        height: "100vh",
        backgroundColor: '#202124',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#EF4444'
      }}>
        {isCandidateError ? "Error occurred while fetching data" : "No user data available"}
      </div>
    );
  }

  // Contact button component
  const ContactButton = () => (
    <button
      onClick={() => setOpenModalRegister(true)}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '1rem 1.5rem',
        backgroundColor: '#8B5CF6',
        color: 'white',
        border: 'none',
        borderRadius: '9999px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        fontSize: '1rem',
        fontWeight: '600',
        zIndex: 50,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.backgroundColor = '#7C3AED';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.backgroundColor = '#8B5CF6';
      }}
    >
      <Mail size={20} />
      Contacter le freelancer
    </button>
  );

  return (
    <div style={{ width: "100%", minHeight: "103vh", backgroundColor: '#202124' }}>
   <Helmet>
    <title> {`${candidateData.name}`} - Freelance {`${getLabelByValue(candidateData.job)}`} - {`${candidateData.country_details}`} </title>
    <meta name="description" content={`Freelance : ${candidateData.profile_description}`} />
    <meta name="keywords" content="freelance , recrutement freelance, recruter un freelance, freelance recrutement, agence informatique, agence de developpement web, agence developpement mobile, agence developpement application, agence developpement applications mobiles, agence developpement web, agence france developpement, agence francaise pour le developpement, agence developpement web paris, freelance web, developpeur freelance, freelance application, webmaster freelance, application freelance, site internet freelance, web designer freelance, recherche freelance, web développeur freelance, freelance agence, freelance mission informatique, dev freelance, contrat de freelance, freelance developpeur, freelance developpeur web, web developpeur freelance, developpeur en freelance, developpeur freelance malt, developpeur junior freelance, prix developpeur freelance, développeur web freelance" />
    <link rel="canonical" href={`https://itgalaxy.io/freelance?type=recruiter&token=${display}`} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`https://itgalaxy.io/freelance?type=recruiter&token=${display}`} />
    <meta property="og:locale" content="fr_FR" />
    <meta property="og:site_name" content="ItGalaxy.io" />
    <link rel="alternate" hreflang="fr" href={`https://itgalaxy.io/freelance?type=recruiter&token=${display}`} />
    <link rel="alternate" hreflang="en" href={`https://itgalaxy.io/freelance?type=recruiter&token=${display}`} />
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Plateforme Freelance Web",
        "provider": {
          "@type": "Organization",
          "name": "ItGalaxy",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Paris",
            "addressRegion": "Île-de-France",
            "addressCountry": "FR"
          }
        },
        "description": "Recrutement de freelances web et d'agences de développement pour des projets de sites internet.",
        "areaServed": ["France", "Paris", "Lyon", "Marseille"],
        "serviceType": ["Recrutement Freelance", "Développement Web", "Création de Sites Internet"],
      })}
    </script>
  </Helmet>
      <Header active={"FREELANCERS"} />
      <BlocShowJob style={{ marginBottom: "100px", marginTop: "30px", backgroundColor: '#202124' }}>
        <ViewCandidatProfil
          data={candidateData}
          editProfil={false}
          role={"CANDIDAT"}
        />
      </BlocShowJob>
      <ContactButton />
      {openModalRegister && (
        <Register
          openModalRegister={openModalRegister}
          setOpenModalRegister={setOpenModalRegister}
          handleModalRegister={() => setOpenModalRegister(false)}
          switchBetweenModals={false}
          defaultkey={type}
        />
      )}
    </div>
  );
}
