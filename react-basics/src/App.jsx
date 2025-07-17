import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicInfo from "./components/BasicInfo";
import Contact from "./components/Contact";
import SocialHandle from "./components/SocialHandle";
import UserContext from "./context/UserContext";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <UserContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BasicInfo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/socialhandle" element={<SocialHandle />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </UserContext>
  );
}

export default App;
