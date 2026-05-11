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

  const verifyOtp = () => {
    if (otp === "123456") {
      setOtpVerified(true);
      alert("OTP Verified Successfully");
    } else {
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
    <div className="container">
      <div className="card">
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

        <input
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <p>Demo OTP: 123456</p>

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