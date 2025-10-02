import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { getAccessToken, handleGenerate } from "core/helpers/storage";
import { jwtDecode } from "jwt-decode";
import { useState } from 'react';
import toast from "react-hot-toast";
import { Tinode } from "tinode-sdk";
import { useDeleteUserMutation } from "../../../redux/api/api-chat-mongodb/api-chat-mongodbAPI";
import { useSignupCandidatMutation } from "../../../redux/api/auth/authApi";
import { useCreateRecrutementMutation } from "../../../redux/api/recrutements/recrutementApi";

const clientId = "768465973915-4bracoan7b659kt73lvp1ros3p46v4ce.apps.googleusercontent.com";
const API_KEY = process.env.REACT_APP_TINODE_API_KEY;
const APP_NAME = process.env.REACT_APP_APP_NAME;
const DEFAULT_HOST = process.env.REACT_APP_TINODE_DB_URL;
const PWD = process.env.REACT_APP_TINODE_CHAT_PWD;
const DEFEAULT_IMG = process.env.REACT_APP_IMG_CANDIDAT_DEFAULT;

const GoogleAuthAgency = (recruitment_token) => {
  const [errorSignup, setErrorSignup] = useState(null);
  const [deleteCandidatMongodb] = useDeleteUserMutation();
  const [deleteCandidatPostgres] = useDeleteUserMutation();
  const [createRecrutement] = useCreateRecrutementMutation();
  const [signupCandidat, { isLoading }] = useSignupCandidatMutation();

  const tinodeSetup = new Tinode({
    appName: APP_NAME,
    host: DEFAULT_HOST,
    apiKey: API_KEY,
    transport: "ws",
    secure: true,
    persist: false,
  });

  const gtagSendEvent = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag('event', 'conversion_event_signup', {
        // Add any additional event parameters if needed
      });
    } else {
      console.error("gtag is not defined");
    }
  };

  tinodeSetup.enableLogging(true, true);
  tinodeSetup.setHumanLanguage("en-US");

  const handleSuccess = async (credentialResponse) => {
    try {
      const token = credentialResponse.credential;
      const profileGmail = jwtDecode(token);
      await SignUp(profileGmail.name, profileGmail.email, profileGmail.sub);
    } catch (error) {
      console.error('Error in handling success response:', error);
      setErrorSignup("Failed to process login response.");
    }
  };

  const handleError = () => {
    setErrorSignup("Login failed. Please try again.");
  };

  const SignUp = async (name, courier, googleid) => {
    try {
      let tinodeId;

      const timestamps = new Date();
      const usernametinode = handleGenerate("candidat" + name + timestamps).toString();


      // Establish connection to Tinode
      try {
        await tinodeSetup.connect(DEFAULT_HOST);
      } catch (connectionError) {
        console.error("Failed to connect to ChatApi:", connectionError);
        setErrorSignup(connectionError);
        return; // Exit if the email is not valid

      }
      // Try to create a basic account
      try {
        const cred_ = { meth: "email", val: courier };
        const public_ = {
          fn: name,
          photo: { ref: DEFEAULT_IMG },
        };

        let tags_ = null; // Initialize if needed
        let _attachments = null; // Initialize if needed

        const ctrl = await tinodeSetup.createAccountBasic(usernametinode, PWD, {
          public: public_,
          tags: tags_,
          cred: Tinode.credential(cred_),
          attachments: _attachments,
        });

        if ((ctrl.code = 200 && ctrl.text === "ok")) {
          tinodeId = tinodeSetup._myUID.substring(3);
          tinodeSetup.disconnect();
        } else {
          tinodeSetup.disconnect();
        }
      } catch (accountError) {
        tinodeSetup.disconnect();
        console.error("Failed to create account:", accountError);
        setErrorSignup("LastName and First Name was taken ");
        return; // Exit if the email is not valid

      }

      // Final signup API call
      try {
        await signupCandidat({
          name: name,
          first_name: "",
          type_candidat: 'AGENCY',
          email: courier,
          googleid: googleid,
          password: "",
          chatid: tinodeId,
          proxy: "dashboard",
          usernamechat: usernametinode,
        }).unwrap();
      } catch (signupError) {
        deleteCandidatMongodb(tinodeId);
        console.error("Signup API call failed:", signupError.data.error);
        setErrorSignup(signupError.data.error);
        return; // Exit if the email is not valid

      }

      const token = await getAccessToken();
      const decodeToken = token ? jwtDecode(token) : null;
      const recrutedId = decodeToken ? decodeToken.id : null;
      const recruted_type = decodeToken ? decodeToken.role : null;

      if (recruitment_token) {
        const recruitmentData = {
          recrutertoken: recruitment_token,
          recrutedId: recrutedId,
          recruted_type: recruted_type,
        };

        try {
          await createRecrutement(recruitmentData);
        } catch (e) {
          deleteCandidatMongodb(decodeToken.chatid);
          deleteCandidatPostgres(decodeToken.id);
          console.error("createRecrutment API call failed:", e);
          setErrorSignup(e);
          return; // Exit if the email is not valid

        }
      }
     
      gtagSendEvent();
      window.location.href = `/dashboardCandidat`;


    } catch (e) {
      // Log the error for debugging
      console.error("An error occurred during signup:", e.message);
      setErrorSignup("An error occurred during signup:" + e.message);

      // Show user-friendly error message
      toast.error(e.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return; // Exit if the email is not valid
    }
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '0 20px',
        boxSizing: 'border-box'
      }}>
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleError}
            theme="filled_blue"
            size="large"
            shape="circle"
            useOneTap
          />
        </div>
        {errorSignup && (
          <p style={{
            color: 'red',
            marginTop: '2%',
            textAlign: 'center'
          }}>
            {errorSignup}
          </p>
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleAuthAgency;