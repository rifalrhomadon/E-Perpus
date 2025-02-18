import { useState } from "react";
import { Link } from "react-router-dom";
import Formpengembalian from "./Formpengembalian";
import '../styles/Admin.css';

function Pengembalianbuku() {
  const [modalOpen, setModalOpen] = useState(false);
  
  // Data pengembalian buku
  const [pengembalianData, setPengembalianData] = useState([
    {
      id: 1,
      memberId: "ADSD54541",
      isbn: "001235831",
      title: "We Could Be Heroes",
      category: "Novel Fantasi",
      tanggalKembali: "02-01-2024",
      status: "Belum Dikembalikan",
      denda: 0
    },
    {
      id: 2,
      memberId: "ADSD54542",
      isbn: "001255831",
      title: "Rembulan Tenggelam Di Wajahmu",
      category: "Novel Fiksi",
      tanggalKembali: "20-01-2024",
      status: "Belum Dikembalikan",
      denda: 0
    },
  ]);

  // Fungsi untuk menandai buku sebagai dikembalikan
  const handleDikembalikan = (id) => {
    setPengembalianData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? { ...item, status: "Dikembalikan", denda: 0 }  // Jika dikembalikan, denda 0
          : item
      )
    );
  };

  // Fungsi untuk menandai buku sebagai terlambat
  const handleTerlambat = (id) => {
    setPengembalianData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? { ...item, status: "Terlambat", denda: 5000 } // Denda 5000 jika terlambat
          : item
      )
    );
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
            <li className="sidebar__item">
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
            <li className="sidebar__item">
              <Link to="/peminjaman-buku">
                <i className="fa-solid fa-up-long"></i>
                <span>Peminjaman Buku</span>
              </Link>
            </li>
            <li className="sidebar__item sidebar__item--active">
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
          <h1>Daftar Pengembalian</h1>
          <button className="btn-tambah-buku" onClick={() => setModalOpen(true)}>
            <i className="fa-solid fa-plus"></i> Tambah Pengembalian
          </button>
        </header>

        {modalOpen && (
          <div className="modal-overlay">
            <div className="modal-popup">
              <span className="close-modal" onClick={() => setModalOpen(false)}>
                &times;
              </span>
              <Formpengembalian closeModal={() => setModalOpen(false)} />
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
                <th>Tanggal Kembali</th>
                <th>Status</th>
                <th>Denda</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {pengembalianData.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.memberId}</td>
                  <td>{item.isbn}</td>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{item.tanggalKembali}</td>
                  <td>{item.status}</td>
                  <td>{item.denda > 0 ? `Rp ${item.denda}` : "-"}</td>
                  <td>
                    {item.status === "Belum Dikembalikan" && (
                      <>
                        <button className="btn-dikembalikan" onClick={() => handleDikembalikan(item.id)}>
                          Tandai Dikembalikan
                        </button>
                        <button className="btn-terlambat" onClick={() => handleTerlambat(item.id)}>
                          Tandai Terlambat
                        </button>
                      </>
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

export default Pengembalianbuku;
