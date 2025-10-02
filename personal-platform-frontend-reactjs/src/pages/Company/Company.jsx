import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import DepositCompanyForm from '../../components/DepositCompanyForm/DepositCompanyForm';
import SideBar from '../../components/SideBar/sideBar';
import { getAccessToken } from '../../core/helpers/storage';
import { useGetUserByIdQuery } from '../../redux/api/users/userApi';
import { CompanyPageContainer } from './Company.style';

const Company = () => {
    const [token, setToken] = useState(null);
    const [userToken, setUserToken] = useState(null);
    const [role, setRole] = useState(null);
    const [id, setId] = useState(null);
    
    useEffect(() => {
        const fetchToken = async () => {
            const token = await getAccessToken();
            setToken(token);
            if (typeof token === 'string') {
                try {
                    const decodedToken = jwtDecode(token);
                    setRole(decodedToken.role);
                    setId(decodedToken.id);
                    setUserToken(decodedToken);
                } catch (error) {
                    console.error('Invalid token', error);
                }
            }
        };

        fetchToken();
    }, []);

    const { data: user } = useGetUserByIdQuery(userToken?.id, {
        skip: !userToken,
    });

    if (!token || !userToken) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Helmet>
                <title>Company Freelance - ItGalaxy</title>
                <meta 
                    name="description" 
                    content="Formulaire de dépôt d'entreprise pour les utilisateurs Freelance de IT Galaxy." 
                />
            </Helmet>
            <CompanyPageContainer>
                <SideBar path={'/company'} isLoggedIn={true} role={role} id={id} />
                <DepositCompanyForm type="Company Exist" />
            </CompanyPageContainer>
        </>
    );
};

export default Company;