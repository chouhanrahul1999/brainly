import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Signin } from "./pages/Signin";
import { SignUp } from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
 
}

export default App;
