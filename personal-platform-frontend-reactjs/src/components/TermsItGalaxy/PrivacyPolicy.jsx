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
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: #d1d5db;
`;

const IntroText = styled.p`
  font-size: 1.125rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #f3f4f6;
`;

const Link = styled.a`
  color: #93c5fd;
  text-decoration: none;
  &:hover {
    color: #60a5fa;
  }
`;

const List = styled.ul`
  list-style-type: disc;
  list-style-position: inside;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ListItem = styled.li`
  color: #d1d5db;
`;

const ItalicText = styled.p`
  font-style: italic;
  color: #9ca3af;
`;

const Footer = styled.section`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #374151;
`;

const FooterText = styled.p`
  font-size: 0.875rem;
  color: #9ca3af;
`;

const StyledShield = styled(Shield)`
  width: 2rem;
  height: 2rem;
  color: #93c5fd;
`;

const PrivacyPolicy = () => {
  return (
    <Container>
      <Content>
        <Header>
          <StyledShield />
          <Title>Privacy Policy for ItGalaxy</Title>
        </Header>

        <MainContent>
          <IntroText>
            If you require any more information or have any questions about our privacy policy, 
            please feel free to contact us by email at <Link href="mailto:contact@itgalaxy.io">contact@itgalaxy.io</Link>.
          </IntroText>

          <p>
            At <strong style={{ color: '#f3f4f6' }}>itgalaxy.io</strong> we consider the privacy of our visitors to be extremely important. 
            This privacy policy document describes in detail the types of personal information collected and recorded by 
            itgalaxy.io and how we use it.
          </p>

          <Section>
            <SectionTitle>Log Files</SectionTitle>
            <p>
              Like many other websites, itgalaxy.io makes use of log files. These files merely logs visitors to the site – 
              usually a standard procedure for hosting companies and a part of hosting services's analytics. The information 
              inside the log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), 
              date/time stamp, referring/exit pages, and possibly the number of clicks. This information is used to analyze 
              trends, administer the site, track user's movement around the site, and gather demographic information. IP 
              addresses and other such information are not linked to any information that is personally identifiable.
            </p>
          </Section>

          <Section>
            <SectionTitle>Cookies and Web Beacons</SectionTitle>
            <p>
              itgalaxy.io uses cookies to store information about visitors' preferences, to record user-specific information 
              on which pages the site visitor accesses or visits, and to personalize or customize our web page content based 
              upon visitors' browser type or other information that the visitor sends via their browser.
            </p>
          </Section>

          <Section>
            <SectionTitle>DoubleClick DART Cookie</SectionTitle>
            <ul>
              <ListItem>Google, as a third party vendor, uses cookies to serve ads on itgalaxy.io.</ListItem>
              <ListItem>Google's use of the DART cookie enables it to serve ads to our site's visitors based upon their visit to itgalaxy.io and other sites on the Internet.</ListItem>
              <ListItem>
                Users may opt out of the use of the DART cookie by visiting the{' '}
                <Link href="http://www.google.com/privacy_ads.html">Google ad and content network privacy policy</Link>.
              </ListItem>
            </ul>
          </Section>

          <Section>
            <SectionTitle>Our Advertising Partners</SectionTitle>
            <p>Some of our advertising partners may use cookies and web beacons on our site. Our advertising partners include:</p>
            <List>
              <ListItem>Google</ListItem>
              <ListItem>Commission Junction</ListItem>
              <ListItem>Amazon</ListItem>
              <ListItem>Adbrite</ListItem>
              <ListItem>Clickbank</ListItem>
              <ListItem>Yahoo! Publisher Network</ListItem>
              <ListItem>Chitika</ListItem>
              <ListItem>Kontera</ListItem>
            </List>
            <ItalicText>
              While each of these advertising partners has their own Privacy Policy for their site, an updated and hyperlinked 
              resource is maintained here: <Link href="https://www.privacypolicyonline.com/privacy-policy-links/">Privacy Policy Links</Link>.
            </ItalicText>
          </Section>

          <Section>
            <SectionTitle>Third Party Privacy Policies</SectionTitle>
            <p>
              You should consult the respective privacy policies of these third-party ad servers for more detailed information 
              on their practices as well as for instructions about how to opt-out of certain practices. itgalaxy.io's privacy 
              policy does not apply to, and we cannot control the activities of, such other advertisers or web sites.
            </p>
          </Section>

          <Section>
            <SectionTitle>Children's Information</SectionTitle>
            <p>
              We believe it is important to provide added protection for children online. We encourage parents and guardians 
              to spend time online with their children to observe, participate in and/or monitor and guide their online activity.
            </p>
            <p>
              itgalaxy.io does not knowingly collect any personally identifiable information from children under the age of 13. 
              If a parent or guardian believes that itgalaxy.io has in its database the personally-identifiable information of 
              a child under the age of 13, please contact us immediately and we will use our best efforts to promptly remove 
              such information from our records.
            </p>
          </Section>

          <Section>
            <SectionTitle>Consent</SectionTitle>
            <p>
              By using our website, you hereby consent to our privacy policy and agree to its terms.
            </p>
          </Section>

          <Footer>
            <FooterText>
              <strong style={{ color: '#f3f4f6' }}>Last Updated:</strong> Nov 1st, 2019. Should we update, amend or make any changes to our privacy policy, 
              those changes will be posted here.
            </FooterText>
          </Footer>
        </MainContent>
      </Content>
    </Container>
  );
};

export default PrivacyPolicy;