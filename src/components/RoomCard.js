const RoomCard = ({ room }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "15px",
      width: "250px",
      margin: "10px"
    }}>
      
{room.image && room.image.startsWith("http") ? (
  <img
    src={room.image}
    alt="room"
    style={{ width: "100%", borderRadius: "10px" }}
    onError={(e) => {
      e.target.src = "https://source.unsplash.com/300x200/?room";
    }}
  />
) : (
  room.image &&
  room.image.split(",").map((img, i) => (
    <img
      key={i}
      src={`http://127.0.0.1:5000/uploads/${img}`}
      alt="room"
      style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }}
    />
  ))
)}

     <h3>{room.title || "No Title"}</h3>
<p>📍 {room.location || "No Location"}</p>
<p>💰 ₹{room.price || "N/A"}/month</p>
<p>🛏️ {room.facilities || "Not mentioned"}</p>

      <button style={{
        backgroundColor: "#2563eb",
        color: "white",
        padding: "8px",
        border: "none",
        borderRadius: "5px"
      }}>
        View Details
      </button>
    </div>
  );
};

export default RoomCard;