import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import styled from 'styled-components';

const FAQContainer = styled.div`
  margin-top: 4rem;
`;

const FAQItem = styled.div`
  border: 1px solid rgba(16, 185, 129, 0.1);
  border-radius: 12px;
  margin-bottom: 1rem;
  overflow: hidden;
  
`;

const FAQQuestion = styled.h2`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: #ffffff;
  font-weight: 500;
  background: rgba(16, 185, 129, 0.05);
  transition: all 0.3s;
  font-size: 20px;


  svg {
    transition: transform 0.3s;
    ${props => props.isOpen && 'transform: rotate(180deg);'}
    color: #10B981;
  }

  &:hover {
    background: rgba(16, 185, 129, 0.1);
  }
`;

const FAQAnswer = styled.h3`
  padding: ${props => props.isOpen ? '1.5rem' : '0 1.5rem'};
  color: #94A3B8;
  line-height: 1.6;
  max-height: ${props => props.isOpen ? '500px' : '0'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  transition: all 0.3s;
  overflow: hidden;
  font-size: 15px;

`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #ffffff;
  background: linear-gradient(to right, #10B981, #34D399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  svg {
    display: inline-block;
    vertical-align: middle;
    margin-right: 1rem;
    color: #10B981;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #94A3B8;
  font-size: 1.25rem;
  margin-bottom: 4rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
`;

const faqData = [
  {
      question: "Qu'est-ce que le Digital Marketing et pourquoi est-ce important ?",
      answer: "Le Digital Marketing (Search Engine Optimization) est l'ensemble des techniques visant à améliorer la visibilité d'un site web dans les résultats de recherche. C'est crucial car cela permet d'attirer un trafic qualifié, d'augmenter votre visibilité en ligne et de générer plus de leads ou de ventes. En travaillant avec des freelances spécialisés, vous pouvez optimiser votre site efficacement."
  },
  {
      question: "Combien de temps faut-il pour voir des résultats Digital Marketing ?",
      answer: "Les résultats Digital Marketing prennent généralement 3 à 6 mois pour devenir visibles. Cependant, certaines améliorations techniques peuvent avoir un impact plus rapide. Le Digital Marketing est un investissement à long terme qui nécessite de la patience et de la constance. Trouver la bonne mission freelance Digital Marketing peut également accélérer ce processus."
  },
  {
      question: "Comment mesurez-vous le succès d'une campagne Digital Marketing ?",
      answer: "Nous utilisons plusieurs indicateurs clés : le positionnement sur les mots-clés ciblés, l'évolution du trafic organique, le taux de conversion, le taux de rebond, et le ROI global. Des rapports détaillés vous sont fournis mensuellement, que vous pouvez suivre en collaboration avec votre freelance Digital Marketing."
  },
  {
      question: "Quelles sont vos méthodes Digital Marketing ?",
      answer: "Nous suivons les meilleures pratiques recommandées par Google : optimisation technique, création de contenu de qualité, netlinking naturel, et amélioration de l'expérience utilisateur. En collaborant avec des développeurs freelance, nous nous assurons que ces méthodes sont correctement implémentées, sans techniques black hat qui pourraient pénaliser votre site."
  },
  {
      question: "Comment trouver une mission freelance en Digital Marketing ?",
      answer: "Pour trouver une mission freelance en Digital Marketing, vous pouvez utiliser des plateformes comme ItGalaxy, où vous pouvez rechercher des projets en fonction de vos compétences et de votre expertise. Consultez les avis et les portfolios pour choisir la mission qui vous convient."
  },
  {
      question: "Quelles compétences sont essentielles pour un freelance Digital Marketing ?",
      answer: "Un freelance Digital Marketing doit avoir de solides compétences en optimisation on-page, en stratégie de contenu, en mobile-first design, ainsi qu'en analyse de données. Une expérience avec des outils comme Google Analytics, SEMrush ou Moz est également un plus."
  },
  {
      question: "Quels sont les meilleurs outils pour mesurer le Digital Marketing ?",
      answer: "Les outils comme Google Analytics, Google Search Console, SEMrush et Ahrefs sont parmi les meilleurs pour suivre et mesurer vos performances Digital Marketing. Ils fournissent des rapports sur le trafic, la position des mots-clés, et des suggestions d'optimisation."
  },
  {
      question: "Comment optimiser le contenu pour Digital Marketing ?",
      answer: "Pour optimiser votre contenu pour le Digital Marketing, concentrez-vous sur l'utilisation de mots-clés pertinents, la création de titres accrocheurs, l'amélioration de la lisibilité, et l'inclusion de liens internes et externes. Collaborer avec un rédacteur freelance peut vous aider à produire du contenu de qualité."
  },
  {
      question: "Quelles sont les erreurs courantes à éviter en Digital Marketing ?",
      answer: "Les erreurs courantes incluent l'optimisation excessive des mots-clés, la négligence des balises alt pour les images, le manque de liens internes, et des temps de chargement lents. Travailler avec un expert freelance Digital Marketing peut vous aider à éviter ces pièges."
  },
  {
      question: "Comment élaborer une stratégie de netlinking efficace ?",
      answer: "Une stratégie de netlinking efficace consiste à créer du contenu de qualité que d'autres sites voudront partager, à établir des partenariats avec des blogueurs et influenceurs, et à utiliser des outils pour suivre vos backlinks. Un freelance Digital Marketing peut guider ce processus pour maximiser les effets."
  },
  {
      question: "Importance du mobile-first pour le Digital Marketing ?",
      answer: "Le mobile-first signifie que la version mobile de votre site est prioritaire pour l'indexation par Google. Cela est crucial car une grande partie du trafic provient des appareils mobiles. Optimiser votre site pour mobile est essentiel pour maintenir de bons classements Digital Marketing."
  },
  {
      question: "Quels sont les avantages d'utiliser un freelance pour le Digital Marketing ?",
      answer: "Faire appel à un freelance Digital Marketing vous permet d'avoir accès à une expertise ponctuelle sans coût d'embauche à long terme. Cela donne également de la flexibilité pour projeter des missions spécifiques comme les optimisations techniques."
  },
  {
      question: "Comment effectuer un audit Digital Marketing ?",
      answer: "Un audit Digital Marketing implique d'évaluer votre site pour divers critères tels que la structure, le contenu, les backlinks et les performances. Utilisez des outils comme Screaming Frog ou SEMrush pour effectuer une analyse détaillée. Un expert freelance peut également réaliser cet audit efficacement."
  },
  {
      question: "Comment Digital Marketing et UX sont-ils liés ?",
      answer: "Le Digital Marketing et l'UX (expérience utilisateur) sont interdépendants. Une bonne UX mène souvent à une meilleure rétention des utilisateurs et un plus haut taux de conversion, ce qui peut renforcer votre Digital Marketing. Optimiser les deux en parallèle est la clé du succès."
  },
  {
      question: "Quelle est l'importance de la vitesse de chargement pour le Digital Marketing ?",
      answer: "Une vitesse de chargement rapide améliore non seulement l'expérience utilisateur, mais est aussi un facteur clé de classement pour Google. Utilisez des outils comme Google PageSpeed Insights pour mesurer et optimiser la vitesse de votre site."
  },
  {
      question: "Comment construire une stratégie de contenu efficace ?",
      answer: "Pour construire une stratégie de contenu efficace, identifiez vos personas d'acheteurs, effectuez une recherche de mots-clés, et créez un calendrier de publication. L'intégration de l'optimisation Digital Marketing dans votre contenu est essentielle."
  },
  {
      question: "Qu'est-ce que le Digital Marketing on-page et off-page ?",
      answer: "Le Digital Marketing on-page concerne l'optimisation des éléments sur votre site, comme les titres et le contenu. Le Digital Marketing off-page, quant à lui, renvoie aux actions effectuées à l'extérieur de votre site, comme le netlinking et les mentions sur les réseaux sociaux."
  },
  {
      question: "Comment gérer le suivi du positionnement des mots-clés ?",
      answer: "Utilisez des outils de suivi des mots-clés comme SEMrush ou Ahrefs pour surveiller votre positionnement des mots-clés dans les résultats de recherche. Cela permet d'ajuster votre stratégie en fonction des performances."
  },
  {
      question: "Comment améliorer le taux de clics (CTR) ?",
      answer: "Améliorez le CTR en rédigeant des titres accrocheurs, en optimisant les méta-descriptions et en utilisant des valeurs attrayantes dans vos balises. Cela attire plus de clics vers votre site à partir des résultats de recherche."
  },
  {
      question: "Quelle est l'importance de l'expérience mobile pour le Digital Marketing ?",
      answer: "Avec un nombre croissant d'utilisateurs accédant à Internet via des appareils mobiles, Google donne la priorité aux sites optimisés pour mobile. Cela améliore la capacité de votre site à être trouvé et utilisé efficacement sur mobile."
  },
  {
      question: "Quelles fonctionnalités Digital Marketing essentielles devez-vous considérer dans WordPress ?",
      answer: "Les fonctionnalités essentielles incluent des plugins comme Yoast Digital Marketing, des URL propres, l'optimisation des images, et l'utilisation de balisage schema. L'accompagnement par un freelance Digital Marketing sur WordPress peut maximiser votre optimisation."
  },
  {
      question: "Comment prendre en compte le Digital Marketing technique dans le développement ?",
      answer: "Le Digital Marketing technique implique l'optimisation de la performance, la sécurité du site, la facilitation de l'indexation, et l'amélioration de l'expérience utilisateur. Collaborer avec un expert freelance dès les premiers stades de développement est crucial."
  },
  {
      question: "Comment analyser la concurrence pour le Digital Marketing ?",
      answer: "Utilisez des outils d'analyse de concurrence pour examiner leurs backlinks, leurs mots-clés, et leur contenu. Cela vous aidera à identifier des opportunités et à ajuster votre stratégie Digital Marketing en conséquence."
  }
];


const FAQSection = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    return (
        <section>
            <SectionTitle>
                <HelpCircle />
                Questions Fréquentes
            </SectionTitle>
            <SectionSubtitle>
                Tout ce que vous devez savoir sur nos services Digital Marketing
            </SectionSubtitle>
            <FAQContainer>
                {faqData.map((faq, index) => (
                    <FAQItem key={index}>
                        <FAQQuestion
                            onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                            isOpen={openFaqIndex === index}
                        >
                            {faq.question}
                            <ChevronDown size={20} />
                        </FAQQuestion>
                        <FAQAnswer isOpen={openFaqIndex === index}>
                            {faq.answer}
                        </FAQAnswer>
                    </FAQItem>
                ))}
            </FAQContainer>
        </section>
    );
};

export default FAQSection; 