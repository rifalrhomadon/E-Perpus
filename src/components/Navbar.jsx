import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // Menyimpan status user login

  useEffect(() => {
    // Cek apakah ada user yang login (gunakan localStorage atau sessionStorage)
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser)); // Simpan user ke state
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Hapus data user
    setUser(null); // Reset state user
    navigate("/login"); // Redirect ke halaman login
  };

  return (
    <header>
      <div className="container">
        <div className="header-left">
          <div className="logo">E-Perpus</div>
          <div className="search-box">
            <input type="text" placeholder="Search book..." />
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#Koleksi">Koleksi Buku</a></li>
            <li><a href="#Rekomendasi">Daftar Buku</a></li>
            <li><a href="#Event">Event</a></li>
          </ul>
        </nav>
        
        <div className="header-right">
          {user ? (
            <div className="user-dropdown">
              <button className="user-btn">{user.name} ▼</button>
              <div className="dropdown-content">
                <button onClick={handleLogout}>Logout</button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="login-btn">Login</Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
