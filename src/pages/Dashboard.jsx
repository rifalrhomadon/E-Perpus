import { Link } from "react-router-dom";
import "../styles/Admin.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar__logo">
          <i className="fa-solid fa-book-open-reader"></i>
          <span>E-Perpus</span>
        </div>
        <nav className="sidebar__menu">
          <ul>
            <li className="sidebar__item sidebar__item--active">
              <Link to="/dashboard">
                <i className="fa-solid fa-border-all"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="sidebar__item">
              <Link to="/daftar">
                <i className="fa fa-book" aria-hidden="true"></i>
                <span>Daftar Buku</span>
              </Link>
            </li>
            <li className="sidebar__item">
              <Link to="/peminjaman-buku">
                <i className="fa-solid fa-up-long"></i>
                <span>Peminjaman Buku</span>
              </Link>
            </li>
            <li className="sidebar__item">
              <Link to="/pengembalian-buku">
                <i className="fas fa-undo-alt"></i>
                <span>Pengembalian Buku</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="sidebar__logout">
          <Link to="/login">
            <i className="fa fa-sign-out" aria-hidden="true"></i>
            <span>Keluar</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">
        <h1 className="dashboard-content__title">Dashboard</h1>
        <p className="dashboard-content__welcome">Selamat Datang, Admin!</p>
      </main>
    </div>
  );
}

export default Dashboard;
