import { useAuth } from "@clerk/clerk-react";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import DashboardPage from "./pages/DashboardPage";
import ProblemsPage from "./pages/ProblemsPage";
import ProblemPage from "./pages/ProblemPage";
import CreateProblemPage from "./pages/CreateProblemPage";
import SessionPage from "./pages/SessionPage";
import { useEffect } from "react";
import axiosInstance from "./lib/axios";
import { useUser } from "@clerk/clerk-react";

function App() {
  const { isSignedIn, isLoaded } = useUser();
  const { getToken } = useAuth(); // ✅ add this

  // ✅ Set up interceptor once, right here
  useEffect(() => {
    const interceptorId = axiosInstance.interceptors.request.use(async (config) => {
      const token = await getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    // Clean up interceptor when component unmounts
    return () => axiosInstance.interceptors.request.eject(interceptorId);
  }, [getToken]);

  if (!isLoaded) return null;

  return (
    <>
      <Routes>
        <Route path="/" element={!isSignedIn ? <HomePage /> : <Navigate to={"/dashboard"} />} />
        <Route path="/dashboard" element={isSignedIn ? <DashboardPage /> : <Navigate to={"/"} />} />
        <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />} />
        <Route path="/create-problem" element={isSignedIn ? <CreateProblemPage /> : <Navigate to={"/"} />} />
        <Route path="/problem/:id" element={isSignedIn ? <ProblemPage /> : <Navigate to={"/"} />} />
        <Route path="/session/:id" element={isSignedIn ? <SessionPage /> : <Navigate to={"/"} />} />
      </Routes>
      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  );
}

export default App;