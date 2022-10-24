const config = {
  apiHost: import.meta.env.VITE_API,
  env: import.meta.env.VITE_ENV,
  base: import.meta.env.VITE_ENV == "dev" ? "/" : "/authentication-app",
};

export default config;
