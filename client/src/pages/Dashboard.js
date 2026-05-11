import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const [service, setService] = useState("Cleaning");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const res = await axios.get(
      "https://cc96-service-booking.onrender.com/api/bookings/all"
    );
    setBookings(res.data);
  };

  const createBooking = async () => {
    await axios.post(
      "https://cc96-service-booking.onrender.com/api/bookings/create",
      {
        customerId: user._id,
        customerName: user.name,
        customerEmail: user.email,
        serviceName: service,
        address: "Hyderabad",
        date: "2026-05-11"
      }
    );

    fetchBookings();
  };

  const acceptBooking = async (id) => {
    await axios.put(
      `https://cc96-service-booking.onrender.com/api/bookings/accept/${id}`
    );
    fetchBookings();
  };

  const deliverBooking = async (id) => {
    await axios.put(
      `https://cc96-service-booking.onrender.com/api/bookings/deliver/${id}`
    );
    fetchBookings();
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div>
      <div className="navbar">
        Dashboard - {user.role}
      </div>

      <div className="container">
        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>

        {user.role === "customer" && (
          <div className="card">
            <h2>Book Service</h2>

            <select
              value={service}
              onChange={(e) =>
                setService(e.target.value)
              }
              style={{
                width: "100%",
                padding: "14px",
                marginTop: "12px",
                borderRadius: "8px"
              }}
            >
              <option>Cleaning</option>
              <option>Repairing</option>
              <option>Beauty Service</option>
              <option>Plumbing</option>
              <option>Electrician</option>
            </select>

            <button onClick={createBooking}>
              Confirm Booking
            </button>
          </div>
        )}

        {bookings.map((booking) => (
          <div className="booking-card" key={booking._id}>
            <p>Customer: {booking.customerName}</p>
            <p>Email: {booking.customerEmail}</p>
            <h3>{booking.serviceName}</h3>
            <p>{booking.address}</p>
            <p className={`status ${booking.status}`}>
              Status: {booking.status}
            </p>

            {user.role === "vendor" &&
              booking.status === "pending" && (
                <button
                  onClick={() =>
                    acceptBooking(booking._id)
                  }
                >
                  Accept
                </button>
              )}

            {user.role === "vendor" &&
              booking.status === "accepted" && (
                <button
                  onClick={() =>
                    deliverBooking(booking._id)
                  }
                >
                  Deliver
                </button>
              )}
          </div>
        ))}
      </div>
    </div>
  );
}