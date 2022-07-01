// In Vite, you access environment variables with `import.meta.env.<prefix: VITE_>` instead of `process.env.<prefix: REACT_APP_>`
const placeholderBaseURL = import.meta.env.VITE_API_URL as string;

const authBaseURL = import.meta.env.VITE_AUTH_URL as string;

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID as string;
const facebookClientId = import.meta.env.VITE_FACEBOOK_CLIENT_ID as string;

const config = Object.freeze({
  placeholderBaseURL,
  authBaseURL,
  googleClientId,
  facebookClientId,
});
export default config;
