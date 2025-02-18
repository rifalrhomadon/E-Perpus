import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import Gambar from "../image/log-in.png";
import Gogle from "../image/google.png";
import Face from "../image/facebook.png";
import Email from "../image/email.png";
import Pasword from "../image/pass.png";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Data akun sementara (bisa diganti dengan API backend)
  const adminAccount = {
    email: "admin@eperpus.com",
    password: "admin123",
  };

  const userAccount = {
    email: "user@eperpus.com",
    password: "user123",
  };

    const handleLogin = (e) => {
      e.preventDefault();
    
      if (email === "user@eperpus.com" && password === "user123") {
        const userData = { name: "John Doe", email: "user@eperpus.com" };
        localStorage.setItem("user", JSON.stringify(userData)); // Simpan user
        navigate("/");
      } else if (email === "admin@eperpus.com" && password === "admin123") {
        const adminData = { name: "Admin", email: "admin@eperpus.com" };
        localStorage.setItem("user", JSON.stringify(adminData));
        navigate("/dashboard");
      } else {
        alert("Email atau password salah!");
      }
    };

  return (
    <div className="container">
      <div className="image-section">
        <img src={Gambar} alt="Login Illustration" />
      </div>

      <div className="login-section">
        <h2>Welcome to <span className="highlight">E-Perpus</span></h2>

        <button className="social-btn google">
          <img src={Gogle} alt="Google" /> Login with Google
        </button>
        <button className="social-btn facebook">
          <img src={Face} alt="Facebook" /> Login with Facebook
        </button>

        <p className="or-text">OR</p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <div className="input-icon">
              <img src={Email} alt="Email" />
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="input-icon">
              <img src={Pasword} alt="Password" />
              <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="options">
            <label><input type="checkbox" /> Remember me</label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="register-link">Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
}

export default Login;
