import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="navbar">
        Urban Service Booking
      </div>

      <div className="container">
        <div className="card">
          <h1 className="hero-title">
            Book Trusted Home Services
          </h1>

          <p className="hero-subtitle">
            Cleaning, Repairs, Beauty, Home Care
          </p>

          <Link to="/login">
            <button>Login</button>
          </Link>

          <Link to="/signup">
            <button>Signup</button>
          </Link>
        </div>
      </div>
    </div>
  );
}