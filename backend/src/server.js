import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import { inngest, functions } from "./lib/inngest.js";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";
import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoutes.js";
import codeRoutes from "./routes/codeRoutes.js";
import problemRoutes from "./routes/problemRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: function (origin, callback) {
    const allowed = [
      process.env.CLIENT_URL,  // https://smart-hire-delta.vercel.app
    ];

    // Allow all Vercel preview deployments for this project
    const isVercelPreview = origin && origin.match(
      /^https:\/\/smart-hire.*\.vercel\.app$/
    
    );

    if (!origin || allowed.includes(origin) || isVercelPreview) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));
app.use(clerkMiddleware());

// Request logger
app.use((req, res, next) => {
  console.log(`➡️  ${req.method} ${req.path}`);
  next();
});

// Health check (no auth needed)
app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

// Routes
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/sessions", sessionRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/code", codeRoutes);
app.use("/api/problems", problemRoutes);

// 404 fallback — helps debug missing routes in production
app.use((req, res) => {
  res.status(404).json({ error: `Route not found: ${req.method} ${req.path}` });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server ❌:", error);
  }
};

startServer();