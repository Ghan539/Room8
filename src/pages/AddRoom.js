import { useState } from "react";

function AddRoom() {
  const [form, setForm] = useState({
    title: "",
    location: "",
    price: "",
    facilities: "",
    images: [] // ✅ FIXED
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append("title", form.title);
    formData.append("location", form.location);
    formData.append("price", form.price);
    formData.append("facilities", form.facilities);

    // ✅ ADD IMAGES
    if (form.images && form.images.length > 0) {
      for (let i = 0; i < form.images.length; i++) {
        formData.append("images", form.images[i]);
      }
    }

    try {
      const res = await fetch("http://127.0.0.1:5000/add-room", {
        method: "POST",
        body: formData
      });

      const data = await res.json();
      alert(data.message);

      // ✅ RESET FORM AFTER SUBMIT
      setForm({
        title: "",
        location: "",
        price: "",
        facilities: "",
        images: []
      });

    } catch (error) {
      console.error(error);
      alert("Error adding room");
    }
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "80vh"
    }}>

      <div style={{
        width: "300px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        background: "#fff"
      }}>

        <h2>Add Room Page</h2>

        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        /><br /><br />

        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
        /><br /><br />

        <input
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        /><br /><br />

        <input
          name="facilities"
          placeholder="Facilities"
          value={form.facilities}
          onChange={handleChange}
        /><br /><br />

        {/* ✅ FILE INPUT */}
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => {
            setForm({
              ...form,
              images: e.target.files
            });
          }}
        /><br /><br />

        <button onClick={handleSubmit}>
          Add Room
        </button>

      </div>
    </div>
  );
}

export default AddRoom;