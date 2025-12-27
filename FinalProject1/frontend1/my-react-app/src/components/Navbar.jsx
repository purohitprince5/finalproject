function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <h3>📚 Book Library</h3>
      <div>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("books")}>Books</button>
        <button onClick={() => setPage("about")}>About</button>
      </div>
    </nav>
  );
}

export default Navbar;
