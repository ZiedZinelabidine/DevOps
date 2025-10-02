import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useState } from 'react';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Tinode } from "tinode-sdk";
import { useDeleteUserMutation } from "../../../redux/api/api-chat-mongodb/api-chat-mongodbAPI";
import { useLoginMutation, useSignupRecruiterMutation } from "../../../redux/api/auth/authApi";
const clientId = "768465973915-4bracoan7b659kt73lvp1ros3p46v4ce.apps.googleusercontent.com";
const API_KEY = process.env.REACT_APP_TINODE_API_KEY;
const APP_NAME = process.env.REACT_APP_APP_NAME;
const DEFAULT_HOST = process.env.REACT_APP_TINODE_DB_URL;
const PWD = process.env.REACT_APP_TINODE_CHAT_PWD;
const DEFEAULT_IMG = process.env.REACT_APP_IMG_CANDIDAT_DEFAULT;


const GoogleAuthLogin = () => {
  const navigate = useNavigate();
  const [signupRecruiter] = useSignupRecruiterMutation();
  const [errorSignup, setErrorSignup] = useState(null);
  const [deleteRecruterMongodb] = useDeleteUserMutation();
  const [login, { isLoading }] = useLoginMutation();

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
      await connect(profileGmail.email, profileGmail.sub);
    } catch (error) {
      console.error('Error in handling success response:', error);
      setErrorSignup("Failed to process login response.");
    }
  };

  const handleError = () => {
    setErrorSignup("Login failed. Please try again.");
  };

  const connect = async (email, googleid) => {
    try {
      await login({
        email: email,
        googleid: googleid,
      }).unwrap();

      toast.success("Login success", {
        position: "top-center",
        autoClose: 3000,
      });

      window.location.reload();

    } catch (e) {
      toast.error(`Login Failed : ${e.data.message}`, {
        position: "top-center",
        autoClose: 3000,
      });
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

export default GoogleAuthLogin;