export const DB_NAME = "Chatbot";
import express from 'express';
const app = express()
export const URL =
  app.settings.env === "development"
    ? "http://localhost:5173"
    : "https://chatbot-41s6r4mhj-mohammedniyask.vercel.app";
