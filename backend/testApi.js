import axios from "axios";

async function testApi() {
  try {
    const res = await axios.get("http://localhost:5000/api/problems");
    console.log("Status:", res.status);
    console.log("Data length:", res.data.length);
    console.log("Data:", res.data);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

testApi();
