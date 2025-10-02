import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FooterHome from '../../components/DashboardHome/FooterHome/FooterHome';
import Header from '../../components/Header/Header';
import BlogHelmet from './components/BlogHelmet';
import { freelanceITGuide2024 } from './data/posts/freelance-it-guide-2024';
import { EmailFreeGuide } from './data/posts/free-mail-entreprise';
import { WebSiteFreeGuide } from './data/posts/free-web-site-guide';



const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 200px); // Account for header and footer
  margin-bottom: 20%;
`;

const BlogHeader = styled.header`
  margin: 3rem 0;
  text-align: center;
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  color: #0077B5; // Using ItGalaxy blue color
  margin-bottom: 1.5rem;
  font-weight: 700;
`;

const BlogDescription = styled.p`
  color: #5e6d55;
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
`;

const BlogCard = styled(Link)`
  text-decoration: none;
  color: inherit;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const BlogCardContent = styled.div`
  padding: 1.5rem;
`;

const BlogCardCategory = styled.span`
  color: #0077B5; // Using ItGalaxy blue color
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  display: block;
`;

const BlogCardTitle = styled.h3`
  font-size: 1.3rem;
  margin: 0.75rem 0;
  color: #001e00;
  font-weight: 600;
  line-height: 1.4;
`;

const BlogCardDate = styled.span`
  color: #5e6d55;
  font-size: 0.9rem;
`;

