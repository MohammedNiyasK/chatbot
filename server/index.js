import "dotenv/config";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import postRoutes from "./routes/chat.route.js";
import { connectDB } from "./config/db.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: [
      "https://chatbot-orpin-nine.vercel.app",
      "http://localhost:5173",
    ],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");
});

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.use("/", postRoutes);

connectDB()
  .then(() => {
    httpServer.listen(process.env.PORT || 8000, () =>
      console.log(`Server up and running on port ${process.env.PORT}!`)
    );
  })
  .catch((error) => {
    console.log("MONGO db connection failed !!! ", err);
  });

export { io };
