const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://chatbot-zgr7.onrender.com";

export { BASE_URL };
