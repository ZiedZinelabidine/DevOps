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
import { useDeleteAccountingMutation } from "../../../../redux/api/accounting/accountingApi";
import { useDeleteUserMutation } from "../../../../redux/api/api-chat-mongodb/api-chat-mongodbAPI";
import { useSignupAccountingMutation } from "../../../../redux/api/auth/authApi";
import {
  EyeButton,
  FormGroupRegister,
  FormGroupRegisterTwoCol,
  FormWrapper,
  LabelStyle,
  LoginButton,
  TermsText,
  WrapperRowCenter,
} from "../styled";

const AccountingForm = ({ proxy, handleModalRegister }) => {
  const API_KEY = process.env.REACT_APP_TINODE_API_KEY;
  const APP_NAME = process.env.REACT_APP_APP_NAME;
  const DEFAULT_HOST = process.env.REACT_APP_TINODE_DB_URL;
  const PWD = process.env.REACT_APP_TINODE_CHAT_PWD;
  const DEFEAULT_IMG = process.env.REACT_APP_IMG_CANDIDAT_DEFAULT;

  const [name, setUserName] = useState("");
  const [first_name, setUserFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [courier, setCourier] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [signupAccounting, { isLoading }] = useSignupAccountingMutation();
  const [isAgreed, setIsAgreed] = useState(false);
  const [deleteAccountingMongodb] = useDeleteUserMutation();
  const [deleteAccountingPostgres] = useDeleteAccountingMutation();

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
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
      const usernametinode = handleGenerate(
        "accounting" + name + first_name
      ).toString();

      // Establish connection to Tinode
      try {
        await tinodeSetup.connect(DEFAULT_HOST);
      } catch (connectionError) {
        console.error("Failed to connect to ChatApi:", connectionError);
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
      
        }
      } catch (accountError) {
        tinodeSetup.disconnect();
        console.error("Failed to create account:", accountError);
       
      }

      // Final signup API call
      try {
        await signupAccounting({
          name: name,
          first_name: first_name,
          email: courier,
          password: password,
          chatid: tinodeId,
          usernamechat: usernametinode,
        }).unwrap();
      } catch (signupError) {
        deleteAccountingMongodb(decodeToken.chatid);
        console.error("Signup API call failed:", signupError);
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
        deleteAccountingMongodb(decodeToken.chatid);
        deleteAccountingPostgres(decodeToken.id);
      }

      navigate(`/checkyouremailplz`, { replace: true });
    } catch (e) {
      // Log the error for debugging
      console.error("An error occurred during signup:", e.message);

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
    }
  };
  

  const handleSignUp = async (e) => {
    e.preventDefault();
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
    SignUp();
  };

  return (
    <FormWrapper onSubmit={handleSignUp}>
      <WrapperRowCenter>
        <FormGroupRegisterTwoCol style={{ paddingRight: "20px" }}>
          <LabelStyle htmlFor="name">
            Nom de famille<sup>*</sup>
          </LabelStyle>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </FormGroupRegisterTwoCol>
        <FormGroupRegisterTwoCol>
          <label htmlFor="prenom">
            First name<sup>*</sup>
          </label>
          <input
            type="text"
            id="prenom"
            value={first_name}
            onChange={(e) => setUserFirstName(e.target.value)}
            required
          />
        </FormGroupRegisterTwoCol>
      </WrapperRowCenter>

      <FormGroupRegister>
        <label htmlFor="email">
          Email <sup>*</sup>
        </label>
        <input
          type="email"
          id="email"
          value={courier}
          className={isEmailValid ? "" : "is-invalid"}
          onChange={(e) => {
            setCourier(e.target.value);
            setIsEmailValid(emailRegex.test(e.target.value));
          }}
          required
        />
      </FormGroupRegister>
      <FormGroupRegister>
        <label htmlFor="password">
          Password<sup>*</sup>
        </label>
        <div className="d-flex">
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            placeholder="***********************************"
            value={password}
            className={isPasswordValid ? "" : "is-invalid"}
            onChange={(e) => {
              setPassword(e.target.value);
              setIsPasswordValid(passRegex.test(e.target.value));
            }}
            required
          />
          <EyeButton
            type="button"
            className="eye-button"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? (
              <i className="fa-solid fa-eye"></i>
            ) : (
              <i className="fa-solid fa-eye-slash"></i>
            )}
          </EyeButton>
        </div>
        <div className="text-start mt-2">
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
          Yes, I understand and agree to the{" "}
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
          ,including the
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
          and{" "}
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
        {isLoading ? "Loading..." : "Create account"}
      </LoginButton>
    </FormWrapper>
  );
};

export default AccountingForm;
