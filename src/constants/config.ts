// In Vite, you access environment variables with `import.meta.env.<prefix: VITE_>` instead of `process.env.<prefix: REACT_APP_>`
const coreBaseURL = import.meta.env.VITE_API_URL as string;

const config = Object.freeze({
  coreBaseURL,
});
export default config;
