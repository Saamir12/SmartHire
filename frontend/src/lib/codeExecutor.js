// ✅ Calls YOUR backend

export async function executeCode(language, code, input = "") {
  try {
    const response = await fetch(
      "http://localhost:5000/api/code/execute",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          language,
          code,
          input,
        }),
      }
    );

    const data = await response.json();

    // JDoodle output
    const output = data.output || "";
    const error = data.error || "";

    if (!response.ok || error) {
      return {
        success: false,
        error: error || output || "Execution failed",
      };
    }

    return {
      success: true,
      output: output || "No output",
    };

  } catch (err) {
    return {
      success: false,
      error: `Failed to execute code: ${err.message}`,
    };
  }
}