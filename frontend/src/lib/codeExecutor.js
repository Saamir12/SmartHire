import axiosInstance from "../lib/axios.js"; // adjust path as needed

export async function executeCode(language, code, input = "") {
  try {
    const { data } = await axiosInstance.post("/code/execute", {
      language,
      code,
      input,
    });

    const output = data.output || "";
    const error = data.error || "";

    if (error) {
      return { success: false, error };
    }

    return { success: true, output: output || "No output" };

  } catch (err) {
    return {
      success: false,
      error: `Failed to execute code: ${err.message}`,
    };
  }
}