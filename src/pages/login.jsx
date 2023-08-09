import { auth } from "../config/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "./login.css";

const Login = ({ setIsLogin }) => {
  const provider = new GoogleAuthProvider();
  const handelClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setIsLogin(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error);
      });
  };
  return (
    <div id="login-main">
      <h1>Chatar 👋</h1>
      <p>A Fast 🚀, Safe and Secure 🔑 chat app made in React and Firebase.</p>
      <div id="buttons">
      <button onClick={handelClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="705.6"
          height="720"
          viewBox="0 0 186.69 190.5"
          xmlns:v="https://vecta.io/nano"
        >
          <g transform="translate(1184.583 765.171)">
            <path
              clip-path="none"
              mask="none"
              d="M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z"
              fill="#4285f4"
            />
            <path
              clip-path="none"
              mask="none"
              d="M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z"
              fill="#34a853"
            />
            <path
              clip-path="none"
              mask="none"
              d="M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z"
              fill="#fbbc05"
            />
            <path
              d="M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z"
              fill="#ea4335"
              clip-path="none"
              mask="none"
            />
          </g>
        </svg>{" "}
        Login with Google
      </button>
      <button disabled id="button-disabled" tooltip="Login with facebook app not available!">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xml:space="preserve"
          viewBox="0 0 40 40"
        >
          <linearGradient
            id="a"
            x1="-277.375"
            x2="-277.375"
            y1="406.6018"
            y2="407.5726"
            gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#0062e0" />
            <stop offset="1" stop-color="#19afff" />
          </linearGradient>
          <path
            fill="url(#a)"
            d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z"
          />
          <path
            fill="#fff"
            d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z"
          />
        </svg>
        Login with Fasebook
      </button>
      </div>
    </div>
  );
};

export default Login;
