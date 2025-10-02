import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Mail, Phone, User, MessageSquare, Send, CheckCircle, DollarSign, Globe, Server, Shield, Cpu, Cloud, ArrowLeft } from 'lucide-react';
import Header from 'components/Header/Header';
import FooterHome from '../FooterHome/FooterHome';
import { sendNotificationItGalaxyAsServiceHP } from 'core/helpers/storage';
import { Helmet } from 'react-helmet';
// Définition du thème sombre uniquement
const darkTheme = {
  primary: '#22d3ee', // cyan-400
  primaryDark: '#06b6d4', // cyan-500
  primaryLight: '#67e8f9', // cyan-300
  secondary: '#a78bfa', // violet-400
  secondaryLight: '#c4b5fd', // violet-300
  background: '#020617', // slate-950
  backgroundAlt: '#0f172a', // slate-900
  backgroundGradient: 'linear-gradient(135deg, #155e75, #6d28d9)', // cyan-800 to violet-700
  text: '#f8fafc', // slate-50
  textLight: '#e2e8f0', // slate-200
  textLighter: '#94a3b8', // slate-400
  border: '#1e293b', // slate-800
  borderDark: '#334155', // slate-700
  shadow: 'rgba(0, 0, 0, 0.5)',
  success: '#10b981', // emerald-500
  card: '#0f172a', // slate-900
  cardHover: '#1e293b', // slate-800
};

// Styles globaux
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
    line-height: 1.6;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  button {
    cursor: pointer;
    font-family: inherit;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;


// Page de devis
const DevisPage = styled.div`
  min-height: 150vh;
  background-color: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
`;

const DevisHeader = styled.div`
  background: ${({ theme }) => theme.backgroundGradient};
  padding: 3rem 0;
  color: white;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  }
`;

const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateX(-3px);
  }
`;

const DevisTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
`;

const DevisSubtitle = styled.p`
  font-size: 1.25rem;
  max-width: 36rem;
  opacity: 0.9;
  position: relative;
  z-index: 1;
`;

const DevisContent = styled.div`
  flex: 1;
  padding: 4rem 0;
  margin: 100px;

`;

const FormCard = styled.div`
  background-color: ${({ theme }) => theme.card};
  border-radius: 1.5rem;
  box-shadow: 0 25px 50px -12px ${({ theme }) => theme.shadow};
  padding: 2.5rem;
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.border};
  max-width: 48rem;
  margin: 0 auto;
`;

const SuccessMessage = styled.div`
  text-align: center;
  padding: 3rem 0;
`;

const SuccessIcon = styled.div`
  margin: 0 auto 1.5rem;
  color: ${({ theme }) => theme.success};
  animation: scaleIn 0.5s ease;
  
  @keyframes scaleIn {
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const SuccessTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.text};
`;

const SuccessText = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.textLight};
  max-width: 30rem;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  height: 100vh;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
`;

const InputWrapper = styled.div`
  position: relative;
`;

const InputIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${({ theme }) => theme.textLighter};
  transition: all 0.3s ease;
`;

const TextareaIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 1rem;
  pointer-events: none;
  color: ${({ theme }) => theme.textLighter};
  transition: all 0.3s ease;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.875rem 1rem 0.875rem 3rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background}50;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 1px 2px 0 ${({ theme }) => theme.shadow};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}30;
  }
  
  &:focus + ${InputIcon} {
    color: ${({ theme }) => theme.primary};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.textLighter};
  }
`;

const InputText = styled.input`
  width: 100%;
  padding: 0.875rem ;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background}50;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 1px 2px 0 ${({ theme }) => theme.shadow};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}30;
  }
  
  &:focus + ${InputIcon} {
    color: ${({ theme }) => theme.primary};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.textLighter};
  }
`;


const Select = styled.select`
  width: 100%;
  padding: 0.875rem 1rem 0.875rem 3rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background}50;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 1px 2px 0 ${({ theme }) => theme.shadow};
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1.5em;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}30;
  }
  
  &:focus + ${InputIcon} {
    color: ${({ theme }) => theme.primary};
  }
  
  option {
    background-color: ${({ theme }) => theme.backgroundAlt};
    color: ${({ theme }) => theme.text};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background}50;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 1px 2px 0 ${({ theme }) => theme.shadow};
  resize: vertical;
  min-height: 30rem;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}30;
  }
  
  &:focus + ${TextareaIcon} {
    color: ${({ theme }) => theme.primary};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.textLighter};
  }
`;

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 0.75rem;
  background: ${({ theme }) => theme.backgroundGradient};
  color: white;
  font-weight: 600;
  font-size: 1.125rem;
  box-shadow: 0 10px 15px -3px ${({ theme }) => theme.shadow};
  transition: all 0.3s ease;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: all 0.6s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 25px -5px ${({ theme }) => theme.shadow};
    
    &::before {
      left: 100%;
    }
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}30, 0 10px 15px -3px ${({ theme }) => theme.shadow};
  }
`;


