import { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import toast from "react-hot-toast";
import axiosInstance from "../lib/axios";

function CreateProblemPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    difficulty: "Easy",
    category: "",
    descriptionText: "",
    notes: "",
    constraints: "",
    exampleInput: "",
    exampleOutput: "",
    exampleExplanation: "",
    jsStarterCode: "",
    pyStarterCode: "",
    javaStarterCode: "",
    jsExpectedOutput: "",
    pyExpectedOutput: "",
    javaExpectedOutput: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const problemId = formData.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

    const newProblem = {
      id: problemId,
      title: formData.title,
      difficulty: formData.difficulty,
      category: formData.category,
      description: {
        text: formData.descriptionText,
        notes: formData.notes.split("\n").filter(n => n.trim() !== ""),
      },
      examples: [
        {
          input: formData.exampleInput,
          output: formData.exampleOutput,
          explanation: formData.exampleExplanation,
        }
      ],
      constraints: formData.constraints.split("\n").filter(c => c.trim() !== ""),
      starterCode: {
        javascript: formData.jsStarterCode,
        python: formData.pyStarterCode,
        java: formData.javaStarterCode,
      },
      expectedOutput: {
        javascript: formData.jsExpectedOutput,
        python: formData.pyExpectedOutput,
        java: formData.javaExpectedOutput,
      }
    };

    try {
      await axiosInstance.post("/problems", newProblem);
      toast.success("Problem created successfully!");
      navigate("/problems");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.error || "Failed to create problem");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 pb-12">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold mb-6">Create New Problem</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label"><span className="label-text font-semibold">Title</span></label>
                  <input type="text" name="title" required value={formData.title} onChange={handleChange} className="input input-bordered w-full" placeholder="e.g. Two Sum" />
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text font-semibold">Difficulty</span></label>
                  <select name="difficulty" value={formData.difficulty} onChange={handleChange} className="select select-bordered w-full">
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text font-semibold">Category</span></label>
                <input type="text" name="category" required value={formData.category} onChange={handleChange} className="input input-bordered w-full" placeholder="e.g. Array • Hash Table" />
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text font-semibold">Description Text</span></label>
                <textarea name="descriptionText" required value={formData.descriptionText} onChange={handleChange} className="textarea textarea-bordered h-24" placeholder="Problem description..."></textarea>
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text font-semibold">Notes (One per line)</span></label>
                <textarea name="notes" value={formData.notes} onChange={handleChange} className="textarea textarea-bordered h-20" placeholder="e.g. You may assume..."></textarea>
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text font-semibold">Constraints (One per line)</span></label>
                <textarea name="constraints" value={formData.constraints} onChange={handleChange} className="textarea textarea-bordered h-20" placeholder="e.g. 2 <= nums.length <= 10^4"></textarea>
              </div>

              <div className="divider">Example</div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label"><span className="label-text font-semibold">Input</span></label>
                  <input type="text" name="exampleInput" required value={formData.exampleInput} onChange={handleChange} className="input input-bordered w-full" placeholder="e.g. nums = [2,7,11,15], target = 9" />
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text font-semibold">Output</span></label>
                  <input type="text" name="exampleOutput" required value={formData.exampleOutput} onChange={handleChange} className="input input-bordered w-full" placeholder="e.g. [0,1]" />
                </div>
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text font-semibold">Explanation (Optional)</span></label>
                <input type="text" name="exampleExplanation" value={formData.exampleExplanation} onChange={handleChange} className="input input-bordered w-full" placeholder="Because nums[0] + nums[1] == 9..." />
              </div>

              <div className="divider">Code</div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg text-primary">JavaScript</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label"><span className="label-text font-semibold">Starter Code</span></label>
                    <textarea name="jsStarterCode" required value={formData.jsStarterCode} onChange={handleChange} className="textarea textarea-bordered h-32 font-mono" placeholder="function solve() {...}"></textarea>
                  </div>
                  <div className="form-control">
                    <label className="label"><span className="label-text font-semibold">Expected Output (Console log outputs separated by newline)</span></label>
                    <textarea name="jsExpectedOutput" required value={formData.jsExpectedOutput} onChange={handleChange} className="textarea textarea-bordered h-32 font-mono" placeholder="[0,1]"></textarea>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg text-secondary">Python</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label"><span className="label-text font-semibold">Starter Code</span></label>
                    <textarea name="pyStarterCode" required value={formData.pyStarterCode} onChange={handleChange} className="textarea textarea-bordered h-32 font-mono" placeholder="def solve():..."></textarea>
                  </div>
                  <div className="form-control">
                    <label className="label"><span className="label-text font-semibold">Expected Output</span></label>
                    <textarea name="pyExpectedOutput" required value={formData.pyExpectedOutput} onChange={handleChange} className="textarea textarea-bordered h-32 font-mono" placeholder="[0, 1]"></textarea>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg text-accent">Java</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label"><span className="label-text font-semibold">Starter Code</span></label>
                    <textarea name="javaStarterCode" required value={formData.javaStarterCode} onChange={handleChange} className="textarea textarea-bordered h-32 font-mono" placeholder="class Solution {...}"></textarea>
                  </div>
                  <div className="form-control">
                    <label className="label"><span className="label-text font-semibold">Expected Output</span></label>
                    <textarea name="javaExpectedOutput" required value={formData.javaExpectedOutput} onChange={handleChange} className="textarea textarea-bordered h-32 font-mono" placeholder="[0, 1]"></textarea>
                  </div>
                </div>
              </div>

              <div className="form-control mt-8">
                <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full shadow-lg">
                  {isSubmitting ? <span className="loading loading-spinner"></span> : "Create Problem"}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProblemPage;
