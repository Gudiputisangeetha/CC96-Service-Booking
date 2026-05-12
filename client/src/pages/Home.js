import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="navbar">
        <div>Urban Service Booking</div>
        <div>
          <button className="nav-btn">Offers</button>
          <button className="nav-btn">Support</button>
        </div>
      </div>

      <div className="hero-section">
        <h1>Book Trusted Home Services</h1>
        <p>Cleaning, Repairing, Beauty & More</p>

        <div className="search-box">
          <div className="service-tabs">
            <span>Cleaning</span>
            <span>Repairing</span>
            <span>Beauty</span>
            <span>Plumbing</span>
          </div>

          <Link to="/signup">
            <button>Get Started</button>
          </Link>

          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}