/* eslint-disable jsx-a11y/anchor-is-valid */
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Tinode } from "tinode-sdk";
import {
  getAccessToken,
  handleGenerate,
  sendVerificationEmail,
} from "../../../../core/helpers/storage";
import { useDeleteUserMutation } from "../../../../redux/api/api-chat-mongodb/api-chat-mongodbAPI";
import { useSignupEntrepriseMutation } from "../../../../redux/api/auth/authApi";
import { useDeleteEntrepriseMutation } from "../../../../redux/api/entreprise/entrepriseApi";
import {
  EyeButton,
  FormGroupRegister,
  FormWrapper,
  LoginButton,
  StyleContentModal,
  TermsText,
} from "../styled";
import { Mail ,Eye, EyeOff } from "lucide-react"; // Import the required icons
import GoogleAuthEntreprise from "components/GoogleAuth/Signup/GoogleAuthEntreprise";

const BusinessForm = ({ proxy, handleModalRegister }) => {
  const API_KEY = process.env.REACT_APP_TINODE_API_KEY;
  const APP_NAME = process.env.REACT_APP_APP_NAME;
  const DEFAULT_HOST = process.env.REACT_APP_TINODE_DB_URL;
  const PWD = process.env.REACT_APP_TINODE_CHAT_PWD;
  const DEFEAULT_IMG = process.env.REACT_APP_IMG_ENTREPRISE_DEFAULT;

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [courier, setCourier] = useState("");
  const [errorSignup,setErrorSignup]= useState();
  const [isUserNameValid, setIsUserNameValid] = useState(true); // State for username validity
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [signupEntreprise, { isLoading }] = useSignupEntrepriseMutation();
  const [deleteEntrepriseMongodb] = useDeleteUserMutation();
  const [deleteEntreprisePostgres] = useDeleteEntrepriseMutation();
  const [isAgreed, setIsAgreed] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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

  const tinodeSetup = new Tinode(
    {
      appName: APP_NAME,
      host: DEFAULT_HOST,
      apiKey: API_KEY,
      transport: "ws",
      secure: true,
      persist: false,
    }
    // onsetupCompleted
  );
  tinodeSetup.enableLogging(true, true);
  tinodeSetup.setHumanLanguage("en-US");

  const SignUp = async () => {
    try {
      let tinodeId;
      const timestamps = new Date();
      const usernametinode = handleGenerate( "entreprise" + username.replace(/\s+/g, '') + timestamps).toString();
      let token ;
      let decodeToken ;

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
          fn: username,
          photo: { type: "png", ref: DEFEAULT_IMG },
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
          setErrorSignup("Account creation failed with an unexpected response.");
          return; // Exit if the email is not valid

        }
      } catch (accountError) {
        tinodeSetup.disconnect();
        console.error("Failed to create account:", accountError);
        setErrorSignup("Username was taken ");
        return; // Exit if the email is not valid

      }

      // Final signup API call
      try {
         await signupEntreprise({
          username: username,
          email: courier,
          password: password,
          chatid: tinodeId,
          proxy: proxy,
          usernamechat: usernametinode,
        }).unwrap();

      } catch (signupError) {
        deleteEntrepriseMongodb(tinodeId);
        console.error("Signup API call failed:", signupError.data.error);
        setErrorSignup(signupError.data.error);
        return; // Exit if the email is not valid

      }

      
      token = await getAccessToken();
      decodeToken = token ? jwtDecode(token) : null;

      // Success notification
      toast.success("Please verify your email to activate your account.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      try {
        sendVerificationEmail(
          username,
          courier,
          decodeToken.role,
          decodeToken.verificationToken,
          proxy
        );
      } catch (sendEmailVerificationError) {
        console.error("Failed to send Email :", sendEmailVerificationError);
        setErrorSignup("Failed to send Email :", sendEmailVerificationError);
        deleteEntrepriseMongodb(decodeToken.chatid);
        deleteEntreprisePostgres(decodeToken.id);
        return; // Exit if the email is not valid

      }

     // Send just the Google Tag event without redirecting
     gtagSendEvent();

      navigate(`/checkyouremailplz`, { replace: true });
    } catch (e) {
      console.error("An error occurred during signup:", e.message);
      setErrorSignup("An error occurred during signup:", e.message);

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

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!isUserNameValid) {
      toast.error("Username cannot contain spaces.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return; // Exit the function if the username is invalid
    }
    if (!isAgreed) {
      toast.error(
        "You must agree to the terms and conditions before signing up.",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      return; // Exit the function if not agreed
    }
    if (!isEmailValid) {
      toast.error("Please enter a valid email address.", {
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
    if (!isPasswordValid) {
      toast.error("Password must contain at least 8 characters, one uppercase letter, and one special character.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return; // Exit if the password is not valid
    }
    
    SignUp();
  };

  return (

    <StyleContentModal> 
    <hr />
    <GoogleAuthEntreprise />
    <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0', textAlign: 'center' }}>
          <hr style={{ flex: 1, border: 'none', borderTop: '1px solid #ccc', margin: '10px' }} />
          <span style={{
              padding: '0 10px', // Add some padding around the text
              fontWeight: 'bold', // Optional: make the text bold
              color: '#333'
          }}>
              OR
          </span>
          <hr style={{ flex: 1, border: 'none', borderTop: '1px solid #ccc', margin: '10px' }} />
      </div>

    <FormWrapper onSubmit={handleSignUp}>
      <FormGroupRegister>
      {errorSignup && (
        <> 
          <medium style={{ color: "red" , paddingLeft: "20px" , fontSize: "20px"}}>{"Erreur lors de l'inscription, veuillez réessayer plus tard."}</medium> <br/> 
        </>
          )}
        <label htmlFor="username">
          Username
        </label>
        <input
          type="text"
          id="username"
          placeholder="exemple : ItGalaxy"
          value={username}
          onChange={(e) => {
            const value = e.target.value;
            setUserName(value);
           // setIsUserNameValid(!/\s/.test(value)); // Check for spaces
          }}
          required
        />
        {!isUserNameValid && (
          <small style={{ color: "red" }}>
            Username should not contain spaces.
          </small>
        )}
      </FormGroupRegister>
      <FormGroupRegister>
        <label htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={courier}
          placeholder="Entrez votre email"
          className={isEmailValid ? "" : "is-invalid"}
          onChange={(e) => {
            setCourier(e.target.value);
            setIsEmailValid(emailRegex.test(e.target.value));
          }}
          required
        />
        {!isEmailValid && (
          <small style={{ color: "red" }}>Please enter a valid email address.</small>
        )}
      </FormGroupRegister>
      <FormGroupRegister>
        <label htmlFor="password">
         Mot de passe
        </label>
        <div style={{ color: 'white' ,display: "flex", alignItems: "center", position: "relative" }}>
            <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Entrez votre mot de passe"
                value={password}
                className={isPasswordValid ? "" : "is-invalid"} // Add your CSS classes
                onChange={(e) => {
                    setPassword(e.target.value);
                    setIsPasswordValid(passRegex.test(e.target.value));
                }}
                required
                style={{ paddingRight: "40px" }} // Add padding to prevent text from overlapping the icon
            />
            <span 
                onClick={togglePasswordVisibility} 
                style={{ cursor: "pointer", marginLeft: "-30px" }} // Adjust margin to position the icon
            >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
        </div>
        {!isPasswordValid && (
          <small style={{ color: "red" }}>
            Please enter a valid password.
          </small>
           )}
       <div className="text-start mt-2" style={{ fontSize: "10px" }} >
          {password.length >= 8 ? (
            <span className="text-success me-2">
              <i className="fa-solid fa-circle"></i> 8 characters
            </span>
          ) : (
            <span className="text-danger me-2">
              <i className="fa-solid fa-circle"></i> 8 characters
            </span>
          )}
          {/[A-Z]/.test(password) ? (
            <span className="text-success me-2">
              <i className="fa-solid fa-circle"></i> 1 capital letter
            </span>
          ) : (
            <span className="text-danger me-2">
              <i className="fa-solid fa-circle"></i> 1 capital letter
            </span>
          )}
          {/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password) ? (
            <span className="text-success me-2">
              <i className="fa-solid fa-circle"></i> 1 special character
            </span>
          ) : (
            <span className="text-danger me-2">
              <i className="fa-solid fa-circle"></i> 1 special character
            </span>
          )}
        </div>
      </FormGroupRegister>
      <div style={{ padding: "9px 1px 3px 1px" }}>
        <TermsText>
          <input
            type="checkbox"
            id="agreeTerms"
            checked={isAgreed}
            onChange={() => setIsAgreed(!isAgreed)} // Toggle checkbox state
          />{" "}
          Oui, je comprends et j'accepte les{" "}
          <a
            href="/termsofservice"
            target="_blank"
            rel="noopener noreferrer" // Security measure
            style={{
              color: "#009FF5",
              fontFamily: "Roboto",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "20px",
            }}
          >
            ItGalaxy Terms of Service
          </a>{" "}
          ,y compris le
          <a
            href="/useragreement"
            target="_blank"
            rel="noopener noreferrer" // Security measure
            style={{
              color: "#009FF5",
              fontFamily: "Roboto",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "20px",
            }}
          >
            {" "}
            User Agreement
          </a>{" "}
          et{" "}
          <a
            href="/privacypolicy"
            target="_blank"
            rel="noopener noreferrer" // Security measure
            style={{
              color: "#009FF5",
              fontFamily: "Roboto",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "20px",
            }}
          >
            Privacy Policy
          </a>
          .
        </TermsText>
      </div>

      <LoginButton onClick={handleSignUp} disabled={isLoading}>
      {isLoading ? "Loading..." : "Créer un compte avec Email"}
      <Mail size={20} style={{ marginLeft: '12px' }} /> {/* Add Mail icon here */}
      </LoginButton>   
    </FormWrapper>
    </StyleContentModal>
  );
};

export default BusinessForm;
