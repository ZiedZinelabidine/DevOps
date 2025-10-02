import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Hero from './Hero';
import Services from './Services';
import Infrastructure from './Infrastructure';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import PricingCalculator from './PricingCalculator';
import DevOpsBenefits from './DevOpsBenefits';
import FinOps from './FinOps';
import FAQ from './/FAQ';
import { lightTheme, darkTheme } from './theme';
import styled from 'styled-components';
import Offers from '../../Offres';
import FooterHome from '@components/DashboardHome/FooterHome/FooterHome';
import Header from '@components/Header/Header';
import Expertise from './Expertise';
import EDMAsService from './EDMAsService';
import Contact from './Contact';
import CostEstimates from './EstimationCout';


const AppWrapper = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
`;


function InfogeranceServer() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : darkTheme}>
      <AppWrapper>
        <main>
          <Header />
          <Hero />
          <Expertise />
          <PricingCalculator />
          <EDMAsService />
          <Services />
          <Contact />
          <DevOpsBenefits />
          <CostEstimates />
          <Infrastructure />
          <FinOps />
          <Testimonials />
          <FAQ />
          <Offers />
          <FooterHome />
        </main>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default InfogeranceServer;