import CryptoJS from "crypto-js";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getURL } from "../../redux/api/uploads/uploadSlice";
import { StorageKeys } from "../constants/keys";
import { getPersistData, persistData, removePersistData } from "./persist";

// return the user from local storage if exist
export const getUserFromLocalStorage = () => {
  try {
    const user = getPersistData(StorageKeys.USER, true);
    if (user) {
      return user;
    } else {
      // clearLocalStorage();
      return null;
    }
  } catch (error) {
    //clearLocalStorage();
    return null;
  }
};

export const getEntrepriseFromLocalStorage = () => {
  try {
    const entreprise = getPersistData(StorageKeys.ENTREPRISE, true);
    if (entreprise) {
      return entreprise;
    } else {
      //  clearLocalStorage();
      return null;
    }
  } catch (error) {
    // clearLocalStorage();
    return null;
  }
};

// return the token from local storage if exist
export const getTokenFromLocalStorage = () => {
  try {
    const token = getPersistData(StorageKeys.TOKEN, false);
    return token || null;
  } catch (error) {
    console.error("Error getting access token from local storage:", error);
    return null;
  }
};

export const getRefreshTokenFromLocalStorage = () => {
  try {
    const refreshToken = getPersistData(StorageKeys.TOKEN, false);
    return refreshToken || null;
  } catch (error) {
    console.error("Error getting refresh token from local storage:", error);
    return null;
  }
};

export const isTokenExpired = (token) => {
  if (!token) return true;
  const decoded = jwtDecode(token);
  const expirationTime = decoded.exp * 1000; // Convert to milliseconds
  return Date.now() >= expirationTime;
};

