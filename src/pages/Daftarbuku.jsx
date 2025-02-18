import { useState } from "react";
import { Link } from "react-router-dom";
import Formtambahbuku from "./Formtambahbuku";
import "../styles/Admin.css";
import Margaret from '../image/Margaret Finnegan.jpeg';
import Rembulan from '../image/Rembulan.jpg';

function Daftarbuku() {
    const [modalOpen, setModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState(""); // State untuk search input
    const [filteredBooks, setFilteredBooks] = useState([]); // State untuk filtered books

    const books = [
        {
            id: 1,
            title: "We Could Be Heroes",
            image: Margaret,
            isbn: "001235831",
            category: "Novel Fantasi",
            author: "Margaret Finnegan",
            publisher: "PT Elex Media",
            description: "Lorem ipsum dolor sit amet...",
        },
        {
            id: 2,
            title: "Rembulan Tenggelam Di Wajahmu",
            image: Rembulan,
            isbn: "001255831",
            category: "Novel Fiksi",
            author: "Tere Liye",
            publisher: "Sabak Girip",
            description: "Lorem ipsum dolor sit amet...",
        }
    ];

    // Function to handle search
    const handleSearch = () => {
        const result = books.filter((book) =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredBooks(result);
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
                        <li className="sidebar__item sidebar__item--active">
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

                {/* Search Bar */}
                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Cari buku berdasarkan judul..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="btn-search" onClick={handleSearch}>
                        <i className="fa-solid fa-search"></i> Search
                    </button>
                </div>

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
                            {filteredBooks.length > 0 ? (
                                filteredBooks.map((book, index) => (
                                    <tr key={book.id}>
                                        <td>{index + 1}</td>
                                        <td>{book.title}</td>
                                        <td><img src={book.image} alt={book.title} className="book-img" /></td>
                                        <td>{book.isbn}</td>
                                        <td>{book.category}</td>
                                        <td>{book.author}</td>
                                        <td>{book.publisher}</td>
                                        <td>{book.description}</td>
                                    </tr>
                                ))
                            ) : (
                                books.map((book, index) => (
                                    <tr key={book.id}>
                                        <td>{index + 1}</td>
                                        <td>{book.title}</td>
                                        <td><img src={book.image} alt={book.title} className="book-img" /></td>
                                        <td>{book.isbn}</td>
                                        <td>{book.category}</td>
                                        <td>{book.author}</td>
                                        <td>{book.publisher}</td>
                                        <td>{book.description}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}

export default Daftarbuku;
