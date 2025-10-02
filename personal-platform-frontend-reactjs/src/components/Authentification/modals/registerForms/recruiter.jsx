/* eslint-disable jsx-a11y/anchor-is-valid */
import { jwtDecode } from "jwt-decode";
import { useState , useEffect } from "react";
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
import { useSignupRecruiterMutation } from "../../../../redux/api/auth/authApi";
import { useDeleteRecruterMutation } from "../../../../redux/api/recruter/recruterApi";
import {
  EyeButton,
  FormGroupRegister,
  FormGroupRegisterTwoCol,
  FormWrapper,
  LabelStyle,
  LoginButton,
  TermsText,
  WrapperRowCenter,
  StyleContentModal
} from "../styled";
import { Mail ,Eye, EyeOff } from "lucide-react"; // Import the required icons
import GoogleAuthRecruter from "components/GoogleAuth/Signup/GoogleAuthRecruter";

const RecruiterForm = ({ proxy, handleModalRegister }) => {
  const API_KEY = process.env.REACT_APP_TINODE_API_KEY;
  const APP_NAME = process.env.REACT_APP_APP_NAME;
  const DEFAULT_HOST = process.env.REACT_APP_TINODE_DB_URL;
  const PWD = process.env.REACT_APP_TINODE_CHAT_PWD;
  const DEFEAULT_IMG = process.env.REACT_APP_IMG_CANDIDAT_DEFAULT;

  const [name, setUserName] = useState("");
  const [first_name, setUserFirstName] = useState("");
  const [isNameValid, setIsNameValid] = useState(true); 
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [password, setPassword] = useState("");
  const [courier, setCourier] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
  const [showPassword, setShowPassword] = useState(false);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [signupRecruiter, { isLoading }] = useSignupRecruiterMutation();
  const [isAgreed, setIsAgreed] = useState(false);
  const [errorSignup,setErrorSignup]= useState();
  const [deleteRecruterMongodb] = useDeleteUserMutation();
  const [deleteRecruterPostgres] = useDeleteRecruterMutation();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
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
      const usernametinode = handleGenerate(
        "recruter" + name.replace(/\s+/g, '') + first_name.replace(/\s+/g, '') + timestamps
      ).toString();

      // Establish connection to Tinode
      try {
        await tinodeSetup.connect(DEFAULT_HOST);
      } catch (connectionError) {
        console.error("Failed to connect to ChatApi:", connectionError);
        setErrorSignup("Failed to connect to ChatApi:", connectionError);
        return ;
      }

      // Try to create a basic account
      try {
        const cred_ = { meth: "email", val: courier };
        const public_ = {
          fn: name + " " + first_name,
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
          setErrorSignup("Account creation failed with an unexpected response.");
          return ;

        }
      } catch (accountError) {
        tinodeSetup.disconnect();
        console.error("Failed to create account:", accountError);
        setErrorSignup("LastName and First Name was taken ");
        return ;

      }

      // Final signup API call
      try {
        await signupRecruiter({
          name: name,
          first_name: first_name,
          email: courier,
          password: password,
          chatid: tinodeId,
          proxy: proxy,
          usernamechat: usernametinode,
        }).unwrap();
      } catch (signupError) {
        deleteRecruterMongodb(tinodeId);
        console.error("Signup API call failed:", signupError.data.error);
        setErrorSignup(signupError.data.error);
        return; // Exit if the email is not valid

      }

      const token = await getAccessToken();
      const decodeToken = token ? jwtDecode(token) : null;

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
          name + " " + first_name,
          courier,
          decodeToken.role,
          decodeToken.verificationToken,
          proxy
        );
      } catch (sendEmailVerificationError) {
        console.error("Failed to send Email :", sendEmailVerificationError);
        deleteRecruterMongodb(decodeToken.chatid);
        deleteRecruterPostgres(decodeToken.id);
        setErrorSignup("Failed to send Email :", sendEmailVerificationError);
        return; // Exit if the email is not valid
      }

      gtagSendEvent();
      navigate(`/checkyouremailplz`, { replace: true });
    } catch (e) {
      // Log the error for debugging
      console.error("An error occurred during signup:", e.message);
      setErrorSignup("An error occurred during signup:", e.message);

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
      return ;

    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!isAgreed) {
      toast.error("You must agree to the terms and conditions before signing up.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return; // Exit the function if not agreed
    }
    if (!isNameValid) {
      toast.error("Username should not contain spaces.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return; // Exit if the username is not valid
    }
    if (!isFirstNameValid) {
      toast.error("Username should not contain spaces.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return; // Exit if the username is not valid
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
      <GoogleAuthRecruter />
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
        {errorSignup && (
        <> 
          <medium style={{ color: "red" , paddingLeft: "20px" , fontSize: "20px"}}>{errorSignup}</medium> <br/> </>
        )}
      <WrapperRowCenter>
        <FormGroupRegisterTwoCol style={{ paddingRight: "20px" }}>
          <LabelStyle htmlFor="name">
            Nom de famille
          </LabelStyle>
          <input
            type="text"
            id="name"
            placeholder="Entrez votre nom de famille"
            value={name}
            style={{ color: 'white', backgroundColor: 'transparent' }} // Set text color to white
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            required
          />
          {!isNameValid && (
            <small style={{ color: "red" }}>
              Username should not contain spaces.
            </small>
          )}
        </FormGroupRegisterTwoCol>
        <FormGroupRegisterTwoCol>
          <label htmlFor="prenom">
            Prénom
          </label>
          <input
            type="text"
            id="prenom"
            placeholder="Entrez votre prénom"
            value={first_name}
            style={{ color: 'white', backgroundColor: 'transparent' }} // Set text color to white
            onChange={(e) => {
              setUserFirstName(e.target.value);
            }}
            required
          />
          {!isFirstNameValid && (
            <small style={{ color: "red" }}>
              First name should not contain spaces.
            </small>
          )}
        </FormGroupRegisterTwoCol>
      </WrapperRowCenter>

      <FormGroupRegister>
        <label htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Entrez votre email"
          style={{ color: 'white', backgroundColor: 'transparent' }} // Set text color to white
          value={courier}
          className={isEmailValid ? "" : "is-invalid"}
          onChange={(e) => {
            setCourier(e.target.value);
            setIsEmailValid(emailRegex.test(e.target.value));
          }}
          required
        />
        {/* Display the error message if the email is invalid */}
        {!isEmailValid && (
          <small style={{ color: "red" }}>
            Please enter a valid email address.
          </small>
        )}
      </FormGroupRegister>
      <FormGroupRegister>
        <label htmlFor="password">
          Mot de passe
        </label>
        <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
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
      <div>
    </div>
   </FormWrapper> 
  </StyleContentModal>
  );
};

export default RecruiterForm;
