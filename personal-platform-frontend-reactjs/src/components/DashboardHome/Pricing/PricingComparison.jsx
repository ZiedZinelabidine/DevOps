import { Check } from 'lucide-react';
import React from 'react';
import styled from 'styled-components';

const ComparisonContainer = styled.div`
  margin-top: 3rem;
  overflow-x: auto;
  border-radius: 12px;
  border: 1px solid rgba(16, 185, 129, 0.1);
  background: rgba(16, 185, 129, 0.05);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;
`;

const Th = styled.th`
  padding: 1.5rem;
  text-align: left;
  border-bottom: 1px solid rgba(16, 185, 129, 0.1);
  color: #ffffff;
  font-weight: 600;
  
  &:not(:first-child) {
    text-align: center;
  }
`;

const Td = styled.td`
  padding: 1.5rem;
  border-bottom: 1px solid rgba(16, 185, 129, 0.1);
  color: #94A3B8;

  &:not(:first-child) {
    text-align: center;
    color: ${props => props.included ? '#10B981' : '#94A3B8'};
  }

  svg {
    color: #10B981;
  }
`;

const FeatureGroup = styled.tr`
  background: rgba(16, 185, 129, 0.1);

  td {
    font-weight: 600;
    color: #ffffff;
    padding: 1rem 1.5rem;
  }
`;

const features = [
    {
        group: "Audit & Analyse",
        items: [
            { name: "Audit SEO technique", essential: true, business: true, enterprise: true },
            { name: "Analyse de la concurrence", essential: "Basique", business: "Avancée", enterprise: "Complète" },
            { name: "Rapport d'audit détaillé", essential: true, business: true, enterprise: true }
        ]
    },
    {
        group: "Optimisation On-Page",
        items: [
            { name: "Optimisation des balises meta", essential: "10 pages", business: "25 pages", enterprise: "Illimité" },
            { name: "Optimisation du contenu", essential: "5 pages", business: "15 pages", enterprise: "Illimité" },
            { name: "Optimisation des images", essential: true, business: true, enterprise: true }
        ]
    },
    {
        group: "Contenu & Mots-clés",
        items: [
            { name: "Recherche de mots-clés", essential: "50 mots-clés", business: "200 mots-clés", enterprise: "Illimité" },
            { name: "Stratégie de contenu", essential: false, business: true, enterprise: true },
            { name: "Création de contenu", essential: false, business: "2/mois", enterprise: "Sur mesure" }
        ]
    },
    {
        group: "Support & Suivi",
        items: [
            { name: "Support technique", essential: "Email", business: "24/7", enterprise: "Dédié" },
            { name: "Rapports de performance", essential: "Mensuel", business: "Hebdomadaire", enterprise: "Sur demande" },
            { name: "Réunions de suivi", essential: "Trimestriel", business: "Mensuel", enterprise: "Hebdomadaire" }
        ]
    }
];

const PricingComparison = () => {
    return (
        <ComparisonContainer>
            <Table>
                <thead>
                    <tr>
                        <Th>Fonctionnalités</Th>
                        <Th>Essentiel</Th>
                        <Th>Business</Th>
                        <Th>Enterprise</Th>
                    </tr>
                </thead>
                <tbody>
                    {features.map((group, groupIndex) => (
                        <React.Fragment key={groupIndex}>
                            <FeatureGroup>
                                <td colSpan="4">{group.group}</td>
                            </FeatureGroup>
                            {group.items.map((feature, index) => (
                                <tr key={index}>
                                    <Td>{feature.name}</Td>
                                    <Td included={feature.essential}>
                                        {typeof feature.essential === 'boolean' ?
                                            (feature.essential ? <Check size={20} /> : '—') :
                                            feature.essential}
                                    </Td>
                                    <Td included={feature.business}>
                                        {typeof feature.business === 'boolean' ?
                                            (feature.business ? <Check size={20} /> : '—') :
                                            feature.business}
                                    </Td>
                                    <Td included={feature.enterprise}>
                                        {typeof feature.enterprise === 'boolean' ?
                                            (feature.enterprise ? <Check size={20} /> : '—') :
                                            feature.enterprise}
                                    </Td>
                                </tr>
                            ))}
                        </React.Fragment>
                    ))}
                </tbody>
            </Table>
        </ComparisonContainer>
    );
};

export default PricingComparison; 