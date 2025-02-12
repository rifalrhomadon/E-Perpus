import { useState } from "react";
import { Link } from "react-router-dom";
import Formtambahbuku from "./Formtambahbuku";
import "../styles/Admin.css";
import Margaret from '../image/Margaret Finnegan.jpeg';
import Rembulan from '../image/Rembulan.jpg';

function Daftarbuku() {
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
                        <li className="sidebar__item sidebar__item--active">
                            <Link to="/daftar">
                                <i className="fa fa-book"></i>
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
                        <i className="fa fa-sign-out"></i>
                        <span>Keluar</span>
                    </Link>
                </div>
            </aside>

            <main className="dashboard-content">
                <header className="dashboard-content__title">
                    <h1>Daftar Buku</h1>
                    <button className="btn-tambah-buku" onClick={() => setModalOpen(true)}>
                        <i className="fa-solid fa-plus"></i> Tambah Buku Baru
                    </button>
                </header>

                {/* Modal Popup */}
                {modalOpen && (
                    <div className="modal-overlay">
                        <div className="modal-popup">
                            <span className="close-modal" onClick={() => setModalOpen(false)}>&times;</span>
                            <Formtambahbuku closeModal={() => setModalOpen(false)} />
                        </div>
                    </div>
                )}

                <section className="content">
                    <table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Judul Buku</th>
                                <th>Gambar</th>
                                <th>ISBN</th>
                                <th>Kategori</th>
                                <th>Penulis</th>
                                <th>Penerbit</th>
                                <th>Deskripsi Buku</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>We Could Be Heroes</td>
                                <td><img src={Margaret} alt="We Could Be Heroes" className="book-img" /></td>
                                <td>001235831</td>
                                <td>Novel Fantasi</td>
                                <td>Margaret Finnegan</td>
                                <td>PT Elex Media</td>
                                <td>Lorem ipsum dolor sit amet...</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Rembulan Tenggelam Di Wajahmu</td>
                                <td><img src={Rembulan} alt="Rembulan Tenggelam Di Wajahmu" className="book-img" /></td>
                                <td>001255831</td>
                                <td>Novel Fiksi</td>
                                <td>Tere Liye</td>
                                <td>Sabak Girip</td>
                                <td>Lorem ipsum dolor sit amet...</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}

export default Daftarbuku;
