import { useEffect, useState } from "react";
import RoomCard from "../components/RoomCard";

function Home() {
  const [rooms, setRooms] = useState([]);
  const [page, setPage] = useState(1);

  const roomsPerPage = 10;

  useEffect(() => {
    fetch("http://127.0.0.1:5000/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

  // 👉 pagination logic
  const startIndex = (page - 1) * roomsPerPage;
  const selectedRooms = rooms.slice(startIndex, startIndex + roomsPerPage);

  const totalPages = Math.ceil(rooms.length / roomsPerPage);

  return (
    <div style={{ padding: "20px" }}>

      {/* ✅ GRID (5 per row automatically) */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "20px"
      }}>
        {selectedRooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>

      {/* ✅ Pagination Buttons */}
      <div style={{
        marginTop: "30px",
        textAlign: "center"
      }}>
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          style={{ marginRight: "10px" }}
        >
          ⬅ Prev
        </button>

        <span> Page {page} of {totalPages} </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          style={{ marginLeft: "10px" }}
        >
          Next ➡
        </button>
      </div>

    </div>
  );
}

export default Home;