function FormDevis() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    budget: '',
    title: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [showDevisPage, setShowDevisPage] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Ici, vous pourriez ajouter la logique pour envoyer les données à un serveur
        await sendNotificationItGalaxyAsServiceHP(formData); // Assurez-vous que cette fonction est définie et renvoie une promesse
        setSubmitted(true);
        
        // Réinitialiser le formulaire après 3 secondes
        setTimeout(() => {
            setFormData({
                nom: '',
                email: '',
                telephone: '',
                budget: '',
                title: '',
                message: ''
            });
            setSubmitted(false);
        }, 3000);
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        // Vous pourriez également mettre à jour l'état pour informer l'utilisateur de l'erreur
    }
};

 return (
    <>
      <Header />
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle theme={darkTheme} />
        <Helmet>
            <title>
                {`App As Service - Entreprises & IT Buisness - ItGalaxy  `}
              </title>
              <meta
                name="description"
                content={`Partagez les détails de votre projet IT et nous vous proposerons une solution adaptée à vos besoins et à votre budget.`}
              />
          </Helmet>


        <DevisPage>
          <DevisHeader>
            <Container>
              <DevisTitle>ItGalaxy As Service </DevisTitle>
              <DevisSubtitle>
                Partagez les détails de votre projet IT et nous vous proposerons une solution adaptée à vos besoins et à votre budget.
              </DevisSubtitle>
            </Container>
          </DevisHeader>
          
          <DevisContent>
            <Container>
              <FormCard>
                {submitted ? (
                  <SuccessMessage>
                    <SuccessIcon>
                      <CheckCircle size={80} />
                    </SuccessIcon>
                    <SuccessTitle>Demande Envoyée avec Succès!</SuccessTitle>
                    <SuccessText>
                      Merci pour votre demande. Notre équipe d'experts ItGalaxy vous contactera rapidement dans les heures ouvrables.
                    </SuccessText>
                  </SuccessMessage>
                ) : (
                  <Form onSubmit={handleSubmit}>
                    <FormRow>
                      <FormGroup>
                        <Label htmlFor="nom">Nom Complet</Label>
                        <InputWrapper>
                          <Input
                            type="text"
                            id="nom"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            required
                            placeholder="Jean Dupont"
                          />
                          <InputIcon>
                            <User size={20} />
                          </InputIcon>
                        </InputWrapper>
                      </FormGroup>
                      
                      <FormGroup>
                        <Label htmlFor="email">Email Professionnel</Label>
                        <InputWrapper>
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="exemple@email.com"
                          />
                          <InputIcon>
                            <Mail size={20} />
                          </InputIcon>
                        </InputWrapper>
                      </FormGroup>
                    </FormRow>
                    
                    <FormRow>
                      <FormGroup>
                        <Label htmlFor="telephone">Téléphone</Label>
                        <InputWrapper>
                          <Input
                            type="tel"
                            id="telephone"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            placeholder="06 12 34 56 78"
                          />
                          <InputIcon>
                            <Phone size={20} />
                          </InputIcon>
                        </InputWrapper>
                      </FormGroup>
                      
                      <FormGroup>
                        <Label htmlFor="budget">Budget Estimé</Label>
                        <InputWrapper>
                          <Select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                          >
                            <option value="">Sélectionnez votre budget</option>
                            <option value="moins-5k">Moins de 5 000 €</option>
                            <option value="5k-10k">5 000 € - 10 000 €</option>
                            <option value="10k-20k">10 000 € - 20 000 €</option>
                            <option value="20k-50k">20 000 € - 50 000 €</option>
                            <option value="plus-50k">Plus de 50 000 €</option>
                          </Select>
                          <InputIcon>
                            <DollarSign size={20} />
                          </InputIcon>
                        </InputWrapper>
                      </FormGroup>
                    </FormRow>
                    <FormGroup>
                      <Label htmlFor="message">Donnez un Titre à votre projet</Label>
                        <InputText
                          type="text"
                          id="title"
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          required
                          placeholder="Décrivez vos besoins informatiques, infrastructure requise, nombre d'utilisateurs..."
                        />
                    </FormGroup>

                    <FormGroup>
                      <Label htmlFor="message">Détails de votre projet IT</Label>
                      <InputWrapper>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Décrivez vos besoins informatiques, infrastructure requise, nombre d'utilisateurs..."
                        />
                    
                      </InputWrapper>
                    </FormGroup>
                    
                    <SubmitButton type="submit">
                      <Send size={20} style={{ marginRight: '0.75rem' }} />
                      Envoyer ma demande
                    </SubmitButton>
                  </Form>
                )}
              </FormCard>
            
            </Container>
          </DevisContent>
        </DevisPage>
      </ThemeProvider>
      <FooterHome />
    </>
    );
}

export default FormDevis;