import { useState } from "react";
import { Link } from "react-router-dom";
import Formpeminjaman from "./Formpeminjaman";
import '../styles/Admin.css'

function Peminjamanbuku() {
    const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="dashboard-container">
            <aside className="sidebar">
                <div className="sidebar__logo">
                    <i className="fa-solid fa-book-open-reader"></i>
                    <span>E-Perpus</span>
                </div>
                <nav className="sidebar__menu">
                    <ul>
                        <li className="sidebar__item">
                            <Link to="/dashboard">
                                <i className="fa-solid fa-border-all"></i>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className="sidebar__item">
                            <Link to="/daftar">
                                <i className="fa fa-book"></i>
                                <span>Daftar Buku</span>
                            </Link>
                        </li>
                        <li className="sidebar__item sidebar__item--active">
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
                        <i className="fa fa-sign-out"></i>
                        <span>Keluar</span>
                    </Link>
                </div>
            </aside>
            
            <main className="dashboard-content">
                <header className="dashboard-content__title">
                    <h1>Daftar Peminjaman</h1>
                    <button className="btn-tambah-buku" onClick={() => setModalOpen(true)}>
                        <i className="fa-solid fa-plus"></i> Tambah Buku peminjaman
                    </button>
                </header>

                {modalOpen && (
                    <div className="modal-overlay">
                        <div className="modal-popup">
                            <span className="close-modal" onClick={() => setModalOpen(false)}>&times;</span>
                            <Formpeminjaman closeModal={() => setModalOpen(false)} />
                        </div>
                    </div>
                )}
                <section className="content">
                    <table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>ID Member</th>
                                <th>No ISBN</th>
                                <th>Judul Buku</th>
                                <th>Kategori Buku</th>
                                <th>Tanggal Pinjam</th>
                            </tr>
                        </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>ADSD54541</td>
                            <td>001235831</td>
                            <td>We Could Be Heroes</td>
                            <td>Novel Fantasi</td>
                            <td>02-01-2024</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>ADSD54541</td>
                            <td>001255831</td>
                            <td>Rembulan Tenggelam Di Wajahmu</td>
                            <td>Novel Fiksi</td>
                            <td>20-01-2024</td>
                        </tr>
                    </tbody>
                </table>
                </section>
        </main>
    </div>
  )
}

export default Peminjamanbuku
