import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import LogInPage from "./pages/LogInPage";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to='/login'/> } />
        <Route path="/login" element={authUser ? <Navigate to='/'/> :<LogInPage />} />
        <Route path="/signup" element={authUser ? <Navigate to='/'/> :<SignUp />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
