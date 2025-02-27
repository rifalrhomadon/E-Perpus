import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard"; // Import Dashboard
import Daftarbuku from "./pages/Daftarbuku";
import Daftarmember from "./pages/Daftarmember";
import Peminjamanbuku from "./pages/Peminjamanbuku";
import Pengembalianbuku from "./pages/Pengembalianbuku";
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/daftar-member" element={<Daftarmember />} />
        <Route path="/daftar-buku" element={<Daftarbuku />} />
        <Route path="/peminjaman-buku" element={<Peminjamanbuku />} />
        <Route path="/pengembalian-buku" element={<Pengembalianbuku />} />
      </Routes>
    </Router>
  );
}

export default App;
