import BookCard from "./BookCard";

function BookList({ books, onDelete, onClear }) {
  return (
    <div className="page">
      <h2>All Books</h2>

      {books.length === 0 && <p>No books added</p>}

      {books.map((book) => (
        <BookCard key={book.id} book={book} onDelete={onDelete} />
      ))}

      {books.length > 0 && (
        <button className="clear-btn" onClick={onClear}>
          Clear All
        </button>
      )}
    </div>
  );
}
export default BookList;
