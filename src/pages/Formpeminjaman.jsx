import { useState } from "react";
import "../styles/Admin.css";

function Formpeminjaman({ closeModal, onTambahPeminjaman }) {
  const [formData, setFormData] = useState({
    id_member: "",
    no_isbn: "",
    judul_buku: "",
    kategori_buku: "",
    tanggal_pinjam: "",
    tanggal_kembali: "", // Tambahkan field untuk tanggal kembali
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mengirimkan data ke komponen utama melalui onTambahPeminjaman
    onTambahPeminjaman({
      ...formData,
      status: "Terverifikasi", // Mengatur status sebagai Terverifikasi
      tanggal_kembali: formData.tanggal_kembali || "", // Pastikan tanggal kembali ada
    });
    alert("Peminjaman berhasil ditambahkan!");
    closeModal();
  };

  return (
    <div className="form-container">
      <h2>Form Peminjaman Buku</h2>
      <form onSubmit={handleSubmit}>
        <label>ID Member</label>
        <input
          type="text"
          name="id_member"
          value={formData.id_member}
          onChange={handleChange}
          required
        />

        <label>No ISBN</label>
        <input
          type="text"
          name="no_isbn"
          value={formData.no_isbn}
          onChange={handleChange}
          required
        />

        <label>Judul Buku</label>
        <input
          type="text"
          name="judul_buku"
          value={formData.judul_buku}
          onChange={handleChange}
          required
        />

        <label>Kategori Buku</label>
        <select
          name="kategori_buku"
          value={formData.kategori_buku}
          onChange={handleChange}
          required
        >
          <option value="">Pilih Kategori</option>
          <option value="Novel Fantasi">Novel Fantasi</option>
          <option value="Novel Fiksi">Novel Fiksi</option>
        </select>

        <label>Tanggal Pinjam</label>
        <input
          type="date"
          name="tanggal_pinjam"
          value={formData.tanggal_pinjam}
          onChange={handleChange}
          required
        />

        <div className="form-actions">
          <button type="button" className="btn-cancel" onClick={closeModal}>
            Batal
          </button>
          <button type="submit" className="btn-submit">
            Tambah
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formpeminjaman;
