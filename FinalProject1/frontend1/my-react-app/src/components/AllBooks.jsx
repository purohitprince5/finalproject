import { useEffect, useState } from "react";

function AllBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
    fetch(`${API_URL}/api/books`)
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="books-container">
      <h2>📚 All Books</h2>

      {books.length === 0 ? (
        <p>No books found</p>
      ) : (
        books.map(book => (
          <div className="book-card" key={book._id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Quantity: {book.quantity}</p>

            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default AllBooks;
