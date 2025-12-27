import { useState } from "react";

function BookCard({ book, onDelete }) {
  const [read, setRead] = useState(false);

  return (
    <div className="card">
      <h4>{book.title}</h4>
      <p>{book.category}</p>
      <p>{book.description}</p>

      <button onClick={() => setRead(!read)}>
        {read ? "✅ Read" : "📘 Mark as Read"}
      </button>

      <button className="delete" onClick={() => onDelete(book.id)}>
        Delete
      </button>
    </div>
  );
}
export default BookCard;
