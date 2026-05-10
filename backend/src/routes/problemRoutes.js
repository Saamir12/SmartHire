import express from "express";
import { getProblems, getProblemById, createProblem, seedProblems } from "../controllers/problemController.js";
import { requireAuth } from "@clerk/express";

const router = express.Router();

router.get("/", getProblems);
router.get("/:id", getProblemById);
router.post("/", requireAuth(), createProblem);
router.post("/seed", seedProblems);

export default router;
