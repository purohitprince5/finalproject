import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import AddBook from "./components/AddBook";
import AllBooks from "./components/AllBooks";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [refresh, setRefresh] = useState(false);

  return (
    <>
      <Navbar setPage={setPage} />

      <main className="container mt-3">
        {page === "home" && <Home />}

        {page === "about" && <About />}

        {page === "books" && (
          <>
            <AllBooks refresh={refresh} />
            <hr />
            <AddBook onBookAdded={() => setRefresh(!refresh)} />
          </>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
