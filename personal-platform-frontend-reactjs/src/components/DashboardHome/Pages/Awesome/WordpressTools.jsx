import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Search, ChevronDown, ExternalLink, Github, Code, Palette, Package } from 'lucide-react';
import { Helmet } from 'react-helmet';
import Offers from '../Offres';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem;
  animation: ${fadeIn} 0.5s ease-out;
  background: black;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  padding: 4rem 0;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(45deg, #1a1a1a, transparent);
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  background: linear-gradient(120deg, #4a9eff, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  color: #e0e0e0;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: 2rem auto;
  background: rgba(30, 30, 30, 0.8);
  border: 1px solid #333;
  border-radius: 12px;
  padding: 0.75rem 1.5rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:focus-within {
    border-color: #4a9eff;
    box-shadow: 0 4px 20px rgba(74, 158, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  padding: 0.5rem;
  font-size: 1.1rem;
  background: none;
  outline: none;
  color: #fff;

  &::placeholder {
    color: #888;
  }
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const Section = styled.section`
  background: #1e1e1e;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #4a9eff, #a855f7);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const SectionTitle = styled.h2`
  color: #fff;
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #4a9eff;
  }

  svg {
    animation: ${float} 3s ease-in-out infinite;
  }
`;

const ResourceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ResourceItem = styled.li`
  margin-bottom: 1rem;
  padding: 1.25rem;
  border-radius: 12px;
  background: #252525;
  transition: all 0.3s ease;
  border: 1px solid #333;

  &:hover {
    background: #2a2a2a;
    transform: translateX(8px);
    border-color: #4a9eff;
  }
`;

const ResourceLink = styled.a`
  color: #4a9eff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 500;
  font-size: 1.1rem;

  &:hover {
    color: #66b0ff;
  }

  svg {
    opacity: 0.8;
    transition: all 0.3s ease;
  }

  &:hover svg {
    opacity: 1;
    transform: translateX(4px);
  }
`;

const ResourceDescription = styled.p`
  color: #a0a0a0;
  margin-top: 0.75rem;
  font-size: 0.95rem;
  line-height: 1.6;
  position: relative;
  padding-left: 1rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 3px;
    height: calc(100% - 1rem);
    background: #333;
    border-radius: 3px;
  }
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 4rem;
  padding: 2rem;
  background: #1e1e1e;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  a {
    color: #4a9eff;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 500;
    transition: all 0.3s ease;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    background: rgba(74, 158, 255, 0.1);

    &:hover {
      background: rgba(74, 158, 255, 0.2);
      transform: translateY(-2px);
    }
  }
`;

const getCategoryIcon = (category) => {
  switch (category) {
    case 'core':
      return <Code size={24} />;
    case 'themes':
      return <Palette size={24} />;
    case 'plugins':
      return <Package size={24} />;
    default:
      return <Code size={24} />;
  }
};

const OffreCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: rgba(30, 41, 59, 0.5);
  border-radius: 1rem;
  border: 1px solid rgba(99, 102, 241, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(99, 102, 241, 0.4);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;



function WordpressTools() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState({
    core: true,
    themes: true,
    plugins: true,
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const resources = {
    core: [
        {
            title: 'WordPress on GitHub',
            url: 'https://github.com/WordPress/WordPress',
            description: 'WordPress, transformé en Git. Synchronisé via SVN toutes les 15 minutes, incluant branches et tags !'
          },
          {
            title: 'Standards de Codage WordPress',
            url: 'https://make.wordpress.org/core/handbook/coding-standards/',
            description: 'Le but des Standards de Codage WordPress est de créer une base pour la collaboration et la relecture dans les différents aspects du projet open-source WordPress, du code central aux thèmes et plugins.'
          },
          {
            title: 'L\'API Customizer',
            url: 'https://developer.wordpress.org/themes/advanced-topics/customizer-api/',
            description: 'Le Customizer est un cadre pour prévisualiser en direct toute modification de WordPress. Il offre une interface simple et cohérente pour les utilisateurs qui personnalisent divers aspects de leur thème et site, des couleurs et mises en page aux widgets, menus, et plus.'
          },
          {
            title: 'Tests Automatisés',
            url: 'https://make.wordpress.org/core/handbook/automated-testing/',
            description: 'Vue d\'ensemble de l\'exécution et de l\'écriture des tests pour WordPress. Les tests automatisés exécutent des cas de tests sans nécessiter d\'intervention manuelle.'
          },
    ],
    themes: [
        {
            title: '_S',
            url: 'https://github.com/automattic/_s',
            description: 'Un thème de démarrage appelé _s, ou underscores, conçu pour être modifié. Il ne doit pas être utilisé comme Thème Parent.'
          },
          {
            title: 'Bones',
            url: 'http://themble.com/bones/',
            description: 'Un thème de démarrage HTML5, orienté mobile, pour le développement rapide de WordPress.'
          },
          {
            title: 'Sage',
            url: 'https://roots.io/sage/',
            description: 'Sage est un thème de démarrage WordPress basé sur HTML5 Boilerplate, gulp, Bower, et Bootstrap, vous aidant à créer de meilleurs thèmes.'
          },
          {
            title: 'WordPlate',
            url: 'https://wordplate.github.io/',
            description: 'WordPlate cherche à simplifier les complexités du développement WordPress.'
          },
          {
            title: 'WP MVC',
            url: 'http://wpmvc.org/',
            description: 'WP MVC est un cadre MVC complet pour un développement WordPress plus rapide et élégant.'
          },
          {
            title: 'CherryFramework',
            url: 'https://github.com/CherryFramework/CherryFramework',
            description: 'Un cadre de conception réactif avec installation facile, mises à jour régulières, et intégration des fonctions Bootstrap.'
          },
          {
            title: 'Gantry Framework',
            url: 'https://github.com/gantry/gantry5',
            description: 'Un cadre de thème de nouvelle génération par RocketTheme, consolidant la fonctionnalité pour les modèles Joomla et WordPress.'
          },
          {
            title: 'Runway Framework',
            url: 'https://github.com/parallelus/Runway-Framework',
            description: 'Une meilleure manière de créer des thèmes WordPress, englobant les significations classiques et modernes de "cadre de thème".'
          },
          {
            title: 'Kirki',
            url: 'http://kirki.org/',
            description: 'Kirki est une boîte à outils qui simplifie l\'utilisation du Customizer WordPress pour les développeurs.'
          },
          {
            title: 'Thème Wp Developer',
            url: 'https://github.com/heitorspedroso/wp-developer-theme',
            description: 'Un thème développé pour être un outil rapide entre les mains du développeur, avec une structure de fichiers prédéfinie.'
          },
          {
            title: 'HTML5 Blank',
            url: 'http://html5blank.com/',
            description: 'Le thème HTML5 boilerplate WordPress, offrant une base propre pour le développement de thèmes.'
          },
          {
            title: 'Odin WP',
            url: 'http://wpod.in/',
            description: 'Un thème de base développé par le groupe WordPress Brasil pour aider au développement agile de thèmes.'
          },
          {
            title: 'Landing Pages',
            url: 'https://wordpress.org/support/plugin/landing-pages/',
            description: 'Un cadre pour la création de présentations sur une seule page avec des capacités de test A/B.'
          },

          {
            title: 'create-wp-react-app',
            url: 'https://github.com/matzeeable/wp-reactjs-starter',
            description: 'WordPress CLI pour générer votre prochain plugin moderne avec la puissance de REST API, webpack, babel, MobX et MobX State Tree.'
          },
          {
            title: 'Create Guten Block',
            url: 'https://github.com/ahmadawais/create-guten-block',
            description: 'Un outil sans configuration pour créer des plugins de blocs Gutenberg.'
          },
          {
            title: 'Titan Framework',
            url: 'https://github.com/gambitph/Titan-Framework',
            description: 'Un cadre d\'options facile à utiliser permettant aux développeurs de créer des pages d\'administration, des options, des méta-boîtes et des options de personnalisation de thème.'
        },
    ],
    plugins: [
        {
            title: 'Redirection',
            url: 'https://wordpress.org/plugins/redirection/',
            description: 'Plugin WordPress pour gérer les redirections 301 et suivre les erreurs 404 sans nécessiter de connaissances sur les fichiers .htaccess d\'Apache.'
          },
          {
            title: 'Yoast SEO',
            url: 'https://wordpress.org/plugins/wordpress-seo/',
            description: 'Améliorez le SEO de votre WordPress : rédigez un meilleur contenu et ayez un site WordPress entièrement optimisé en utilisant le plugin Yoast SEO.'
          },
          {
            title: 'Broken Link Checker',
            url: 'https://wordpress.org/plugins/broken-link-checker/',
            description: 'Ce plugin surveillera votre blog à la recherche de liens cassés et vous informera s\'il en trouve.'
          },
          {
            title: 'Theme Check',
            url: 'https://wordpress.org/plugins/theme-check/',
            description: 'Le plugin theme check est un moyen facile de tester votre thème et de vous assurer qu\'il respecte les dernières normes de révision.'
          },
          {
            title: 'Query Monitor',
            url: 'https://wordpress.org/plugins/query-monitor/',
            description: 'Query Monitor est un panneau d\'outils de développeur pour WordPress. Il vous permet de déboguer les requêtes de base de données, les erreurs PHP, les hooks et actions.'
          },
          {
            title: 'Posts 2 Posts',
            url: 'https://wordpress.org/plugins/posts-to-posts/',
            description: 'Connecte de manière efficace plusieurs connexions entre des publications, pages, types de publication personnalisés et utilisateurs.'
          },
          {
            title: 'TGM Plugin Activation',
            url: 'https://tgmpluginactivation.com/',
            description: 'TGM Plugin Activation est une bibliothèque PHP permettant de requérir ou de recommander facilement des plugins pour vos thèmes WordPress.'
          },
          {
            title: 'Revisr',
            url: 'https://wordpress.org/plugins/revisr/',
            description: 'Revisr vous permet de gérer votre site WordPress avec un dépôt Git.'
          },
          {
            title: 'Debug Bar',
            url: 'http://wordpress.org/plugins/debug-bar/',
            description: 'Ajoute un menu de débogage à la barre d\'administration qui affiche des informations sur les requêtes, le cache et d\'autres informations utiles pour le débogage.'
          },
          {
            title: 'Debug Bar Extender',
            url: 'http://wordpress.org/plugins/debug-bar-extender/',
            description: 'Étend le plugin debug-bar avec des onglets supplémentaires pour mesurer les temps d\'exécution entre les points de contrôle et examiner le contenu des variables.'
          },
          {
            title: 'WP Rollback',
            url: 'https://wordpress.org/plugins/wp-rollback/screenshots/',
            description: 'Rollback (ou avancer) tout plugin ou thème WordPress.org comme un pro.'
          },
          {
            title: 'Members',
            url: 'https://wordpress.org/plugins/members/',
            description: 'Members est un plugin qui étend votre contrôle sur votre blog. C\'est un plugin de gestion des utilisateurs, des rôles et du contenu.'
          },
          {
            title: 'GitHub Updater',
            url: 'https://github.com/afragen/github-updater',
            description: 'Un plugin simple pour activer les mises à jour automatiques de vos plugins et thèmes WordPress hébergés sur GitHub, Bitbucket ou GitLab.'
          },
          {
            title: 'Rewrite Rules Inspector',
            url: 'https://wordpress.org/plugins/rewrite-rules-inspector/',
            description: 'Un outil d\'administration WordPress pour inspecter vos règles de réécriture et effectuer un soft flush de celles-ci.'
          },
          {
            title: 'CMB2',
            url: 'https://wordpress.org/plugins/cmb2/',
            description: 'CMB2 est une bibliothèque de méta-boîtes, champs personnalisés et formulaires pour WordPress.'
          },
          {
            title: 'Ship',
            url: 'http://ship.getherbert.com/',
            description: 'Taguez une version sur GitHub et envoyez-la automatiquement au SVN de WordPress.org pour plugins.'
          },
          {
            title: 'Simply Show Hooks',
            url: 'https://wordpress.org/plugins/simply-show-hooks/',
            description: 'Simply Show Hooks aide les développeurs de thèmes et de plugins à voir rapidement où se trouvent tous les hooks d\'action et de filtre sur une page WordPress.'
          },
          {
            title: 'WP Inspect',
            url: 'https://wordpress.org/plugins/wp-inspect/',
            description: 'Le plugin WP Inspect annotera visuellement les pages avec les actions et filtres (hooks) invoqués pendant le cycle de vie de la requête.'
          },
          {
            title: 'Timber',
            url: 'https://github.com/timber/timber',
            description: 'Ajoutez des fonctionnalités de templating Twig à votre thème et séparez votre code de modèle de PHP.'
          },
          {
            title: 'Child Theme Check',
            url: 'https://wordpress.org/plugins/child-theme-check/',
            description: 'Vous avertit des fichiers de modèle obsolètes dans votre thème enfant et montre une vue de diff des modifications entre le modèle parent et enfant.'
          },
          {
            title: 'One-Click Child Theme',
            url: 'https://wordpress.org/plugins/one-click-child-theme/',
            description: 'Ajoute une option de thème à tout thème actif vous permettant de créer un thème enfant.'
          },
          {
            title: 'Custom Post Type UI',
            url: 'https://wordpress.org/plugins/custom-post-type-ui/',
            description: 'Custom Post Type UI fournit une interface facile à utiliser pour enregistrer et gérer des types de publication personnalisés et des taxonomies.'
          },
          {
            title: 'Toolset Types',
            url: 'https://wordpress.org/plugins/types/',
            description: 'Toolset Types vous permet d\'ajouter des types de publication personnalisés, des champs personnalisés et des taxonomies personnalisées à l\'administration WordPress.'
          },
          {
            title: 'Pods',
            url: 'https://wordpress.org/plugins/pods/',
            description: 'Gérez tous vos besoins de contenu personnalisé à un seul endroit avec le Pods Framework.'
          },
          {
            title: 'WordPress Creation Kit',
            url: 'https://wordpress.org/plugins/wck-custom-fields-and-custom-post-types-creator/',
            description: 'WordPress Creation Kit consiste en trois outils qui vous aident à créer et à gérer des types de publication personnalisés, des taxonomies et des champs personnalisés.'
          },
          {
            title: 'Create Guten Block',
            url: 'https://github.com/ahmadawais/create-guten-block',
            description: 'Un outil sans configuration pour créer des plugins de blocs Gutenberg.'
          },
          {
            title: 'Gutenberg Custom Fields',
            url: 'https://github.com/youknowriad/gcf',
            description: 'Plugin pour créer des champs personnalisés dans Gutenberg.'
          },
          {
            title: 'Gutenberg Examples',
            url: 'https://github.com/WordPress/gutenberg-examples',
            description: 'Exemples officiels de blocs de WordPress.'
          },
          {
            title: 'Gutenberg Handbook',
            url: 'https://wordpress.org/gutenberg/handbook/',
            description: 'Vue d\'ensemble officielle de Gutenberg, le nouvel éditeur de WordPress.'
          },
          {
            title: 'Gutenberg Migration Guide',
            url: 'https://github.com/danielbachhuber/gutenberg-migration-guide',
            description: 'Un guide pour les développeurs WP afin de migrer leurs thèmes et plugins vers Gutenberg en présentant les équivalents de Gutenberg.'
          },
          {
            title: 'Gutenblock',
            url: 'https://github.com/crossfield/gutenblock',
            description: 'Un autre outil pour créer des plugins de blocs.'
          },
          {
            title: 'Shortcake',
            url: 'https://wordpress.org/plugins/shortcode-ui/',
            description: 'Utilisé avec add_shortcode, Shortcake fournit une interface conviviale pour ajouter un shortcode à un article et le visualiser et l\'éditer depuis l\'éditeur de contenu.'
          },
          {
            title: 'Gutenberg',
            url: 'https://wordpress.org/plugins/gutenberg/',
            description: 'La nouvelle expérience de création d\'articles et de pages facilite l\'écriture d\'articles riches.'
          },
          {
            title: 'Regenerate Thumbnails',
            url: 'https://wordpress.org/plugins/regenerate-thumbnails/',
            description: 'Ce plugin vous permet de régénérer les vignettes pour vos pièces jointes d\'image. Très utile si vous avez changé les dimensions de vos vignettes.'
          },
          {
            title: 'Enable Media Replace',
            url: 'https://wordpress.org/plugins/enable-media-replace/',
            description: 'Permet de remplacer les fichiers joints en téléchargeant simplement un nouveau fichier dans la vue d\'édition de la bibliothèque multimédia.'
          },
          {
            title: 'Multiple Post Thumbnails',
            url: 'https://wordpress.org/plugins/multiple-post-thumbnails/',
            description: 'Ajoute plusieurs vignettes de publication à un type de publication.'
          },
          {
            title: 'Media from FTP',
            url: 'https://wordpress.org/plugins/media-from-ftp/',
            description: 'Inscrit dans la bibliothèque multimédia des fichiers qui ont été téléchargés par FTP.'
          },
          {
            title: 'WP Tiles',
            url: 'https://wordpress.org/plugins/wp-tiles/',
            description: 'Ajoute des tuiles de publication entièrement personnalisables ou des galeries carrelées n\'importe où sur votre site WordPress facilement.'
          },
          {
            title: 'Wanna Isotope',
            url: 'https://wordpress.org/plugins/wanna-isotope/',
            description: 'Un plugin pour créer facilement des mises en page Isotope/Masonry avec n\'importe quel contenu.'
          },
          {
            title: 'Polaroid Gallery',
            url: 'https://wordpress.org/plugins/polaroid-gallery/',
            description: 'Polaroid Gallery est un plugin pour la galerie d\'images utilisant CSS3 et jQuery pour créer des effets de polaroid.'
          },
          {
            title: 'Fly Dynamic Image Resizer',
            url: 'https://wordpress.org/plugins/fly-dynamic-image-resizer/',
            description: 'Réduit l\'espace disque et le temps de téléchargement en générant des images dans des tailles personnalisées dynamiquement.'
          },
          {
            title: 'Sirv Image CDN',
            url: 'https://wordpress.org/plugins/sirv/',
            description: 'Optimisez et redimensionnez les images dynamiquement avec le CDN d\'images de Sirv.'
          }
    ]
  };

  return (

    <>
       <Helmet>
        <title>
              {`Tools WordPress | Experts & Freelances  | ItGalaxy.io `}
         </title>
        <meta
           name="description"
           content={` Une liste organisée de ressources WordPress, de thèmes, de plugins et de choses brillantes incroyablement impressionnants .`}
         />
     </Helmet>
    <Container>
      <Header>
        <Title>Tools WordPress</Title>
        <Description>
        Une liste organisée de ressources WordPress, de thèmes, de plugins et de choses brillantes incroyablement impressionnants .
        </Description>
        <SearchBar>
          <Search size={20} color="#888" />
          <SearchInput
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBar>
      </Header>

      <CategoryGrid>
        {Object.entries(resources).map(([category, items]) => (
          <Section key={category}>
            <SectionTitle onClick={() => toggleSection(category)}>
              {getCategoryIcon(category)}
              {category.charAt(0).toUpperCase() + category.slice(1)}
              <ChevronDown
                size={20}
                style={{
                  transform: expandedSections[category] ? 'rotate(-180deg)' : 'none',
                  transition: 'transform 0.3s ease'
                }}
              />
            </SectionTitle>
            
            {expandedSections[category] && (
              <ResourceList>
                {items
                  .filter(item => 
                    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.description.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((item, index) => (
                    <ResourceItem key={index}>
                      <ResourceLink href={item.url} target="_blank" rel="noopener noreferrer">
                        {item.title}
                        <ExternalLink size={16} />
                      </ResourceLink>
                      <ResourceDescription>{item.description}</ResourceDescription>
                    </ResourceItem>
                  ))}
              </ResourceList>
            )}
          </Section>
        ))}
      </CategoryGrid>
    </Container>
     <OffreCard> 
        <Offers />
      </OffreCard>
    </>
  );
}

export default WordpressTools;