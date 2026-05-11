const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  customerId: String,
  customerName: String,
  customerEmail: String,
  serviceName: String,
  address: String,
  date: String,
  status: {
    type: String,
    enum: ["pending", "accepted", "delivered"],
    default: "pending"
  }
});

module.exports = mongoose.model("Booking", bookingSchema);