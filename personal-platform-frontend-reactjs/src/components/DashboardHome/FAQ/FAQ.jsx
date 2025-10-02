import { BookOpenText, ChevronDown, ChevronRight } from 'lucide-react';
import styled from 'styled-components';
import { useState } from "react";


const Section = styled.section`
  padding: 6rem 2rem;
  position: relative;
`;

const FAQSection = styled(Section)`
margin-bottom: 10%;
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 3rem;
`;

const FAQItem = styled.div`
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px #60a5fa
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px #60a5fa;
    cursor: pointer;
  }
`;

const FAQQuestion = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  margin-bottom: ${props => props.isOpen ? '1rem' : '0'};
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    color: white;
    transition: transform 0.3s ease;
  }
`;

const FAQAnswer = styled.div`
  color: white;
  font-size: 0.875rem;
  line-height: 1.8;
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  opacity: ${props => props.isOpen ? '1' : '0'};
  padding-left: 0.5rem;
  border-left: 3px solid white;
  margin-left: 0.5rem;
`;


const SectionContent = styled.div`
  max-width: 72rem;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;


  svg {
    display: inline-block;
    vertical-align: middle;
    margin-right: 1rem;
    color: white;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: white;
  font-size: 1.125rem;
  margin-bottom: 4rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;


function FAQ() {

    const [openFAQ, setOpenFAQ] = useState(null);
    const [openModalRegister, setOpenModalRegister] = useState(false);

    const handleModalRegister = () => {
        setOpenModalRegister(true);
      };
    
       
      const faqs = [
        {
            question: "Qu'est-ce qu'un freelance web ?",
            answer: "Un développeur web freelance est un professionnel indépendant qui propose des services de développement et de design web. Ils travaillent souvent sur des projets variés, allant de la création de sites web à la gestion de missions informatiques."
        },
        {
            question: "Pourquoi choisir un développeur freelance ?",
            answer: "Choisir un développeur freelance permet d'accéder à des experts variés sans avoir besoin d'embaucher à temps plein. Ils peuvent offrir des solutions flexibles et adaptées à vos projets spécifiques."
        },
        {
            question: "Comment établir un contrat avec un développeur freelance ?",
            answer: "Un contrat de freelance doit définir clairement les termes de votre collaboration, y compris les délais, la rémunération, et les résultats attendus. Cela aide à éviter les malentendus pendant la mission."
        },
        {
            question: "Quels services propose une plateforme freelance informatique ?",
            answer: "Une plateforme freelance informatique met en relation des entreprises avec des freelances spécialisés en développement, design, et consultation IT, facilitant ainsi le recrutement d'experts pour des missions variées."
        },
        {
            question: "Comment recruter un développeur freelance pour ma mission informatique ?",
            answer: "Pour recruter un développeur freelance, commencez par définir clairement vos besoins, puis publiez votre projet sur une plateforme développeur freelance. Évaluez les candidatures en fonction des compétences et de l'expérience des candidats."
        },
        {
            question: "Quelles compétences sont recherchées chez un développeur freelance ?",
            answer: "Les compétences en développement web, en programmation, en gestion de bases de données et en technologies front-end et back-end sont parmi les plus recherchées chez les freelancers dans le domaine informatique."
        },
        {
            question: "Quels avantages présente l'utilisation d'une plateforme freelance pour le recrutement ?",
            answer: "Les plateformes freelance offrent un large choix de talents, facilitent la communication, et souvent incluent des protections pour les paiements, ce qui sécurise la collaboration entre clients et freelances."
        },
        {
            question: "Comment évaluer un prestataire de service informatique ?",
            answer: "Évaluez un prestataire en examinant son portfolio, les avis de ses anciens clients, ainsi que son expérience dans le domaine spécifique de votre projet."
        },
        {
            question: "Quels défis peut-on rencontrer en travaillant avec un développeur freelance ?",
            answer: "Les défis peuvent inclure des différences de communication, des délais non respectés, ou des attentes mal définies, il est donc crucial de maintenir une bonne gestion de projet."
        },
        {
            question: "Quelles sont les meilleures pratiques pour collaborer avec un freelance ?",
            answer: "Pour une collaboration réussie, définissez clairement vos attentes, communiquez régulièrement, et fournissez des retours constructifs tout au long du processus."
        },
        {
            question: "Comment fonctionne le paiement sur une plateforme développeur freelance ?",
            answer: "La plupart des plateformes freelance gèrent les paiements en retenant des fonds jusqu'à ce que le projet soit terminé et que le client soit satisfait du travail effectué."
        }
    ];

      return (

    <FAQSection>
    <SectionContent>
      <SectionTitle>
        Questions Fréquentes sur ItGalaxy.io
      </SectionTitle>
      <SectionSubtitle>
        Tout ce que vous devez savoir sur ItGalaxy.io avec nos freelances et nos agences d'experts
      </SectionSubtitle>
      <FAQGrid>
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
          >
            <FAQQuestion isOpen={openFAQ === index}>
              {faq.question}
              {openFAQ === index ?
                <ChevronDown size={20} style={{ transform: 'rotate(180deg)' }} /> :
                <ChevronDown size={20} />
              }
            </FAQQuestion>
            <FAQAnswer isOpen={openFAQ === index}>
              {faq.answer}
            </FAQAnswer>
          </FAQItem>
        ))}
      </FAQGrid>
    </SectionContent>
  </FAQSection>
    )
}

export default FAQ;