import React from 'react';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import FooterHome from '../../../components/DashboardHome/FooterHome/FooterHome';
import Header from '../../../components/Header/Header';
import { freelanceITGuide2024 } from '../data/posts/freelance-it-guide-2024';
import { WebSiteFreeGuide } from '../data/posts/free-web-site-guide';
import { EmailFreeGuide } from '../data/posts/free-mail-entreprise';



import BlogHelmet from './BlogHelmet';
import PlatformCardBlog from '@components/PlatformCard/PlatformCardBlog';

const BlogPostContainer = styled.article`
  width: 100%;
  max-width: 100%;
  margin: 1rem auto;
  padding: 2.5rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  min-height: calc(100vh - 200px);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const BlogPostHeader = styled.header`
  margin: 2rem 0;
  text-align: center;
`;

const BlogPostTitle = styled.h1`
  font-size: 2.4rem;
  color: #0077B5;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BlogPostMeta = styled.div`
  color: #5e6d55;
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;

  span {
    transition: color 0.3s ease;

    &:hover {
      color: #0077B5;
      cursor: default;
    }
  }
`;

const BlogPostImage = styled.img`
  width: 100%;
  height: auto; /* Changed to auto for better aspect ratio */
  max-height: 450px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 3rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const BlogPostContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;

  h2, h3 {
      color: black;
      margin: 2.5rem 0 1rem;
  }

  p, ul, li {
      margin-bottom: 1.8rem;
      color: #2d2d2d;
      padding-left: 1em; // Add padding for better list visibility
  }

  ul {
      list-style: disc;
      padding-left: 1.5em; // Increase padding for ul
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const BlogPost = () => {
  const intl = useIntl();
  const { slug } = useParams();

  // Get the post based on the slug
  const getPost = (slug) => {
    switch (slug) {
      case 'plateformes-freelance-france-2025':
        return freelanceITGuide2024;
      case 'free-web-site-guide':
        return WebSiteFreeGuide;
      case 'free-mail-entreprise':
        return EmailFreeGuide;   
      case 'introduction-kubernetes':
        return window.location.href = `https://formations-k8s.itgalaxy.io/introduction-kubernetes/`;    
      case 'cluster-kubernetes':
        return window.location.href = `https://formations-k8s.itgalaxy.io/mise-en-place-cluster-k8s/`;       
      case 'deploiement-app-nodejs':
        return  window.location.href = `https://formations-k8s.itgalaxy.io/deploiement-app-nodejs/`;  
      case 'wordpress-kubernetes':
        return  window.location.href = `https://formations-k8s.itgalaxy.io/deployer-wordpress-avec-pvpvc/`;  
      case 'elk':
        return window.location.href = `https://formations-k8s.itgalaxy.io/deployer-la-stack-elk--elasticseach-logstash--kibana/`;  
      case 'prometheus':
        return  window.location.href = `https://formations-k8s.itgalaxy.io/monotoring-avec-prometheus-grafana/`;  
      case 'aws-introduction':
        return  window.location.href = `https://formations-aws.itgalaxy.io/introduction-aws-services/`;    
      case 'aws-iam':
        return   window.location.href = `https://formations-aws.itgalaxy.io/iam/`;    
      case 'aws-ec2':
        return   window.location.href = `https://formations-aws.itgalaxy.io/ec2/`;         
      case 'aws-cloudwatch':
        return   window.location.href = `https://formations-aws.itgalaxy.io/cloudwatch/`;   
      case 'aws-rds':
        return  window.location.href = `https://formations-aws.itgalaxy.io/rds/`;   
      case 'aws-s3':
        return window.location.href = `https://formations-aws.itgalaxy.io/s3/`;   
      case 'aws-vpc':
        return  window.location.href = `https://formations-aws.itgalaxy.io/vpc/`;   
      case 'aws-lambda':
        return  window.location.href = `https://formations-aws.itgalaxy.io/lambda/`;   
      case 'aws-alb':
        return   window.location.href = `https://formations-aws.itgalaxy.io/loadbalancer/`;   
      case 'aws-sqs':
        return  window.location.href = `https://formations-aws.itgalaxy.io/sqs/`;  
      case 'aws-iac':
        return window.location.href = `https://formations-aws.itgalaxy.io/devops/`; 
      case 'introduction-gitlab':
        return window.location.href = `https://formations-gitlab.itgalaxy.io/introduction-/`;  
      case 'installation-gitlab':
        return window.location.href = `https://formations-gitlab.itgalaxy.io/installation-gitlab/`;  
      case 'git-base':
        return window.location.href = `https://formations-gitlab.itgalaxy.io/les-base-de-git-/`;
      case 'git-base-1':
          return window.location.href = `https://formations-gitlab.itgalaxy.io/les-premiers-pas-avec-git-/`;
      case 'git-base-2':
          return window.location.href = `https://formations-gitlab.itgalaxy.io/git--introduit-une-ligne-de-commentaires-/`;
      case 'git-base-3':
            return window.location.href = `https://formations-gitlab.itgalaxy.io/git-checkout/`;
      case 'git-base-4':
         return window.location.href = `https://formations-gitlab.itgalaxy.io/git-revert-git-reset-/`;              
      case 'git-base-5':
          return window.location.href = `https://formations-gitlab.itgalaxy.io/gestion-des-branches/`;              
      case 'git-base-6':
          return window.location.href = `https://formations-gitlab.itgalaxy.io/-a-propos-des-tags/`;  
      case 'git-base-7':
         return window.location.href = `https://formations-gitlab.itgalaxy.io/supprimer-une-branche/`;              
      case 'gitflow':
         return window.location.href = `https://formations-gitlab.itgalaxy.io/-workflow-gitflow-vs-github-flow/`;              
          
      default:
        return null;
    }
  };

  const post = getPost(slug);
  if (!post) {
    return <div>Post not found</div>;
  }

  const { title, category, date, image, description, content } = post;

  return (
    <>
      <BlogHelmet
        title={title}
        description={description}
        image={image}
        url={window.location.href}
      />

      <Header active="BLOG" />

      {slug === 'plateformes-freelance-france-2025' ?

        (<PlatformCardBlog /> ) : (

      <BlogPostContainer>
        <BlogPostHeader>
          <BlogPostTitle>{title}</BlogPostTitle>
          <hr />
          <BlogPostMeta>
          <span>By <strong> {post.author} </strong></span>
            <span>-</span>
            <span>{date}</span>
           
          </BlogPostMeta>
        </BlogPostHeader>

        <BlogPostImage src={image} alt={title} />

        <BlogPostContent>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </BlogPostContent>
      </BlogPostContainer> )}

      <FooterHome />
    </>
  );
};

export default BlogPost;