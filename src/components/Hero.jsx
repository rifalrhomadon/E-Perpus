import Maskot from "../image/Maskot.png";
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h2>
              Dari fiksi hingga ilmu pengetahuan, semua yang kamu cari ada di 
              <span className="highlight"> E-Perpus</span> – solusi membaca masa kini.
            </h2>
            <button className="cta">Mulai Membaca</button>
          </div>
          <div className="hero-image">
            <img src={Maskot} alt="Maskot E-Perpus" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
