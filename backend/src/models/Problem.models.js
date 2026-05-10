import mongoose from "mongoose";

const exampleSchema = new mongoose.Schema({
  input: { type: String, required: true },
  output: { type: String, required: true },
  explanation: { type: String, required: false },
}, { _id: false });

const problemSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
      enum: ["Easy", "Medium", "Hard"],
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      text: { type: String, required: true },
      notes: [{ type: String }],
    },
    examples: [exampleSchema],
    constraints: [{ type: String }],
    starterCode: {
      javascript: { type: String, required: true },
      python: { type: String, required: true },
      java: { type: String, required: true },
    },
    expectedOutput: {
      javascript: { type: String, required: true },
      python: { type: String, required: true },
      java: { type: String, required: true },
    },
  },
  { timestamps: true }
);

const Problem = mongoose.model("Problem", problemSchema);

export default Problem;
