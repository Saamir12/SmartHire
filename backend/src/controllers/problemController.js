import Problem from "../models/Problem.models.js";
import path from "path";
import fs from "fs";

export const getProblems = async (req, res) => {
  try {
    const problems = await Problem.find({});
    res.status(200).json(problems);
  } catch (error) {
    console.error("Error in getProblems controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getProblemById = async (req, res) => {
  try {
    const problemId = req.params.id;
    const problem = await Problem.findOne({ id: problemId });
    if (!problem) {
      return res.status(404).json({ error: "Problem not found" });
    }
    res.status(200).json(problem);
  } catch (error) {
    console.error("Error in getProblemById controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createProblem = async (req, res) => {
  try {
    const newProblem = new Problem(req.body);
    const savedProblem = await newProblem.save();
    res.status(201).json(savedProblem);
  } catch (error) {
    console.error("Error in createProblem controller:", error);
    // Handle duplicate key error
    if (error.code === 11000) {
      return res.status(400).json({ error: "Problem with this ID already exists" });
    }
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const seedProblems = async (req, res) => {
  try {
    const problemsToSeed = req.body;
    
    if (!Array.isArray(problemsToSeed)) {
      return res.status(400).json({ error: "Expected an array of problems in request body" });
    }

    const seededProblems = await Problem.insertMany(problemsToSeed, { ordered: false });
    
    res.status(201).json({ message: "Problems seeded successfully", count: seededProblems.length });
  } catch (error) {
    console.error("Error in seedProblems controller:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};

