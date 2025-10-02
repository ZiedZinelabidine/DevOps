import React from 'react';
import { BookOpen, Github, GitBranch, GitCommit, GitMerge, GitPullRequest, Gitlab, GraduationCap, Terminal } from 'lucide-react';
import styled, { createGlobalStyle } from 'styled-components';
import Offers from '../Offres';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Inter, system-ui, -apple-system, sans-serif;
    background-color: #0f172a;
    color: #e2e8f0;
  }
`;

const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #0f172a;
`;

const Header = styled.header`
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  padding: 6rem 1rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%);
    pointer-events: none;
  }
`;

const HeaderContent = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: #f8fafc;
  margin: 0 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #94a3b8;
  max-width: 36rem;
  margin: 0 auto;
`;

const MainContent = styled.main`
  max-width: 64rem;
  margin: 0 auto;
  padding: 4rem 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled.a`
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border: 1px solid #334155;
  border-radius: 1rem;
  padding: 2rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: #3b82f6;
    box-shadow: 0 4px 20px rgba(59, 130, 246, 0.1);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #f8fafc;
  margin: 0;
`;

const CardDescription = styled.p`
  color: #94a3b8;
  margin: 0;
  line-height: 1.6;
`;

const Tag = styled.span`
  display: inline-block;
  background-color: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const exercises = [
  {
    title: "W3Schools Git Exercises",
    description: "Interactive Git exercises with immediate feedback. Perfect for beginners learning Git basics.",
    url: "https://www.w3schools.com/git/exercise.asp",
    icon: GraduationCap,
    tag: "Beginner Friendly"
  },
  {
    title: "Git Exercises by Fracz",
    description: "A comprehensive set of Git exercises that cover advanced concepts and real-world scenarios.",
    url: "https://gitexercises.fracz.com/",
    icon: GitBranch,
    tag: "Advanced"
  },
  {
    title: "Peer Production Course",
    description: "Additional Git exercises focused on collaborative development and version control practices.",
    url: "https://jameshowison.github.io/peer_production_course/docs/additional_git_exercises.html",
    icon: GitPullRequest,
    tag: "Collaboration"
  },
  {
    title: "Git Katas",
    description: "Hands-on exercises for Git training. Learn Git concepts through practical examples.",
    url: "https://github.com/eficode-academy/git-katas",
    icon: Github,
    tag: "Hands-on"
  },
  {
    title: "Uptime Formation Git/GitLab",
    description: "French resources for learning Git and GitLab, including practical exercises and tutorials.",
    url: "https://supports.uptime-formation.fr/02-git-et-gitlab/",
    icon: Gitlab,
    tag: "GitLab Focus"
  },
  {
    title: "SFU Git & GitLab Exercise",
    description: "Comprehensive exercise covering Git basics, branching, merging, and GitLab integration.",
    url: "https://www2.cs.sfu.ca/~wsumner/teaching/373/exercise-git-and-gitlab.html",
    icon: GitMerge,
    tag: "Academic"
  }
];

function GitExercices() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <Header>
          <HeaderContent>
            <Title>
              <GitCommit size={40} />
              Resources Git Exercise 
            </Title>
            <Subtitle>
            Une collection organisée d'exercices pratiques pour maîtriser Git et GitLab grâce à un apprentissage pratique
            </Subtitle>
          </HeaderContent>
        </Header>

        <MainContent>
          <Grid>
            {exercises.map((exercise, index) => (
              <Card key={index} href={exercise.url} target="_blank" rel="noopener noreferrer">
                <CardHeader>
                  <exercise.icon size={24} color="#60a5fa" />
                  <CardTitle>{exercise.title}</CardTitle>
                </CardHeader>
                <CardDescription>{exercise.description}</CardDescription>
                <Tag>{exercise.tag}</Tag>
              </Card>
            ))}
          </Grid>
        </MainContent>      
         <Offers />
      </PageWrapper>
    </>
  );
}

export default GitExercices;