import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { handleGenerate } from "core/helpers/storage";
import { jwtDecode } from "jwt-decode";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Tinode } from "tinode-sdk";
import { useDeleteUserMutation } from "../../../redux/api/api-chat-mongodb/api-chat-mongodbAPI";
import { useSignupRecruiterMutation } from "../../../redux/api/auth/authApi";

const clientId = "768465973915-4bracoan7b659kt73lvp1ros3p46v4ce.apps.googleusercontent.com";
const API_KEY = process.env.REACT_APP_TINODE_API_KEY;
const APP_NAME = process.env.REACT_APP_APP_NAME;
const DEFAULT_HOST = process.env.REACT_APP_TINODE_DB_URL;
const PWD = process.env.REACT_APP_TINODE_CHAT_PWD;
const DEFEAULT_IMG = process.env.REACT_APP_IMG_CANDIDAT_DEFAULT;

const GoogleAuthRecruter = () => {
  const navigate = useNavigate();
  const [signupRecruiter] = useSignupRecruiterMutation();
  const [errorSignup, setErrorSignup] = useState(null);
  const [deleteRecruterMongodb] = useDeleteUserMutation();

  const tinodeSetup = new Tinode({
    appName: APP_NAME,
    host: DEFAULT_HOST,
    apiKey: API_KEY,
    transport: "ws",
    secure: true,
    persist: false,
  });

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

  const gtagSendEvent = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag('event', 'conversion_event_signup', {
        // Add any additional event parameters if needed
      });
    } else {
      console.error("gtag is not defined");
    }
  };

  const handleError = () => {
    setErrorSignup("Login failed. Please try again.");
  };

  const SignUp = async (name, courier, googleid) => {
    try {
      let tinodeId;
      const timestamps = new Date();
      const usernameTinode = handleGenerate("recruter" + name + timestamps).toString();


      // Establish connection to Tinode
      try {
        await tinodeSetup.connect(DEFAULT_HOST);
      } catch (connectionError) {
        console.error("Failed to connect to ChatApi:", connectionError);
        setErrorSignup("Failed to connect to ChatApi: " + connectionError.message);
        return;
      }

      // Try to create a basic account
      try {
        const cred_ = { meth: "email", val: courier };
        const public_ = {
          fn: name,
          photo: { ref: DEFEAULT_IMG },
        };

        const ctrl = await tinodeSetup.createAccountBasic(usernameTinode, PWD, {
          public: public_,
          cred: Tinode.credential(cred_),
        });

        // Check response code
        if (ctrl.code === 200 && ctrl.text === "ok") {
          tinodeId = tinodeSetup._myUID.substring(3);
        } else {
          setErrorSignup("Account creation failed with an unexpected response.");
          return;
        }
      } catch (accountError) {
        console.error("Failed to create account:", accountError);
        setErrorSignup("Account creation failed. The username may be taken.");
        return;
      } finally {
        tinodeSetup.disconnect(); // Ensure this is called whether or not account creation succeeded
      }

      // Final signup API call
      try {
        await signupRecruiter({
          name,
          first_name: "", // Add first name if needed
          email: courier,
          googleid: googleid,
          password: "", // if using Google account, a password might not be required
          chatid: tinodeId,
          proxy: "dashboard", // You can set the proxy if needed
          usernamechat: usernameTinode,
        }).unwrap();
      } catch (signupError) {
        if (tinodeId) {
          await deleteRecruterMongodb(tinodeId); // Ensure this runs only if tinodeId is set
        }
        console.error("Signup API call failed:", signupError?.data?.error);
        setErrorSignup(signupError?.data?.error || "An error occurred during signup.");
        return; // Exit if there's an error
      }

      gtagSendEvent();
      // Optionally: Redirect after successful signup or any additional logic needed
      window.location.reload();

    } catch (error) {
      console.error("An unexpected error occurred:", error);
      setErrorSignup("An unexpected error occurred. Please try again.");
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

export default GoogleAuthRecruter;