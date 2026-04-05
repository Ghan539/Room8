import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";
import OwnerLogin from "./pages/OwnerLogin";
import AddRoom from "./pages/AddRoom";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <BrowserRouter>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />

      {/* ✅ THIS FIXES YOUR UI */}
      <div
        style={{
          marginLeft: isOpen ? "220px" : "0",
          transition: "0.3s",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:id" element={<RoomDetails />} />
          <Route path="/owner-login" element={<OwnerLogin />} />
          <Route path="/add-room" element={<AddRoom />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;