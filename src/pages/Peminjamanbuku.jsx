import { useState } from "react";
import { Link } from "react-router-dom";
import Formpeminjaman from "./Formpeminjaman";
import "../styles/Admin.css";

function Peminjamanbuku() {
    const [modalOpen, setModalOpen] = useState(false);
    const [verifyModalOpen, setVerifyModalOpen] = useState(false);
    const [selectedPeminjaman, setSelectedPeminjaman] = useState(null);

    const [peminjamanData, setPeminjamanData] = useState([
        {
            id: 1,
            memberId: "ADSD54541",
            isbn: "001235831",
            title: "We Could Be Heroes",
            category: "Novel Fantasi",
            tanggalPinjam: "02-01-2024",
            tanggalKembali: "09-01-2024",
            status: "Menunggu Verifikasi",
        },
        {
            id: 2,
            memberId: "ADSD54542",
            isbn: "001255831",
            title: "Rembulan Tenggelam Di Wajahmu",
            category: "Novel Fiksi",
            tanggalPinjam: "20-01-2024",
            tanggalKembali: "27-01-2024",
            status: "Disetujui",
        },

        {
            id: 3,
            memberId: "ADSD54542",
            isbn: "001255873",
            title: "Narasi Seorang Ayah",
            category: "Novel Fiksi",
            tanggalPinjam: "18-02-2025",
            tanggalKembali: "25-02-2025",
            status: "Disetujui",
        },
    ]);

    const handleVerify = (peminjaman) => {
        setSelectedPeminjaman(peminjaman);
        setVerifyModalOpen(true);
    };

    const handleTambahPeminjaman = (newPeminjaman) => {
        // Menambahkan peminjaman baru ke daftar dengan status "Terverifikasi"
        setPeminjamanData((prevData) => [
            ...prevData,
            {
                ...newPeminjaman,
                status: "Terverifikasi", // Status langsung menjadi terverifikasi
            },
        ]);
        setModalOpen(false); // Menutup modal setelah peminjaman ditambahkan
    };

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
            <div className="sidebar__logo">
          <i className="fa-solid fa-book-open-reader"></i>
          <span>E-Perpus</span>
        </div>
        <nav className="sidebar__menu">
          <ul>
            <li className="sidebar__item ">
              <Link to="/dashboard">
                <i className="fa-solid fa-border-all"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="sidebar__item">
                <Link to="/daftar-member">
                    <i className="fa-solid fa-users"></i>
                    <span>Daftar Member</span>
                </Link>
            </li>
            <li className="sidebar__item">
              <Link to="/daftar-buku">
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
            <i className="fa fa-sign-out" aria-hidden="true"></i>
            <span>Keluar</span>
          </Link>
        </div>
            </aside>

            <main className="dashboard-content">
                <header className="dashboard-content__title">
                    <h1>Daftar Peminjaman</h1>
                    <button className="btn-tambah-buku" onClick={() => setModalOpen(true)}>
                        <i className="fa-solid fa-plus"></i> Tambah Peminjaman
                    </button>
                </header>

                {modalOpen && (
                    <div className="modal-overlay">
                        <div className="modal-popup">
                            <span className="close-modal" onClick={() => setModalOpen(false)}>
                                &times;
                            </span>
                            <Formpeminjaman
                                closeModal={() => setModalOpen(false)}
                                onTambahPeminjaman={handleTambahPeminjaman} // Passing handler to Formpeminjaman
                            />
                        </div>
                    </div>
                )}

                {verifyModalOpen && selectedPeminjaman && (
                    <div className="modal-overlay">
                        <div className="modal-popup">
                            <span className="close-modal" onClick={() => setVerifyModalOpen(false)}>
                                &times;
                            </span>
                            <h2>Verifikasi Peminjaman</h2>
                            <p><strong>Nama Member:</strong> {selectedPeminjaman.memberId}</p>
                            <p><strong>No ISBN:</strong> {selectedPeminjaman.isbn}</p>
                            <p><strong>Judul Buku:</strong> {selectedPeminjaman.title}</p>
                            <p><strong>Kategori:</strong> {selectedPeminjaman.category}</p>
                            <p><strong>Tanggal Pinjam:</strong> {selectedPeminjaman.tanggalPinjam}</p>
                            <p><strong>Tanggal Kembali:</strong> {selectedPeminjaman.tanggalKembali}</p>

                            <div className="modal-buttons">
                                <button className="btn-approve" onClick={() => setVerifyModalOpen(false)}>Konfirmasi</button>
                                <button className="btn-reject" onClick={() => setVerifyModalOpen(false)}>Tolak</button>
                            </div>
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
                                <th>Status</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                        {peminjamanData.map((peminjaman, index) => (
                                <tr key={peminjaman.id}>
                                <td>{index + 1}</td>
                                <td>{peminjaman.memberId}</td> {/* pastikan ini sesuai */}
                                <td>{peminjaman.isbn}</td> {/* pastikan ini sesuai */}
                                <td>{peminjaman.title}</td> {/* pastikan ini sesuai */}
                                <td>{peminjaman.category}</td> {/* pastikan ini sesuai */}
                                <td>{peminjaman.tanggalPinjam}</td> {/* pastikan ini sesuai */}
                                <td>{peminjaman.status}</td>
                                    <td>
                                        {peminjaman.status === "Menunggu Verifikasi" ? (
                                            <button className="btn-verify" onClick={() => handleVerify(peminjaman)}>
                                                Verifikasi
                                            </button>
                                        ) : (
                                            <span>✅ Sudah Diverifikasi</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}

export default Peminjamanbuku;
