import logo from "../assets/logo.png";

const Navbar = ({ toggle }) => {
  return (
    <div
      style={{
        background: "#2563eb",
        color: "white",
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* LEFT SIDE */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        
        {/* ☰ MENU BUTTON */}
        <span
  onClick={toggle}
  style={{
    fontSize: "40px",
    cursor: "pointer",
    marginRight: "5px",
    color: "black",
    fontWeight: "bold"
    
  }}
>
  ☰
</span>

        {/* LOGO */}
        <img
          src={logo}
          alt="Room8"
          style={{
            height: "40px",
            objectFit: "contain",
          }}
        />
      </div>

      {/* RIGHT SIDE */}
      <div style={{ fontWeight: "bold" }}>
        Room8
      </div>
    </div>
  );
};

export default Navbar;