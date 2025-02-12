import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Koleksi from '../components/Koleksi';
import Rekomendasi from '../components/Rekomendasi';
import Event from '../components/Event';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Koleksi></Koleksi>
      <Rekomendasi></Rekomendasi>
      <Event></Event>
      <Footer></Footer>
    </div>
  )
}

export default Home