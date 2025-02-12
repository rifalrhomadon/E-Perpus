import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import '../styles/Login.css';
import Gambar from "../image/log-in.png";
import Gogle from "../image/google.png";
import Face from "../image/facebook.png";
import Email from "../image/email.png";
import Pasword from "../image/pass.png";

function Login() {
  const navigate = useNavigate(); // Hook untuk navigasi

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulasikan autentikasi (bisa diganti dengan API call)
    navigate("/dashboard"); // Redirect ke Dashboard setelah login
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
              <input type="email" placeholder="example@gmail.com" required />
            </div>
          </div>
          <div className="input-group">
            <label>Password</label>
            <div className="input-icon">
              <img src={Pasword} alt="Password" />
              <input type="password" placeholder="********" required />
            </div>
          </div>

          <div className="options">
            <label><input type="checkbox" /> Remember me</label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">Login</button> {/* Panggil handleLogin saat klik */}
        </form>

        <p className="register-link">Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
}

export default Login;
