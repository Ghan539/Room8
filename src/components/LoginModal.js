const LoginModal = ({ isOpen, close }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "300px",
          textAlign: "center",
        }}
      >
        <h3>Login Required 🔐</h3>

        <p>Please login to contact owner</p>

        <button style={{ margin: "10px", padding: "10px", width: "100%" }}>
          Continue with Google
        </button>

        <button style={{ margin: "10px", padding: "10px", width: "100%" }}>
          Login with Email OTP
        </button>

        <button onClick={close} style={{ marginTop: "10px" }}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LoginModal;