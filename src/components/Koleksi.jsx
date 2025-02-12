import { useEffect, useRef, useState } from "react";
import "../styles/Koleksi.css";

// Import gambar buku
import Kelly from "../image/Kelly Yang.jpeg";
import Margaret from "../image/Margaret Finnegan.jpeg";
import Keeper from "../image/The Keeper.jpeg";
import Dream from "../image/Dream.jpeg";
import Duet from "../image/Home.jpeg";

// Data buku untuk carousel
const books = [
  { id: 1, title: "New From Here", author: "Kelly Yang", rating: "★★★★☆", image: Kelly },
  { id: 2, title: "We Could Be Heroes", author: "Mike Chen", rating: "★★★★★", image: Margaret },
  { id: 3, title: "The Keeper", author: "David Baldacci", rating: "★★★★☆", image: Keeper },
  { id: 4, title: "The Great Dream Robbery", author: "Amy Nguyen", rating: "★★★★★", image: Dream },
  { id: 5, title: "A Duet For Home", author: "Karina Yan Glasser", rating: "★★★★☆", image: Duet },
];

function Koleksi() {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    const items = carousel.children;
    const totalItems = books.length;
    const itemWidth = items[0].offsetWidth + 20; // Sesuaikan dengan margin

    // Clone item untuk efek infinite scroll
    books.forEach((book) => {
      const clone = items[book.id - 1].cloneNode(true);
      carousel.appendChild(clone);
    });

    // Fungsi untuk menggeser carousel
    function moveCarousel() {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        if (newIndex >= totalItems) {
          carousel.style.transition = "none";
          carousel.style.transform = "translateX(0)";
          setTimeout(() => {
            carousel.style.transition = "transform 0.5s ease";
          }, 50);
          return 0;
        } else {
          carousel.style.transform = `translateX(-${newIndex * itemWidth}px)`;
          return newIndex;
        }
      });
    }

    const interval = setInterval(moveCarousel, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="Koleksi" className="featured-books">
      <h2>Koleksi Buku Unggulan</h2>
      <div className="carousel-container">
        <div className="book-carousel" ref={carouselRef}>
          {books.map((book) => (
            <div className="book-item" key={book.id}>
              <div className="book-cover">
                <span className="rating">{book.rating}</span>
                <img src={book.image} alt={book.title} />
              </div>
              <p className="book-title">{book.title}</p>
              <p className="book-author">by {book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Koleksi;
