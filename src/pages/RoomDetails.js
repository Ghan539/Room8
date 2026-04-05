import { useParams } from "react-router-dom";
import { useState } from "react";
import LoginModal from "../components/LoginModal";

const RoomDetails = () => {
  const { id } = useParams();
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Room Details 🏠</h2>

      <img
        src="https://via.placeholder.com/600"
        alt="room"
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <h3>Room ID: {id}</h3>
      <p>Location: Jagatpura</p>
      <p>Price: ₹5000/month</p>
      <p>Facilities: WiFi, Bed, Fan, Bathroom, Study Table</p>

      <button
        onClick={() => setShowLogin(true)}
        style={{
          background: "#2563eb",
          color: "white",
          padding: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Contact Owner
      </button>

      <LoginModal isOpen={showLogin} close={() => setShowLogin(false)} />
    </div>
  );
};

export default RoomDetails;