import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
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
            <li><a href="#Rekomendasi">Rekomendasi</a></li>
            <li><a href="#Event">Event</a></li>
          </ul>
        </nav>
        <div class="header-right">
          <Link to="/login" className="login-btn">Login</Link>
        </div>
        
      </div>
    </header>
    
  );
}

export default Navbar;
