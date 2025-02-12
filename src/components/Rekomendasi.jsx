import '../styles/Rekomendasi.css'
import Rembulan from "../image/Rembulan.jpg";
import Laskar from "../image/Laskar.jpg";
import Manusia from "../image/Manusia.jpg";
import Ikan from "../image/Ikan.jpg";
import Kucing from "../image/Kucing.jpg";
function Rekomendasi() {
  return (
    <section id="Rekomendasi" className="recommendation-section">
        <h2>Rekomendasi Buku</h2>
        <div className="book-list">
            <div className="book-items">
                <div className="book-cover">
                    <img src={Rembulan} alt="Rembulan Tenggelam di Wajahmu"/>
                </div>
                <p className="book-title">Rembulan Tenggelam di Wajahmu</p>
            </div>
            <div className="book-items">
                <div className="book-cover">
                    <img src={Laskar} alt="Laskar Pelangi"/>
                </div>
                <p className="book-title">Laskar Pelangi</p>
            </div>
            <div className="book-items">
                <div className="book-cover">
                    <img src={Manusia} alt="Manusia dan Badainya"/>
                </div>
                <p className="book-title">Manusia dan Badainya</p>
            </div>
            <div className="book-items">
                <div className="book-cover">
                    <img src={Ikan} alt="Semua Ikan di Langit"/>
                </div>
                <p className="book-title">Semua Ikan di Langit</p>
            </div>
            <div className="book-items">
                <div className="book-cover">
                    <img src={Kucing} alt="Jika Kucing Lenyap Dari Dunia"/>
                </div>
                <p className="book-title">Jika Kucing Lenyap Dari Dunia</p>
            </div>
        </div>
    </section>
  )
}

export default Rekomendasi
