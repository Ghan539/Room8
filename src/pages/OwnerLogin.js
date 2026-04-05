import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function OwnerLogin() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const navigate = useNavigate();

  // ✅ AUTO LOGIN CHECK (IMPORTANT)
  useEffect(() => {
    const owner = localStorage.getItem("owner");

    if (owner) {
      navigate("/add-room"); // already logged in
    }
  }, []);

  // ✅ SEND OTP
  const sendOtp = async () => {
    await fetch("http://127.0.0.1:5000/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    setShowOtp(true);
  };

  // ✅ VERIFY OTP
  const verifyOtp = async () => {
    const res = await fetch("http://127.0.0.1:5000/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, otp }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Login success ✅");

      // ✅ SAVE LOGIN
      localStorage.setItem("owner", email);

      // ✅ REDIRECT
      navigate("/add-room");
    } else {
      alert("Invalid OTP ❌");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div
        style={{
          width: "300px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          background: "#fff",
        }}
      >
        <h2>Owner Login 🔐</h2>

        <input
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />

        <button onClick={sendOtp}>Send OTP</button>
        <br />
        <br />

        {showOtp && (
          <>
            <input
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <br />
            <br />

            <button onClick={verifyOtp}>Verify OTP</button>
          </>
        )}
      </div>
    </div>
  );
}

export default OwnerLogin;