const Footer = () => {
  return (
    <div style={{
      backgroundColor: "#0f172a",
      color: "white",
      padding: "40px",
      marginTop: "40px"
    }}>
      
      <h2 style={{ marginBottom: "20px" }}>Room8</h2>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap"
      }}>

        {/* Company */}
        <div>
          <h4>developed by </h4>
          <p>Ghanshyam sirvi</p>
          <p>Nandini Sharma</p>
          <p>Contact here </p>
        </div>

        {/* Owners */}
        <div>
          <h4>For Owners</h4>
          <p>List Your Room</p>
          <p>Dashboard</p>
        </div>

        {/* Help */}
        <div>
          <h4>Help</h4>
          <p>Support</p>
          <p>Privacy Policy</p>
          <p>Terms</p>
        </div>

        {/* Social */}
        <div>
          <h4>Follow Us</h4>
          <p>📘 Facebook</p>
          <p>📸 Instagram</p>
          <p>🐦 Twitter</p>
        </div>

      </div>

      <hr style={{ margin: "20px 0", borderColor: "#333" }} />

      <p style={{ fontSize: "12px", textAlign: "center" }}>
        © 2026 Room8. All rights reserved.
      </p>

    </div>
  );
};

export default Footer;