import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggle}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.4)",
            zIndex: 1,
          }}
        />
      )}

      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: isOpen ? 0 : "-220px",
          width: "220px",
          height: "100%",
          background: "#2563eb",
          color: "white",
          padding: "20px",
          transition: "0.3s",
          zIndex: 2,
        }}
      >
        <h3>Menu</h3>

        <p onClick={toggle} style={{ cursor: "pointer" }}>❌ Close</p>

        <Link to="/" onClick={toggle} style={{ color: "white", display: "block", margin: "10px 0" }}>
          Home
        </Link>

        <Link to="/owner-login" onClick={toggle} style={{ color: "white", display: "block" }}>
          Switch to Owner
        </Link>
      </div>
    </>
  );
};

export default Sidebar;