import { Link } from "react-router-dom"; 
import '../styles/Register.css';
import Join from "../image/register.png";
import Googlee from "../image/google.png";
import Facebook from "../image/facebook.png";

function Register() {  // Ubah nama fungsi menjadi PascalCase
  return (
    <div className="container">
      <div className="image-section">
        <img src={Join} alt="Register Illustration" />
      </div>
      <div className="register-section">
        <h2>Create An Account</h2>
        <form>
          <div className="input-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="example@gmail.com" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="********" />
          </div>
          <button className="register-btn">Register</button>
        </form>
        <div className="social-icons">
          <img src={Googlee} alt="Google" />
          <img src={Facebook} alt="Facebook" />
        </div>
        <p className="login-link">Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Register;
