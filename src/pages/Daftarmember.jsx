import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/Admin.css";

function Daftarmember() {
  const [unverifiedMembers, setUnverifiedMembers] = useState([
    { id: "MBR001", nama: "Ahmad Wijaya", username: "ahmadw", email: "ahmad@example.com" },
    { id: "MBR002", nama: "Siti Rahma", username: "rahmasiti", email: "siti@example.com" },
    { id: "MBR003", nama: "Budi Santoso", username: "budisantoso", email: "budi@example.com" }
  ]);

  const [verifiedMembers, setVerifiedMembers] = useState([]);

  // Fungsi untuk verifikasi
  const handleVerify = (member) => {
    setUnverifiedMembers(unverifiedMembers.filter(m => m.id !== member.id));
    setVerifiedMembers([...verifiedMembers, member]);
  };

  // Fungsi untuk hapus
  const handleDelete = (id) => {
    setUnverifiedMembers(unverifiedMembers.filter(member => member.id !== id));
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
                        <li className="sidebar__item sidebar__item--active">
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
          <h1>Daftar Member</h1>
        </header>

        {/* Tabel Member yang Belum Terverifikasi */}
        <section className="content">
          <h2>Verifikasi Member</h2>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>ID Member</th>
                <th>Nama</th>
                <th>Username</th>
                <th>Email</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {unverifiedMembers.length > 0 ? (
                unverifiedMembers.map((member, index) => (
                  <tr key={member.id}>
                    <td>{index + 1}</td>
                    <td>{member.id}</td>
                    <td>{member.nama}</td>
                    <td>{member.username}</td>
                    <td>{member.email}</td>
                    <td>
                      <button className="btn-verifikasi" onClick={() => handleVerify(member)}>
                        Verifikasi
                      </button>
                      <button className="btn-hapus" onClick={() => handleDelete(member.id)}>
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center" }}>Semua member sudah terverifikasi</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>

        {/* Tabel Member yang Sudah Terverifikasi */}
        <section className="content">
          <h2>Daftar Member</h2>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>ID Member</th>
                <th>Nama</th>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {verifiedMembers.length > 0 ? (
                verifiedMembers.map((member, index) => (
                  <tr key={member.id}>
                    <td>{index + 1}</td>
                    <td>{member.id}</td>
                    <td>{member.nama}</td>
                    <td>{member.username}</td>
                    <td>{member.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center" }}>Belum ada member yang terverifikasi</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Daftarmember;
