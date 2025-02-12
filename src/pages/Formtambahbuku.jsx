import { useState } from "react";
import "../styles/Admin.css";

function Formtambahbuku({ closeModal }) {
    const [formData, setFormData] = useState({
        judul: "",
        isbn: "",
        kategori: "",
        penulis: "",
        penerbit: "",
        deskripsi: "",
        cover: null
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === "file" ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Data Buku:", formData);
        alert("Buku berhasil ditambahkan!");
        closeModal();
    };

    return (
        <div className="form-container">
            <h2>Tambah Buku</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="judul">Judul Buku</label>
                <input type="text" id="judul" name="judul" value={formData.judul} onChange={handleChange} required />

                <label htmlFor="isbn">No ISBN</label>
                <input type="text" id="isbn" name="isbn" value={formData.isbn} onChange={handleChange} required />

                <label htmlFor="kategori">Kategori Buku</label>
                <select id="kategori" name="kategori" value={formData.kategori} onChange={handleChange} required>
                    <option value="">Pilih Kategori</option>
                    <option value="fiksi">Fiksi</option>
                    <option value="non-fiksi">Non-Fiksi</option>
                    <option value="pendidikan">Pendidikan</option>
                </select>

                <label htmlFor="penulis">Penulis Buku</label>
                <input type="text" id="penulis" name="penulis" value={formData.penulis} onChange={handleChange} required />

                <label htmlFor="penerbit">Penerbit Buku</label>
                <input type="text" id="penerbit" name="penerbit" value={formData.penerbit} onChange={handleChange} required />

                <label htmlFor="deskripsi">Deskripsi Buku</label>
                <textarea id="deskripsi" name="deskripsi" rows="3" value={formData.deskripsi} onChange={handleChange}></textarea>

                <label htmlFor="cover">Upload Cover Buku</label>
                <input type="file" id="cover" name="cover" accept="image/*" onChange={handleChange} />

                <div className="form-actions">
                    <button type="button" className="btn-cancel" onClick={closeModal}>Batal</button>
                    <button type="submit" className="btn-submit">Tambah</button>
                </div>
            </form>
        </div>
    );
}

export default Formtambahbuku;
