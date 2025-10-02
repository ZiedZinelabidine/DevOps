import React from 'react';
import { Shield } from 'lucide-react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  background-color: #111827;
  padding: 3rem 1rem;
  @media (min-width: 640px) {
    padding: 3rem 1.5rem;
  }
  @media (min-width: 1024px) {
    padding: 3rem 2rem;
  }
`;

const Content = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  background-color: #1f2937;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  @media (min-width: 640px) {
    padding: 3rem;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #f3f4f6;
  margin: 0;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: #d1d5db;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #f3f4f6;
  margin: 0;
`;

const UpdatedDate = styled.p`
  color: #9ca3af;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
`;

const StyledList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ListItem = styled.li`
  color: #d1d5db;
`;

const StyledLink = styled.a`
  color: #93c5fd;
  text-decoration: none;
  &:hover {
    color: #60a5fa;
  }
`;

const StyledShield = styled(Shield)`
  width: 2rem;
  height: 2rem;
  color: #93c5fd;
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const UserAgreement = () => {
  return (
    <Container>
      <Content>
        <Header>
          <StyledShield />
          <Title>User Agreement</Title>
        </Header>

        <MainContent>
          <UpdatedDate>Last updated: 01/10/2024</UpdatedDate>

          <Section>
            <SectionTitle>1. Introduction</SectionTitle>
            <p>
              This User Agreement ("Agreement") is a legal contract between you ("User") and ItGalaxy 
              ("us", "we", or "our"). By accessing or using our services, you agree to comply with 
              and be bound by the terms of this Agreement.
            </p>
          </Section>

          <Section>
            <SectionTitle>2. Acceptance of Terms</SectionTitle>
            <p>
              By creating an account or using the Service, you affirm that you are of legal age to 
              enter into this Agreement and that you accept the terms and conditions set forth herein.
            </p>
          </Section>

          <Section>
            <SectionTitle>3. Service Description</SectionTitle>
            <p>
              ItGalaxy provides a platform for [describe services/products offered by ItGalaxy]. 
              We strive to maintain the platform's functionality, security, and user experience.
            </p>
          </Section>

          <Section>
            <SectionTitle>4. User Responsibilities</SectionTitle>
            <p>As a User, you agree to adhere to the following responsibilities:</p>
            <StyledList>
              <ListItem>
                Provide accurate, up-to-date, and complete information when registering.
              </ListItem>
              <ListItem>
                Maintain the security and confidentiality of your account information.
              </ListItem>
              <ListItem>
                Use the Service in compliance with all applicable laws and regulations.
              </ListItem>
              <ListItem>
                Respect the rights of other users and refrain from malicious activities.
              </ListItem>
            </StyledList>
          </Section>

          <Section>
            <SectionTitle>5. Termination</SectionTitle>
            <p>
              We reserve the right to suspend or terminate your account and access to the Service 
              if you violate this Agreement or engage in any fraudulent, abusive, or unlawful activity.
            </p>
          </Section>

          <Section>
            <SectionTitle>6. Content Ownership and Rights</SectionTitle>
            <p>
              All content generated and displayed within the Service remains the property of ItGalaxy 
              or our licensors. You are granted a limited, non-exclusive, non-transferable license to 
              use the Service for personal and internal use only.
            </p>
          </Section>

          <Section>
            <SectionTitle>7. Limitation of Liability</SectionTitle>
            <p>
              To the extent permitted by law, ItGalaxy will not be liable for any indirect, incidental, 
              special, or consequential damages arising from, or related to, your use of the Service, 
              including but not limited to loss of data or profits.
            </p>
          </Section>

          <Section>
            <SectionTitle>8. Indemnification</SectionTitle>
            <p>
              You agree to indemnify and hold harmless ItGalaxy, its affiliates, and their respective 
              employees, officers, and directors from any claims, losses, liabilities, damages, or 
              expenses (including reasonable attorneys' fees) arising out of your use of the Service 
              or violation of this Agreement.
            </p>
          </Section>

          <Section>
            <SectionTitle>9. Modifications to the Agreement</SectionTitle>
            <p>
              ItGalaxy reserves the right to modify this Agreement at any time. Any changes will be 
              effective immediately upon posting the updated Agreement on our website. Your continued 
              use of the Service after modifications indicates your acceptance of the new terms.
            </p>
          </Section>

          <Section>
            <SectionTitle>10. Governing Law</SectionTitle>
            <p>
              This Agreement shall be governed by and construed in accordance with the laws of 
              [Your Country/State], without regard to its conflict of law principles.
            </p>
          </Section>

          <Section>
            <SectionTitle>11. Contact Us</SectionTitle>
            <p>
              If you have any questions about this User Agreement, please contact us at{' '}
              <StyledLink href="mailto:contact@itgalaxy.io">contact@itgalaxy.io</StyledLink>.
            </p>
          </Section>

          <Footer>
            <StyledLink href="/">Return to Home Page</StyledLink>
          </Footer>
        </MainContent>
      </Content>
    </Container>
  );
};

export default UserAgreement;