import { useState } from "react";

function AddBook({ onBookAdded }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !author || !price) {
      setMessage("❌ Title, Author & Price required");
      return;
    }

    try {
      setLoading(true);
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

      const res = await fetch(`${API_URL}/api/books`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, author, price, description }),
      });

      if (!res.ok) throw new Error("Failed");

      setMessage("✅ Book added successfully");

      setTitle("");
      setAuthor("");
      setPrice("");
      setDescription("");

      onBookAdded(); // 🔥 refresh books list automatically
    } catch (err) {
      setMessage("❌ Error while adding book");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-book-container">
      <h3 className="mb-3">➕ Add New Book</h3>

      {message && <p className="status-msg">{message}</p>}

      <form onSubmit={handleSubmit} className="add-book-form">
        <div className="form-group">
          <label>Book Title</label>
          <input
            type="text"
            placeholder="Enter book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            placeholder="Enter author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="form-group full-width">
          <label>Description</label>
          <textarea
            placeholder="Write short description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type="submit" className="add-btn" disabled={loading}>
          {loading ? "Adding..." : "Add Book"}
        </button>
      </form>
    </div>
  );
}

export default AddBook;
