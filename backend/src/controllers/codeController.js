const JDOODLE_API = "https://api.jdoodle.com/v1/execute";

const LANGUAGE_CONFIG = {
  javascript: { language: "nodejs", versionIndex: "4" },
  python:     { language: "python3", versionIndex: "5" },
  java:       { language: "java",    versionIndex: "5" },
};

/**
 * Wraps Node.js user code with a synchronous-style stdin reader.
 * This makes `inputData` available as a pre-split array of lines,
 * and provides a readline() helper — so users don't have to deal
 * with async stdin boilerplate.
 */
const wrapJavaScriptCode = (userCode, input) => {
  return `
const __inputLines = ${JSON.stringify(input.split("\n"))};
let __lineIndex = 0;
function readline() {
  return __inputLines[__lineIndex++] ?? "";
}
function input() {
  return readline().trim();
}

${userCode}
`;
};

/**
 * Normalizes output for test case comparison.
 * Trims each line and removes trailing blank lines
 * so minor whitespace differences don't cause false failures.
 */
export const normalizeOutput = (output = "") =>
  output
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n")
    .trim();

export const executeCode = async (req, res) => {
  try {
    const { language, code, input = "" } = req.body;

    const config = LANGUAGE_CONFIG[language];
    if (!config) {
      return res.status(400).json({ error: `Unsupported language: ${language}` });
    }
    if (!code?.trim()) {
      return res.status(400).json({ error: "Code is required" });
    }

    // Wrap JS code so stdin lines are pre-injected
    const script =
      language === "javascript" ? wrapJavaScriptCode(code, input) : code;

    const response = await fetch(JDOODLE_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        clientId:     process.env.JDOODLE_CLIENT_ID,
        clientSecret: process.env.JDOODLE_CLIENT_SECRET,
        script,
        language:     config.language,
        versionIndex: config.versionIndex,
        stdin:        input,
      }),
    });

    const data = await response.json();

    res.status(200).json({
      output:     data.output,
      statusCode: data.statusCode,
      memory:     data.memory,
      cpuTime:    data.cpuTime,
    });
  } catch (error) {
    res.status(500).json({ error: `Execution failed: ${error.message}` });
  }
};