const Blog = () => {
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: freelanceITGuide2024.title,
      category: freelanceITGuide2024.category,
      date: freelanceITGuide2024.date,
      image: freelanceITGuide2024.image,
      slug: freelanceITGuide2024.slug,
      description: freelanceITGuide2024.description
    },
    {
      id: 2,
      title: WebSiteFreeGuide.title,
      category: WebSiteFreeGuide.category,
      date: WebSiteFreeGuide.date,
      image: WebSiteFreeGuide.image,
      slug: WebSiteFreeGuide.slug,
      description: WebSiteFreeGuide.description
    },
    {
      id: 3,
      title: EmailFreeGuide.title,
      category: EmailFreeGuide.category,
      date: EmailFreeGuide.date,
      image: EmailFreeGuide.image,
      slug: EmailFreeGuide.slug,
      description: EmailFreeGuide.description
    },
    {
      id: 4,
      title: 'Introduction du Kubernetes',
      category: 'Cloud kubernetes',
      date: 'October 10, 2024',
      image: `${process.env.REACT_APP_CDN_ITGALAXY}/assets/blog/kubernetes-large.png`,
      slug: 'introduction-kubernetes',
      description: 'Premier pas avec kubernetes'
    },
    {
      id: 5,
      title: 'Mise en place du cluster Kubernetes sur AWS',
      category: 'Cloud kubernetes',
      date: 'Janvier 01, 2024',
      image: `${process.env.REACT_APP_CDN_ITGALAXY}/assets/blog/aws-k8s.jpeg`,
      slug: 'cluster-kubernetes',
      description: 'Mise en place du cluster kubernetes avec AWS et minikube'
    },
    {
      id: 6,
      title: 'Mise en place du cluster Kubernetes nodejs ',
      category: 'Cloud kubernetes',
      date: 'Janvier 10, 2024',
      image: `${process.env.REACT_APP_CDN_ITGALAXY}/assets/blog/k8s-nodejs.jpeg`,
      slug: 'deploiement-app-nodejs',
      description: 'Premiers pas sur Kubernetes avec une application NodeJs'
    },
    {
      id: 7,
      title: 'Déployer Wordpress sur kubernetes',
      category: 'Cloud kubernetes',
      date: 'Janvier 15, 2024',
      image: `${process.env.REACT_APP_CDN_ITGALAXY}/assets/blog/wordpress-k8s.png`,
      slug: 'wordpress-kubernetes',
      description: 'Wordpress pour la création de vos sites et de vos blog !!'
    },
    {
      id: 8,
      title: 'Mise en place du cluster elk',
      category: 'Cloud kubernetes',
      date: 'Janvier 16, 2025',
      image: `${process.env.REACT_APP_CDN_ITGALAXY}/assets/blog/elk.png`,
      slug: 'elk',
      description: 'Superviser votre site web avec ELK'
    },
    {
      id: 9,
      title: 'Mise en place du cluster grafana',
      category: 'Cloud kubernetes',
      date: 'Janvier 17, 2025',
      image: `${process.env.REACT_APP_CDN_ITGALAXY}/assets/blog/prom.png`,
      slug: 'prometheus',
      description: 'Superviser votre site web avec prometheus'
    },
    {
      id: 10,
      title: 'Introduction AWS Services',
      category: 'AWS Services présentation',
      date: 'Janvier 02, 2025',
      image: `${process.env.REACT_APP_CDN_ITGALAXY}/assets/blog/aws.jpeg`,
      slug: 'aws-introduction',
      description: 'Introduction des services AWS'
    },
    {
      id: 11,
      title: 'Formation AWS Services : IAM',
      category: 'AWS Services IAM',
      date: 'Janvier 19, 2025',
      image: `${process.env.REACT_APP_CDN_ITGALAXY}/assets/blog/aws-iam.png`,
      slug: 'aws-iam',
      description: 'Identiy and Access Management Service'
    },
    {
      id: 12,
      title: 'Formation AWS Services : EC2',
      category: 'AWS Services EC2',
      date: 'Janvier 13, 2025',
      image: `${process.env.REACT_APP_CDN_ITGALAXY}/assets/blog/aws-ec2.jpeg`,
      slug: 'aws-ec2',
      description: 'Déployez vos applications sur des serveurs Amazon'
    },
    {
      id: 13,
      title: 'Supervisez votre application avec AWS Services : CloudWatch',
      category: 'AWS Services CloudWatch',
      date: 'Janvier 18, 2025',
      image: `${process.env.REACT_APP_CDN_ITGALAXY}/assets/blog/aws-cloudwatch.jpeg`,
      slug: 'aws-cloudwatch',
      description: 'Supervisez votre site web avec CloudWatch'
    },
    {
      id: 14,
      title: 'Mise en place une base donnée sur amazon aws : RDS',
      category: 'AWS Services RDS',
      date: 'Décembre 10, 2024',
      image: `${process.env.REACT_APP_CDN_ITGALAXY}/assets/blog/aws-rds.jpg`,
      slug: 'aws-rds',
      description: 'Superviser votre site web avec prometheus'
    },
    {
      id: 15,
      title: 'Montez en compétence sur S3 : Simple Storage Service',
      category: 'AWS Services S3',
      date: 'Décembre 21, 2024',
      image: `${process.env.REACT_APP_CDN_ITGALAXY}/assets/blog/aws-s3-1.png`,
      slug: 'aws-s3',
      description: 'Utilisez le S3 pour stocker vos images'
    },
    {
      id: 16,
      title: 'Sécurisez votre sociéte avec un réseau privée : Virtual Private Service',
      category: 'AWS Services VPC',
      date: 'Décembre 25, 2024',
      image: `${process.env.REACT_APP_CDN_ITGALAXY}/assets/blog/aws-vpc.jpg`,
      slug: 'aws-vpc',
      description: 'Mise en place du reseau privé avec VPC'
    },
    {
      id: 17,
      title: 'Montez en compétence sur Lambda ',
      category: 'AWS Services Lambda',
      date: 'Janvier 15, 2025',
      image: `${process.env.REACT_APP_CDN_ITGALAXY}/assets/blog/aws-lambda.jpg`,
      slug: 'aws-lambda',
      description: 'Payer moins cher pour faire fonctionner votre application sur le cloud'
    },
    {
      id: 18,
      title: 'Loadbalancing et Auto-Scaling',
      category: 'AWS Services ASG',
      date: 'Octobre 19, 2024',
      image: `${process.env.REACT_APP_CDN_ITGALAXY}/assets/blog/aws-alb.png`,
      slug: 'aws-alb',
      description: 'Le coeur du Cloud avec Auto-Scaling'
    },
    {
      id: 19,
      title: 'Simple Queue Services ',
      category: 'AWS Services SQS',
      date: 'Sptembre 18, 2024',
      image: `${process.env.REACT_APP_CDN_ITGALAXY}/assets/blog/aws-sqs.png`,
      slug: 'aws-sqs',
      description: 'Gestion de flux de donnée avec SQS'
    },
    {
      id: 20,
      title: 'DevOps && AWS ',
      category: 'AWS Services IAC',
      date: 'Mars 16, 2024',
      image: `${process.env.REACT_APP_CDN_ITGALAXY}/assets/blog/aws-iac.jpg`,
      slug: 'aws-iac',
      description: 'Infrastructure as Code'
    },
    {
      id: 21,
      title: 'Introduction Gitlab ',
      category: 'Gitlab , Git',
      date: 'Fev 5, 2025',
      image: `${process.env.REACT_APP_CDN_ITGALAXY}/assets/blog/gitlab1.png`,
      slug: 'introduction-gitlab',
      description: 'Introduction Gitlab de A-Z'
    },
    {
      id: 22,
      title: 'Installation Gitlab ',
      category: 'Gitlab , Git',
      date: 'Fev 5, 2025',
      image: `${process.env.REACT_APP_CDN_ITGALAXY}/assets/blog/gitlab2.png`,
      slug: 'installation-gitlab',
      description: 'Installation Gitlab'
    },
    {
      id: 23,
      title: 'Les bases de git',
      category: 'Les bases de git',
      date: 'Fev 5, 2025',
      image: `${process.env.REACT_APP_CDN_ITGALAXY}/assets/blog/gitlab3.jpg`,
      slug: 'git-base',
      description: 'Les bases de git'
    },
    {
      id: 24,
      title: 'Les bases de git 1',
      category: 'Les bases de git 1',
      date: 'Fev 5, 2025',
      image: `${process.env.REACT_APP_CDN_ITGALAXY}/assets/blog/gitlab3.jpg`,
      slug: 'git-base-1',
      description: 'Les bases de git 1'
    },
    {
      id: 25,
      title: 'Les bases de git 2',
      category: 'Les bases de git 2',
      date: 'Fev 5, 2025',
      image: `${process.env.REACT_APP_CDN_ITGALAXY}/assets/blog/gitlab3.jpg`,
      slug: 'git-base-2',
      description: 'Les bases de git 2'
    },
    {
      id: 26,
      title: 'Les bases de git 3',
      category: 'Les bases de git 3',
      date: 'Fev 5, 2025',
      image: `${process.env.REACT_APP_CDN_ITGALAXY}/assets/blog/gitlab3.jpg`,
      slug: 'git-base-3',
      description: 'Les bases de git 3'
    },
    {
      id: 27,
      title: 'Les bases de git 4',
      category: 'Les bases de git 4',
      date: 'Fev 5, 2025',
      image: `${process.env.REACT_APP_CDN_ITGALAXY}/assets/blog/gitlab3.jpg`,
      slug: 'git-base-4',
      description: 'Les bases de git 4'
    },
    {
      id: 28,
      title: 'Les bases de git 5',
      category: 'Les bases de git 5',
      date: 'Fev 5, 2025',
      image: `${process.env.REACT_APP_CDN_ITGALAXY}/assets/blog/gitlab3.jpg`,
      slug: 'git-base-5',
      description: 'Les bases de git 5'
    },
    {
      id: 29,
      title: 'Les bases de git 6',
      category: 'Les bases de git 6',
      date: 'Fev 5, 2025',
      image: `${process.env.REACT_APP_CDN_ITGALAXY}/assets/blog/gitlab3.jpg`,
      slug: 'git-base-6',
      description: 'Les bases de git 6'
    },
    {
      id: 30,
      title: 'Les bases de git 7',
      category: 'Les bases de git 7',
      date: 'Fev 5, 2025',
      image: `${process.env.REACT_APP_CDN_ITGALAXY}/assets/blog/gitlab3.jpg`,
      slug: 'git-base-7',
      description: 'Les bases de git 7'
    },
    {
      id: 32,
      title: 'Gitflow',
      category: 'Gitflow',
      date: 'Fev 5, 2025',
      image: `${process.env.REACT_APP_CDN_ITGALAXY}/assets/blog/gitlab4.png`,
      slug: 'gitflow',
      description: 'Gitflow'
    },
  ];

  return (
    <>
      <BlogHelmet
        title="Améliorez vos compétences en informatique grâce à nos formations gratuites | ItGalaxy.io"
        description="Formez-vous et restez au courant des dernières tendances en freelance dans le secteur informatique, ainsi que des actualités et mises à jour de la plateforme ItGalaxy. "
        type="website"
        url={window.location.href}
      />

      <Header active="BLOG" />

      <BlogContainer>
        <BlogHeader>
          <BlogTitle>Améliorez vos compétences en informatique grâce à nos formations gratuites | ItGalaxy.io</BlogTitle>
          <BlogDescription>
          Formez-vous et restez au courant des dernières tendances en freelance dans le secteur informatique, ainsi que des actualités et mises à jour de la plateforme ItGalaxy.          </BlogDescription>
        </BlogHeader>

        <BlogGrid>
          {blogPosts.map(post => (
            <BlogCard key={post.id} to={`/blog/${post.slug}`}>
              <BlogImage src={post.image} alt={post.title} />
              <BlogCardContent>
                <BlogCardCategory>{post.category}</BlogCardCategory>
                <BlogCardTitle>{post.title}</BlogCardTitle>
                <BlogCardDate>{post.date}</BlogCardDate>
              </BlogCardContent>
            </BlogCard>
          ))}
        </BlogGrid>
      </BlogContainer>

      <FooterHome />
    </>
  );
};

export default Blog; 