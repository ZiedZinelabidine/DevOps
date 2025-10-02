import React, { useState } from 'react';
import { Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 1rem;
  background-color: ${props => props.theme.colors.background.secondary};

  @media (min-width: 768px) {
    padding: 6rem 1rem;
  }
`;


const FAQSection = styled(Section)`
  background: #111827;
`;

const FAQContainer = styled.div`
  max-width: 50%;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  border: 1px solid #374151;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
  overflow: hidden;
  background: #1f2937;
  transition: all 0.3s ease;

  &:hover {
    border-color: #FF9900;
;
  }
`;

const FAQHeader = styled.h2`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
`;

const FAQContent = styled.div`
  padding: 0 1rem 1rem 1rem;
  color: #d1d5db;
  line-height: 1.6;
`;

const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  color:  white;
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const SectionContent = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;


const FAQ = () => {
 const [openFAQs, setOpenFAQs] = useState({});


  const toggleFAQ = (index) => {
    setOpenFAQs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqItems = [
    {
      question: "Qu'est-ce que l'infogérance de serveurs ?",
      answer: "L'infogérance de serveurs est un service qui consiste à confier la gestion complète de vos serveurs à une entreprise spécialisée. Cela inclut la maintenance, les mises à jour, la sécurisation, la surveillance et l'optimisation de vos serveurs physiques ou virtuels."
    },
    {
      question: "Quels types de serveurs gérez-vous ?",
      answer: "Nous gérons tous types de serveurs : serveurs physiques dédiés, serveurs virtuels (VPS), serveurs cloud, serveurs d'applications (web, mail, base de données), serveurs Windows, Linux et plus encore."
    },
    {
      question: "Comment assurez-vous la sécurité de nos données ?",
      answer: "Nous mettons en place plusieurs niveaux de sécurité : pare-feu de nouvelle génération, protection DDoS, systèmes de détection d'intrusion, antivirus/antimalware, mises à jour de sécurité régulières, surveillance 24/7, audits de sécurité périodiques et sauvegardes chiffrées."
    },
    {
      question: "Quelle est votre garantie de temps de disponibilité (SLA) ?",
      answer: "Nous garantissons un SLA de 99,9% de disponibilité pour tous nos services d'hébergement. Pour les plans Business et Enterprise, nous proposons des SLA encore plus élevés, jusqu'à 99,99%."
    },
    {
      question: "Comment fonctionne votre service de support ?",
      answer: "Notre support technique est disponible par email, téléphone et ticket selon votre forfait. Les clients Enterprise bénéficient d'un support prioritaire 24/7 avec un temps de réponse garanti inférieur à 1 heure et un ingénieur dédié."
    },
    {
      question: "Puis-je migrer mon infrastructure existante vers vos services ?",
      answer: "Absolument. Nous offrons un service de migration complet et sans interruption de service. Nos experts analyseront votre infrastructure actuelle et planifieront une migration progressive pour minimiser tout impact sur votre activité."
    },
    {
      question: "Proposez-vous des solutions de reprise après sinistre ?",
      answer: "Oui, nous proposons des plans de reprise d'activité (PRA) personnalisés qui incluent des sauvegardes régulières, la réplication de données sur des sites distants, et des procédures de restauration rapide en cas d'incident."
    },
    {
      question: "Comment sont facturés vos services ?",
      answer: "Nos services sont disponibles sous forme d'abonnements mensuels ou annuels avec des tarifs préférentiels pour les engagements annuels. Nous proposons également des formules personnalisées selon vos besoins spécifiques."
    },
    {
      question: "Quelle est la différence entre un serveur dédié et un VPS ?",
      answer: "Un serveur dédié offre des ressources physiques complètes à un seul client, alors qu'un VPS partage les ressources d'un serveur physique entre plusieurs utilisateurs, offrant un coût réduit et une plus grande flexibilité."
    },
    {
      question: "Est-ce que vous offrez une assistance pour le déploiement d'applications ?",
      answer: "Oui, nous fournissons une assistance complète lors du déploiement d'applications, de la configuration de l'environnement à l'intégration de la base de données."
    },
    {
      question: "Comment gérez-vous les mises à jour de sécurité ?",
      answer: "Nous appliquons régulièrement des mises à jour de sécurité et des patches pour garantir que votre système est protégé contre les dernières vulnérabilités."
    },
    {
      question: "Quelles mesures sont prises contre les attaques DDoS ?",
      answer: "Nous utilisons des solutions de protection DDoS avancées qui filtrent le trafic malveillant et maintiennent la disponibilité de votre serveur durant les attaques."
    },
    {
      question: "Offrez-vous des backups réguliers de nos données ?",
      answer: "Oui, des sauvegardes régulières de vos données sont effectuées automatiquement et stockées en toute sécurité pour permettre une récupération rapide en cas de besoin."
    },
    {
      question: "Comment fonctionne la surveillance de serveur ?",
      answer: "Nous surveillons 24/7 l'état de vos serveurs et alertons immédiatement les clients en cas de problème, pour garantir une intervention rapide."
    },
    {
      question: "Proposez-vous des solutions d'hébergement évolutives ?",
      answer: "Oui, nous offrons des solutions d'hébergement évolutives permettant d'ajuster facilement les ressources en fonction de l'évolution de vos besoins."
    },
    {
      question: "Quelles sont vos politiques en matière de confidentialité des données ?",
      answer: "Nous prenons la confidentialité des données très au sérieux. Toutes les données sont traitées conformément aux réglementations en vigueur, et nous avons mis en place des mesures strictes pour assurer leur sécurité."
    },
    {
      question: "Qu'est-ce qu'un certificat SSL et pourquoi en ai-je besoin ?",
      answer: "Un certificat SSL chiffre les données échangées entre votre serveur et les utilisateurs, protégeant ainsi les informations sensibles. C'est essentiel pour sécuriser les échanges sur votre site et instaurer la confiance avec vos utilisateurs."
    },
    {
      question: "Comment se passe le processus de sauvegarde ?",
      answer: "Nos sauvegardes sont automatisées et se font à intervalles réguliers. Les données sont stockées de manière sécurisée sur des serveurs distants pour éviter toute perte de données en cas d'incident."
    },
    {
      question: "Proposez-vous du stockage en cloud ?",
      answer: "Oui, nous offrons des solutions de stockage en cloud hautement sécurisées et évolutives, adaptées à la sauvegarde et à l'accès rapide aux données."
    },
    {
      question: "Comment gérez-vous la maintenance de mes serveurs ?",
      answer: "Nous effectuons régulièrement des analyses de santé des serveurs et appliquons des mises à jour de maintenance planifiées pour garantir des performances optimales."
    },
    {
      question: "Que faire si j'ai besoin d'une assistance technique immédiate ?",
      answer: "Notre équipe de support technique est disponible 24/7. Utilisez le canal de communication que vous avez choisi, et nous nous engageons à répondre rapidement."
    },
    {
      question: "Comment se passe la gestion des logs sur mes serveurs ?",
      answer: "Nous mettons en place des solutions de gestion de logs qui collectent, analysent et stockent vos logs de serveur. Cela facilite le monitoring et le dépannage."
    },
    {
      question: "Proposez-vous des solutions d'hébergement pour de grandes entreprises ?",
      answer: "Oui, nous disposons de solutions d'hébergement robustes spécifiquement conçues pour les grandes entreprises, avec un support dédié et des niveaux de service personnalisés."
    },
    {
      question: "Comment assurez-vous la latence minimale pour mes applications ?",
      answer: "Nous utilisons des infrastructures optimales et des CDN pour réduire la latence, en plaçant vos serveurs géographiquement près de vos utilisateurs finaux."
    },
    {
      question: "Qu'est-ce qu'un site miroir et pourquoi en aurais-je besoin ?",
      answer: "Un site miroir est une copie exacte de votre site, utilisée pour améliorer la disponibilité et la vitesse d'accès. C'est particulièrement utile pour la redondance et en cas de défaillance du serveur principal."
    },
    {
      question: "Comment gérez-vous les incidents critiques ?",
      answer: "Nous disposons de protocoles d'intervention d'incidents bien établis, y compris des notifications en temps réel aux clients et des plans de récupération d'urgence pour minimiser les interruptions."
    },
    { 
      question: "Puis-je choisir le système d'exploitation de mon serveur ?",
      answer: "Oui, vous pouvez choisir le système d'exploitation qui convient le mieux à vos besoins, que ce soit Windows, Linux ou d'autres distributions. Nous supportons plusieurs environnements."
    },
    {
      question: "Est-ce que le service d'infogérance inclut la gestion des applications ?",
      answer: "Oui, notre service d'infogérance peut inclure la gestion des applications, en veillant à ce qu'elles fonctionnent de manière fluide sur vos serveurs."
    },
    {
      question: "Quels outils de gestion utilisez-vous pour surveiller mes serveurs ?",
      answer: "Nous utilisons des outils de surveillance avancés comme Nagios, Zabbix ou Prometheus, qui nous aident à maintenir une vue d'ensemble de la santé et de la performance de vos serveurs."
    },
    {
      question: "Puis-je tester vos services avant de m'engager ?",
      answer: "Oui, nous proposons souvent des essais gratuits ou des démonstrations de nos services. Contactez-nous pour vérifier les disponibilités."
    },
    {
      question: "Quelles options d'optimisation des coûts offrez-vous ?",
      answer: "Nous proposons des solutions d'hébergement flexibles et personnalisables, permettant aux clients de ne payer que pour les ressources dont ils ont besoin, ainsi que des réductions pour les engagements à long terme."
    },
    {
      question: "Comment vous assurez-vous de rester à jour avec les meilleures pratiques ?",
      answer: "Notre équipe suit régulièrement des formations et des certifications sur les dernières technologies et normes de l'industrie. Nous participons également à des conférences et à des forums spécialisés pour rester au courant des meilleures pratiques et des nouvelles tendances."
    }
];

  const TEXTS = {
    header: {
      title: "Infogérance Hébergement"
    },
  }
  
  return (
    <FAQSection>
    <SectionContent>
      <SectionTitle>
      FAQ : {TEXTS.header.title}
      </SectionTitle>
      <FAQContainer>
        {faqItems.map((faq, index) => (
          <FAQItem key={index}>
            <FAQHeader onClick={() => toggleFAQ(index)}>
              {faq.question}
              {openFAQs[index] ? <Minus size={20} /> : <Plus size={20} />}
            </FAQHeader>
            {openFAQs[index] && (
              <FAQContent>
                {faq.answer.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </FAQContent>
            )}
          </FAQItem>
        ))}
      </FAQContainer>
    </SectionContent>
  </FAQSection>
  );
};

export default FAQ;