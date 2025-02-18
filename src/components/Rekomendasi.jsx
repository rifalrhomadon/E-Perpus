import { useState } from 'react';
import '../styles/Rekomendasi.css';
import Rembulan from "../image/Rembulan.jpg";
import Laskar from "../image/Laskar.jpg";
import Manusia from "../image/Manusia.jpg";
import Ikan from "../image/Ikan.jpg";
import Kucing from "../image/Kucing.jpg";
import Pinch from "../image/Just a Pinch of Magic.jpeg";
import Magicians from "../image/download.jpeg";
import Museum from "../image/Lenny Wen on X.jpeg";
import Hike from "../image/The Hike to Home.jpeg";
import Sugar from "../image/Sugar and Spite.jpeg";
import Dragon from "../image/The Secret Dragon.jpeg";
import Arah from "../image/Cover Buku.jpeg";
import Pirates from "../image/fiction book cover.jpeg";
import Golden from "../image/Golden.jpeg";
import Narasi from "../image/Narasi.jpeg";

function Rekomendasi() {
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [option, setOption] = useState("Baca Online");
  const [borrowDate, setBorrowDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const books = [
    { img: Rembulan, title: "Rembulan Tenggelam di Wajahmu", isbn: "123456", category: "Fiksi" },
    { img: Laskar, title: "Laskar Pelangi", isbn: "789012", category: "Novel" },
    { img: Manusia, title: "Manusia dan Badainya", isbn: "345678", category: "Drama" },
    { img: Ikan, title: "Semua Ikan di Langit", isbn: "901234", category: "Fantasi" },
    { img: Kucing, title: "Jika Kucing Lenyap Dari Dunia", isbn: "567890", category: "Fiksi" },
    { img: Pinch, title: "Just a Pinch of Magic", isbn: "111111", category: "Fantasy" },
    { img: Magicians, title: "The Magicians Daughter", isbn: "222222", category: "Fantasy" },
    { img: Museum, title: "The Midnight Museum", isbn: "333333", category: "Children's Book" },
    { img: Hike, title: "The Hike to Home", isbn: "444444", category: "Adventure" },
    { img: Sugar, title: "Sugar and Spite", isbn: "555555", category: "Fiction" },
    { img: Dragon, title: "The Secret Dragon", isbn: "666666", category: "Fantasy" },
    { img: Arah, title: "Arah Kembali", isbn: "777777", category: "Drama" },
    { img: Pirates, title: "Fiction Book Cover", isbn: "888888", category: "Adventure" },
    { img: Golden, title: "The Golden Tower", isbn: "999999", category: "Drama" },
    { img: Narasi, title: "Narasi Perihal Ayah", isbn: "101010", category: "Non-Fiction" }
  ];

  const handleBorrowDateChange = (e) => {
    setBorrowDate(e.target.value);
    const borrowDate = new Date(e.target.value);
    const returnDate = new Date(borrowDate);
    returnDate.setDate(borrowDate.getDate() + 7);
    setReturnDate(returnDate.toISOString().split('T')[0]);
  };

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="Rekomendasi" className="recommendation-section">
      <h2>Daftar Buku</h2>
      {showAll && (
        <input 
          type="text" 
          className="search-bar" 
          placeholder="Search book..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      )}
      <div className="book-list">
        {filteredBooks.slice(0, showAll ? filteredBooks.length : 5).map((book, index) => (
          <div key={index} className="book-items" onClick={() => setSelectedBook(book)}>
            <div className="book-cover">
              <img src={book.img} alt={book.title} />
              <div className="book-hover-overlay">+</div>
            </div>
            <p className="book-title">{book.title}</p>
          </div>
        ))}
      </div>
      <button className="show-more-btn" onClick={() => setShowAll(!showAll)}>
        {showAll ? "Tampilkan Lebih Sedikit" : "Lihat Selengkapnya"}
      </button>

      {selectedBook && (
        <div className="book-modal">
          <h3>{selectedBook.title}</h3>
          <label>
            Pilih opsi:
            <select value={option} onChange={(e) => setOption(e.target.value)}>
              <option value="Baca Online">Baca Online</option>
              <option value="Pinjam">Pinjam</option>
            </select>
          </label>
          {option === "Pinjam" && (
            <form>
              <input type="text" placeholder="Nama" required />
              <input type="text" value={selectedBook.isbn} readOnly />
              <input type="text" value={selectedBook.title} readOnly />
              <input type="text" value={selectedBook.category} readOnly />
              <input type="date" placeholder="Tanggal Peminjaman" value={borrowDate} onChange={handleBorrowDateChange} required />
              <input type="date" placeholder="Tanggal Pengembalian" value={returnDate} readOnly required />
              <button type="submit" className="confirm-btn">Konfirmasi</button>
            </form>
          )}
           {option === "Baca Online" && (
            <div className="read-online">
              <img src={selectedBook.img} alt={selectedBook.title} className="read-cover" />
              <button className="read-now-btn">Baca Sekarang</button>
            </div>
          )}
          <button className="close-btn" onClick={() => setSelectedBook(null)}>Tutup</button>
        </div>
      )}
    </section>
  );
}

export default Rekomendasi;