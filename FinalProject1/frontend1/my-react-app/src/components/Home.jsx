function Home() {
  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero">
        <h1>
          📚 Welcome to <span>Book Library</span>
        </h1>
        <p>
          Manage, add, update and organize your books easily using React & Node
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Explore Books</button>
          <button className="secondary-btn">Add New Book</button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature-card">
          <h3>📖 Manage Books</h3>
          <p>Add, edit and delete books anytime.</p>
        </div>

        <div className="feature-card">
          <h3>⚡ Fast & Simple</h3>
          <p>Built using React frontend and Node backend.</p>
        </div>

        <div className="feature-card">
          <h3>💾 Secure Data</h3>
          <p>All books stored safely in MongoDB.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