export const refreshToken = async () => {
  // Get the refresh token from local storage
  const token = getTokenFromLocalStorage(); // Ensure this function is correctly implemented
  if (!token) {
    console.warn("No token available.");
    return null;
  }

  // Initialize the URL for refreshing the token
  let url_refresh_token;

  try {
    const decoded = jwtDecode(token); // Decode the access token

    // Set the refresh token URL based on the user's role
    switch (decoded.role) {
      case "CANDIDAT":
        url_refresh_token = `${process.env.REACT_APP_API_URL}user/refresh-token`;
        break; // Break after each case
      case "ENTREPRISE":
        url_refresh_token = `${process.env.REACT_APP_API_URL}entreprise/refresh-token`;
        break;
      case "RECRUTER":
        url_refresh_token = `${process.env.REACT_APP_API_URL}recruter/refresh-token`;
        break;
      case "ACCOUNTING":
        url_refresh_token = `${process.env.REACT_APP_API_URL}accounting/refresh-token`;
        break;
      default:
        console.warn("Unknown role, cannot determine refresh token URL.");
        return null; // Handle unknown role case
    }

    // Make the fetch request to refresh the token
    const response = await fetch(url_refresh_token, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    // Check if the response is okay
    if (!response.ok) {
    }

    // Retrieve the new tokens from the response
    const data = await response.json();

    // Save the new access token to local storage
    saveTokenToLocalStorage(data.accessToken); // Use setItem method
    // Optionally save the new refresh token if returned
    if (data.refreshToken) {
      saveTokenToLocalStorage(data.refreshToken);
    }
  } catch (error) {
    console.error("Error refreshing token:", error);
    return null;
  }
};

// Main function managing token retrieval and refreshing
export const getAccessToken = () => {
  const token = getTokenFromLocalStorage();
  // Check if the access token is expired and refresh it if necessary
  /* if (isTokenExpired(token)) {
    const newToken = await refreshToken();
    return newToken || null; // Return new token or null if refresh failed
  } */

  return token; // Return the valid existing token
};

export const sendForgotPaswordEmail = async (
  name,
  email,
  type,
  resetPasswordToken
) => {
  let verificationUrl;
  switch (type) {
    case "CANDIDAT":
      verificationUrl = `${process.env.REACT_APP_FRONTED_URL}/reset-password?token=${resetPasswordToken}&type=CANDIDAT`;
      break; // Break after each case
    case "ENTREPRISE":
      verificationUrl = `${process.env.REACT_APP_FRONTED_URL}/reset-password?token=${resetPasswordToken}&type=ENTREPRISE`;
      break;
    case "RECRUTER":
      verificationUrl = `${process.env.REACT_APP_FRONTED_URL}/reset-password?token=${resetPasswordToken}&type=RECRUTER`;
      break;
    case "ACCOUNTING":
      verificationUrl = `${process.env.REACT_APP_FRONTED_URL}/reset-password?token=${resetPasswordToken}&type=ACCOUNTING`;
      break;
    default:
      console.warn("Unknown role, cannot determine refresh token URL.");
      return null; // Handle unknown role case
  }

  const emailData = {
    SENDER: "zinelabidine.zied@itgalaxy.io",
    NAME: name,
    RECIPIENT: email,
    SUBJECT: "ItGalaxy: Password Reset Request",
    verificationUrl: verificationUrl,
    TYPE_MAIL: "FORGET_PASSWORD",
  };

  try {
    return await fetch(`${process.env.REACT_APP_API_SENDMAIL}`, {
      method: "POST",
      body: JSON.stringify(emailData),
    });
  } catch (error) {
    console.error("Failed to send forget password email:", error);
    return null;
  }
};

export const sendNotificationEmail = async (email, typeNotification) => {
  let subject;

  switch (typeNotification) {
    case "NOTIFICATION_NEW_PROPOSAL":
      subject = "ItGalaxy : Félicitation nouvelle offre";
      break;
    case "NOTIFICATION_PROPOSAL_ACCEPTED":
      subject = "ItGalaxy : Félicitation votre offre a été acceptée";
      break;
    case "NOTIFICATION_PROPOSAL_DENIED":
      subject = "ItGalaxy : Malheureusement votre offre a été déclinée";
      break;
    case "NOTIFICATION_PROPOSAL_FINISHED":
      subject =
        "ItGalaxy : Félicitation votre travail a été validé , le versement a été activé";
      break;
    case "NOTIFICATION_NEW_SOLDED_PRODUCT":
      subject = "ItGalaxy : Félicitation votre produit a été vendu";
      break;
    case "NOTIFICATION_SOLDED_PRODUCT_COMMENT":
      subject = "ItGalaxy : Félicitation vous avez un nouveau commentaire";
      break;
    case "NOTIFICATION_RCE_AFFECTED":
      subject =
        "ItGalaxy : Votre dossier de creation d'entreprise a été affecté à un expert comptable ";
      break;
    case "NOTIFICATION_RCE_UPDATED":
      subject =
        "ItGalaxy : Votre dossier de creation d'entreprise demande une mise à jour de votre part ";
      break;
    case "NOTIFICATION_RCE_FINISHED":
      subject =
        "ItGalaxy : Votre dossier de creation d'entreprise demande une mise à jour de votre part ";
      break;

    default:
      console.warn("Unknown role, cannot determine refresh token URL.");
      return null; // Handle unknown role case
  }

  const emailData = {
    SENDER: "zinelabidine.zied@itgalaxy.io",
    NAME: "Client",
    RECIPIENT: email,
    SUBJECT: subject,
    TYPE_MAIL: typeNotification,
  };

  try {
    return await fetch(`${process.env.REACT_APP_API_SENDMAIL}`, {
      method: "POST",
      body: JSON.stringify(emailData),
    });
  } catch (error) {
    console.error("Failed to send forget password email:", error);
    return null;
  }
};

export const sendNotificationItGalaxyAsServiceHP = async (props) => {

  const emailData = {
    SENDER: "zinelabidine.zied@itgalaxy.io",
    NAME: props.nom,
    SUBJECT: props.title,
    EMAIL: props.email,
    TEL: props.telephone,
    RECIPIENT: "zinelabidine.zied@gmail.com",
    MSG: props.message,
    BUDGET: props.budget,
    TITLE: props.title,
    TYPE_MAIL: 'ITGALAXY_AS_SERVICE_HP',
  };

  try {
    return await fetch(`${process.env.REACT_APP_API_SENDMAIL}`, {
      method: "POST",
      body: JSON.stringify(emailData),
    });
  } catch (error) {
    console.error("Failed to send forget password email:", error);
    return null;
  }
};


export const getDashboardDetailsFromLocalStorage = () => {
  try {
    const dashboardDetails = getPersistData(StorageKeys.DASHBOARDDETAILS, true);
    if (dashboardDetails) {
      return dashboardDetails;
    } else {
      //  clearLocalStorage();
      return null;
    }
  } catch (error) {
    // clearLocalStorage();
    return null;
  }
};

export const sendVerificationEmail = async (
  name,
  email,
  type,
  verificationToken,
  proxy
) => {
  let verificationUrl;

  switch (type) {
    case "CANDIDAT":
      verificationUrl = `${process.env.REACT_APP_FRONTED_URL}/verify-email?verificationToken=${verificationToken}&type=CANDIDAT&proxy=${proxy}`;
      break; // Break after each case
    case "ENTREPRISE":
      verificationUrl = `${process.env.REACT_APP_FRONTED_URL}/verify-email?verificationToken=${verificationToken}&type=ENTREPRISE&proxy=${proxy}`;
      break;
    case "RECRUTER":
      verificationUrl = `${process.env.REACT_APP_FRONTED_URL}/verify-email?verificationToken=${verificationToken}&type=RECRUTER&proxy=${proxy}`;
      break;
    case "ACCOUNTING":
      verificationUrl = `${process.env.REACT_APP_FRONTED_URL}/verify-email?verificationToken=${verificationToken}&type=ACCOUNTING&proxy=${proxy}`;
      break;
    default:
      console.warn("Unknown role, cannot determine refresh token URL.");
      return null; // Handle unknown role case
  }


  try {
    await fetch(`${process.env.REACT_APP_API_SENDMAIL}`, {
      method: "POST",
      body: JSON.stringify({
        SENDER: "zinelabidine.zied@itgalaxy.io",
        NAME: name,
        RECIPIENT: email,
        SUBJECT: "ItGalaxy: Email Inscription",
        verificationUrl: verificationUrl,
        TYPE_MAIL: "VERIFICATION",
      }),
    });

  } catch (error) {
    console.error("Failed to send verification email:", error);
  }
};

export const sendSupportEmail = async (contactorEmail, message) => {

  try {
    await fetch(`${process.env.REACT_APP_API_SENDMAIL}`, {
      method: "POST",
      body: JSON.stringify({
        SENDER: "zinelabidine.zied@itgalaxy.io",
        NAME: '',
        RECIPIENT: "zinelabidine.zied@itgalaxy.io",
        SUBJECT: "Support ItGalaxy Product",
        TYPE_MAIL: "SUPPORT",
        CONTACTOR_EMAIL: contactorEmail,
        MESSAGE: message
      }),
    });

  } catch (error) {
    console.error("Failed to send verification email:", error);
  }

};


// return the projects from local storage if exist
export const getProjectsFromLocalStorage = () => {
  try {
    const projects = getPersistData(StorageKeys.PROJECTS, false);
    if (projects) {
      return projects;
    } else {
      ///  clearLocalStorage();
      return null;
    }
  } catch (error) {
    return null;
  }
};

// return the proposals from local storage if exist
export const getProposalsFromLocalStorage = () => {
  try {
    const proposals = getPersistData(StorageKeys.PROPOSALS, false);
    if (proposals) {
      return proposals;
    } else {
      //  clearLocalStorage();
      return null;
    }
  } catch (error) {
    return null;
  }
};

export const getBalanceFromLocalStorage = () => {
  try {
    const balance = getPersistData(StorageKeys.BALANCE, false);
    if (balance) {
      return balance;
    } else {
      //  clearLocalStorage();
      return null;
    }
  } catch (error) {
    return null;
  }
};

// return the proposals entreprise from local storage if exist
export const getProposalEntrepriseCreationFromLocalStorage = () => {
  try {
    const proposalentreprisecreation = getPersistData(
      StorageKeys.PROPOSAL_ENTREPRISE_CREATION,
      false
    );
    if (proposalentreprisecreation) {
      return proposalentreprisecreation;
    } else {
      //  clearLocalStorage();
      return null;
    }
  } catch (error) {
    return null;
  }
};

// return the proposals entreprise from local storage if exist
export const getProjectCreationFromLocalStorage = () => {
  try {
    const projectcreation = getPersistData(StorageKeys.PROJECT_CREATION, false);
    if (projectcreation) {
      return projectcreation;
    } else {
      //  clearLocalStorage();
      return null;
    }
  } catch (error) {
    return null;
  }
};

// return user's type from local storage if exist
export const getProjectCreatedFromLocalStorage = () => {
  try {
    const type = getPersistData(StorageKeys.PROJECT_CREATED, false);
    if (type) {
      return type;
    }
    return null;
  } catch (error) {
    // clearLocalStorage();
    return null;
  }
};

// return user's type from local storage if exist
export const getTypeFromLocalStorage = () => {
  try {
    const type = getPersistData(StorageKeys.TYPE, false);
    if (type) {
      return type;
    }
    return null;
  } catch (error) {
    //  clearLocalStorage();
    return null;
  }
};

// return the islogged from local storage if exist
export const getIsloggedFromLocalStorage = () => {
  const isloggedIn = getPersistData(StorageKeys.ISLOGGEDIN, false);
  return isloggedIn;
};

// return proxy's type from local storage if exist
export const getProxyTypeFromLocalStorage = () => {
  try {
    const type = getPersistData(StorageKeys.PROXY_TYPE, false);
    if (type) {
      return type;
    }
    return null;
  } catch (error) {
    //  clearLocalStorage();
    return null;
  }
};

// return proxy's type from local storage if exist
export const getProxyFromLocalStorage = () => {
  try {
    const proxy = getPersistData(StorageKeys.PROXY, false);
    if (proxy) {
      return proxy;
    }
    return null;
  } catch (error) {
    //  clearLocalStorage();
    return null;
  }
};

// return project proposal entreprise type from local storage if exist
export const getProjectProposalEntrepriseCreationFromLocalStorage = () => {
  try {
    const projectproposalentreprise = getPersistData(
      StorageKeys.PROJECT_PROPOSAL_ENTREPRISE_CREATION,
      false
    );
    if (projectproposalentreprise) {
      return projectproposalentreprise;
    }
    return null;
  } catch (error) {
    //  clearLocalStorage();
    return null;
  }
};

// return project proposal entreprise type from local storage if exist
export const getProposalCreationFromLocalStorage = () => {
  try {
    const proposalcreation = getPersistData(
      StorageKeys.PROPOSAL_CREATION,
      false
    );
    if (proposalcreation) {
      return proposalcreation;
    }
    return null;
  } catch (error) {
    //  clearLocalStorage();
    return null;
  }
};
// chatId
export const getChatIdFromLocalStorage = () => {
  try {
    const chatId = getPersistData(StorageKeys.CHATID, false);
    if (chatId) {
      return chatId;
    }
    return null;
  } catch (error) {
    //  clearLocalStorage();
    return null;
  }
};
export const getCountshareProjectFromLocalStorage = () => {
  try {
    const count = getPersistData(StorageKeys.COUNT_SHARE_PROJECT, false);
    if (count) {
      return count;
    }
    return null;
  } catch (error) {
    //  clearLocalStorage();
    return null;
  }
};
export const getCountComposeFreelanceFromLocalStorage = () => {
  try {
    const count = getPersistData(StorageKeys.COUNT_COMPOSE_FREELANCE, false);
    if (count) {
      return count;
    }
    return null;
  } catch (error) {
    //  clearLocalStorage();
    return null;
  }
};
export const getCountProductFromLocalStorage = () => {
  try {
    const count = getPersistData(StorageKeys.COUNT_PRODUCT, false);
    if (count) {
      return count;
    }
    return null;
  } catch (error) {
    //  clearLocalStorage();
    return null;
  }
};

export const getCountOffreFromLocalStorage = () => {
  try {
    const count = getPersistData(StorageKeys.COUNT_OFFRE, false);
    if (count) {
      return count;
    }
    return null;
  } catch (error) {
    //  clearLocalStorage();
    return null;
  }
};

export const getCountFolderINPROGRESSFromLocalStorage = () => {
  try {
    const count = getPersistData(StorageKeys.COUNT_FOLDER_INPROGRESS, false);
    if (count) {
      return count;
    }
    return null;
  } catch (error) {
    //  clearLocalStorage();
    return null;
  }
};

// save user's type to local storage
export const saveTypeToLocalStorage = (token) => {
  const decodeToken = token ? jwtDecode(token) : null;
  const type = decodeToken.role;
  persistData(StorageKeys.TYPE, type);
};
// save a user in the local storage
export const saveUserToLocalStorage = (user) => {
  persistData(StorageKeys.USER, user);
};

export const saveBalanceToLocalStorage = (user) => {
  persistData(StorageKeys.BALANCE, user);
};

export const saveCounFolderINPROGRESSToLocalStorage = (user) => {
  persistData(StorageKeys.COUNT_FOLDER_INPROGRESS, user);
};

// save a tinode in the local storage
export const saveChatIdLocalStorage = (chatId) => {
  persistData(StorageKeys.CHATID, chatId);
};

// save a entreprise in the local storage
export const saveEnrepriseToLocalStorage = (user) => {
  persistData(StorageKeys.ENTREPRISE, user);
};
// save a token in the local storage
export const saveTokenToLocalStorage = (token) => {
  persistData(StorageKeys.TOKEN, token);
};
// save a loggedin in the local storage
export const saveLoggedIn = (isloggedin) => {
  persistData(StorageKeys.ISLOGGEDIN, isloggedin);
};

// save a token in the local storage
export const saveStreamTokenToLocalStorage = (streamtoken) => {
  persistData(StorageKeys.STREAMTOKEN, streamtoken);
};
// save the user access ids in the local storage
export const saveResourcesToLocalStorage = (resources) => {
  const userResources = { resources };
  persistData(StorageKeys.RESOURCES, userResources);
};
// save the user projects in the local storage
export const saveProjectsToLocalStorage = (projects) => {
  persistData(StorageKeys.PROJECTS, projects);
};
// save the created project in the local storage
export const saveCreatedProjectToLocalStorage = (createdproject) => {
  persistData(StorageKeys.PROJECT_CREATED, createdproject);
};

export const saveCountShareProjectToLocalStorage = (count) => {
  persistData(StorageKeys.COUNT_SHARE_PROJECT, count);
};
export const saveCountComposeFreelanceToLocalStorage = (count) => {
  persistData(StorageKeys.COUNT_COMPOSE_FREELANCE, count);
};
export const saveCountProductToLocalStorage = (count) => {
  persistData(StorageKeys.COUNT_PRODUCT, count);
};
export const saveCountOffreToLocalStorage = (count) => {
  persistData(StorageKeys.COUNT_OFFRE, count);
};

// save a Proxy in the local storage
export const saveProxyToLocalStorage = (proxy) => {
  persistData(StorageKeys.PROXY, proxy);
};

// save a Proxy in the local storage
export const saveProxyTypeToLocalStorage = (proxyType) => {
  persistData(StorageKeys.PROXY_TYPE, proxyType);
};

// save the user project_proposal_entreprise in the local storage
export const saveProjectProposalEntrepriseCreationToLocalStorage = (
  proposal_entreprise
) => {
  persistData(
    StorageKeys.PROJECT_PROPOSAL_ENTREPRISE_CREATION,
    proposal_entreprise
  );
};

export const saveProposalCreationToLocalStorage = (proposal_creation) => {
  persistData(StorageKeys.PROPOSAL_CREATION, proposal_creation);
};

export const saveDashboardDetailsToLocalStorage = (dashboardDetail) => {
  persistData(StorageKeys.DASHBOARDDETAILS, dashboardDetail);
};

// save the user proposal_entreprise_creation in the local storage
export const saveProposalEntrepriseCreationToLocalStorage = (
  proposal_entreprise
) => {
  persistData(StorageKeys.PROPOSAL_ENTREPRISE_CREATION, proposal_entreprise);
};
// save the user proposals in the local storage
export const saveProposalsToLocalStorage = (proposals) => {
  persistData(StorageKeys.PROPOSALS, proposals);
};

// save the user proposals in the local storage
export const saveProjectCreationToLocalStorage = (projectcreation) => {
  persistData(StorageKeys.PROJECT_CREATION, projectcreation);
};

// remove the user json object from local storage
export const removeUserFromLocalStorage = () => {
  removePersistData(StorageKeys.USER);
};

// remove the entreprise json object from local storage
export const removeProxyFromLocalStorage = () => {
  removePersistData(StorageKeys.PROXY);
};

// remove the entreprise json object from local storage
export const removeCountFolderInProgressFromLocalStorage = () => {
  removePersistData(StorageKeys.COUNT_FOLDER_INPROGRESS);
};

// remove the proxy type object from local storage
export const removeProxyTypeFromLocalStorage = () => {
  removePersistData(StorageKeys.PROXY_TYPE);
};
// remove the entreprise json object from local storage
export const removeEntrepriseFromLocalStorage = () => {
  removePersistData(StorageKeys.ENTREPRISE);
};
// remove the use token from local storage
export const removeTokenFromLocalStorage = () => {
  removePersistData(StorageKeys.TOKEN);
};
// remove the use stream token from local storage
export const removeStreamTokenFromLocalStorage = () => {
  removePersistData(StorageKeys.STREAMTOKEN);
};

// remove the use stream token from local storage
export const removeBalanceTokenFromLocalStorage = () => {
  removePersistData(StorageKeys.BALANCE);
};

// remove the use stream token from local storage
export const removeStreamIsloggedInFromLocalStorage = () => {
  removePersistData(StorageKeys.ISLOGGEDIN);
};
// remove the ProposalsEntreprise from local storage
export const removeProjetsFromLocalStorage = () => {
  removePersistData(StorageKeys.PROJECTS);
};
// remove the ProposalsEntreprise from local storage
export const removeProposalEntrepriseCreationFromLocalStorage = () => {
  removePersistData(StorageKeys.PROPOSAL_ENTREPRISE_CREATION);
};

// remove the ProposalCreation from local storage
export const removeProposalCreationFromLocalStorage = () => {
  removePersistData(StorageKeys.PROPOSAL_CREATION);
};
// remove the Proposals json object from local storage
export const removeProposalsLocalStorage = () => {
  removePersistData(StorageKeys.PROPOSALS);
};

// remove the Created project json object from local storage
export const removeCreatedProjectLocalStorage = () => {
  removePersistData(StorageKeys.PROJECT_CREATED);
};
// remove the Created project json object from local storage
export const removeCreationProjectLocalStorage = () => {
  removePersistData(StorageKeys.PROJECT_CREATION);
};
// remove the Created project json object from local storage
export const removeProjectProposalEntrepriseCreationLocalStorage = () => {
  removePersistData(StorageKeys.PROJECT_PROPOSAL_ENTREPRISE_CREATION);
};

// remove the user access ids from the local storage
export const removeResourcesFromLocalStorage = () => {
  removePersistData(StorageKeys.RESOURCES);
};

export const removeCountShareProjectFromLocalStorage = () => {
  removePersistData(StorageKeys.COUNT_SHARE_PROJECT);
};

export const removeCountComposeFreelanceFromLocalStorage = () => {
  removePersistData(StorageKeys.COUNT_COMPOSE_FREELANCE);
};
export const removeCountProductFromLocalStorage = () => {
  removePersistData(StorageKeys.COUNT_PRODUCT);
};
export const removeCountOffreFromLocalStorage = () => {
  removePersistData(StorageKeys.COUNT_OFFRE);
};
export const removeDashboardDetailFromLocalStorage = () => {
  removePersistData(StorageKeys.DASHBOARDDETAILS);
};

// decode a JWT token
export const parseJwt = (token) => {
  return jwtDecode(token);
};
export const clearLocalStorage = () => {
  localStorage.clear();
};

export const handleGenerate = (inputString) => {
  // Generate the SHA-256 hash
  const hash = CryptoJS.SHA256(inputString).toString(CryptoJS.enc.Base64);
  // Make sure to take the first 6 characters
  const shortUniqueString = hash
    .replace(/\+/g, "0")
    .replace(/=/g, "0")
    .replace(/\//g, "1")
    .substring(0, 6);
  return shortUniqueString;
};

export const useCandidatCheckProfile = (data) => {
  const [checkProfile, setCheckProfile] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfile = async () => {
      const url = await dispatch(
        getURL({
          location: `candidats/${data.id}/profil/cv`, // Use the id in the URL construction
        })
      );
      const fetchedUrl = url?.Contents?.map((item) => item?.Key)[0];
      if (
        fetchedUrl === undefined ||
        data.profile_description.lenght === 0 ||
        data.job.lenght === 0 ||
        data.country_details.lenght === 0 ||
        data.skills.lenght === 0
      ) {
        setCheckProfile(false);
      } else {
        setCheckProfile(true); // Or whatever you want to do in case of an error
      }
    };

    if (data) {
      fetchProfile();
    }
  }, [data, dispatch]);

  return checkProfile;
};
