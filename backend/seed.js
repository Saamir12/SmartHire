import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectDB } from "./src/lib/db.js";
import Problem from "./src/models/Problem.models.js";
import { PROBLEMS } from "../frontend/src/data/problems.js";

dotenv.config();

const seed = async () => {
  try {
    await connectDB();
    const problemsArray = Object.values(PROBLEMS);
    
    // Clear existing
    await Problem.deleteMany({});
    console.log("Cleared existing problems");
    
    // Insert new
    await Problem.insertMany(problemsArray);
    console.log(`Successfully seeded ${problemsArray.length} problems`);
    
    process.exit(0);
  } catch (error) {
    console.error("Error seeding problems:", error);
    process.exit(1);
  }
};

seed();
