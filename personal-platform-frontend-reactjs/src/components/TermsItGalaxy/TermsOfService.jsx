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

const TermsOfService = () => {
  return (
    <Container>
      <Content>
        <Header>
          <StyledShield />
          <Title>Terms of Service</Title>
        </Header>

        <MainContent>
          <UpdatedDate>Last updated: 15/04/2025</UpdatedDate>

          <Section>
            <SectionTitle>1. Acceptance of Terms</SectionTitle>
            <p>
              By accessing or using the ItGalaxy services, you agree to be bound by these Terms of Service. 
              If you do not agree, you may not use the services.
            </p>
          </Section>

          <Section>
            <SectionTitle>2. Changes to the Terms</SectionTitle>
            <p>
              ItGalaxy reserves the right to modify these Terms at any time. Changes will be effective 
              immediately upon posting the updated Terms on our website. Your continued use of the services 
              after changes indicates your acceptance of the new Terms.
            </p>
          </Section>

          <Section>
            <SectionTitle>3. Use of Services</SectionTitle>
            <p>
              You may use the services only for lawful purposes and in accordance with these Terms. 
              You agree not to use the services in any way that violates any applicable national or 
              international law.
            </p>
          </Section>

          <Section>
            <SectionTitle>4. User Accounts</SectionTitle>
            <p>
              You are responsible for maintaining the confidentiality of your account information, 
              including your password. You agree to notify ItGalaxy immediately of any unauthorized 
              use of your account or any other breach of security.
            </p>
          </Section>

          <Section>
            <SectionTitle>5. Intellectual Property Rights</SectionTitle>
            <p>
              The content, layout, design, data, and graphics on this website are the property of 
              ItGalaxy or its content suppliers. You may not reproduce, modify, distribute, or display 
              any part of the services without our prior written consent.
            </p>
          </Section>

          <Section>
            <SectionTitle>6. Limitation of Liability</SectionTitle>
            <p>
              To the fullest extent permitted by law, ItGalaxy shall not be liable for any indirect, 
              incidental, special, or consequential damages arising from your use of the services or 
              any content provided therein.
            </p>
          </Section>

          <Section>
            <SectionTitle>7. Indemnification</SectionTitle>
            <p>
              You agree to defend, indemnify and hold harmless ItGalaxy, its affiliates, and its 
              employees from any claims, liabilities, damages, losses, and expenses arising out of 
              or related to your violation of these Terms.
            </p>
          </Section>

          <Section>
            <SectionTitle>8. Governing Law</SectionTitle>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of 
              [Your Country/State], without regard to its conflict of law principles.
            </p>
          </Section>

          <Section>
            <SectionTitle>9. Contact Us</SectionTitle>
            <p>
              If you have any questions about these Terms, please contact us at{' '}
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

export default TermsOfService;