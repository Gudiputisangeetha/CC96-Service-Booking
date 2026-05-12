import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer"
  });

  const [otp, setOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);

  const sendOtp = async () => {
    try {
      const res = await axios.post(
        "https://cc96-service-booking.onrender.com/api/auth/send-otp"
      );

      alert(`Demo OTP: ${res.data.otp}`);
    } catch (err) {
      alert("Failed to generate OTP");
    }
  };

  const verifyOtp = async () => {
    try {
      await axios.post(
        "https://cc96-service-booking.onrender.com/api/auth/verify-otp",
        { otp }
      );

      setOtpVerified(true);
      alert("OTP Verified Successfully");
    } catch (err) {
      alert("Invalid OTP");
    }
  };

  const handleSignup = async () => {
    if (!otpVerified) {
      return alert("Please verify OTP first");
    }

    try {
      await axios.post(
        "https://cc96-service-booking.onrender.com/api/auth/signup",
        form
      );

      alert("Signup successful");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data || "Signup failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Customer Signup</h2>

        <input
          placeholder="Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value
            })
          }
        />

        <button onClick={sendOtp}>
          Send OTP
        </button>

        <input
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <button onClick={verifyOtp}>
          Verify OTP
        </button>

        <button onClick={handleSignup}>
          Signup
        </button>
      </div>
    </div>
  );
}