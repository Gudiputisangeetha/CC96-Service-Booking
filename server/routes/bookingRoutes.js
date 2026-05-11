const router = require("express").Router();
const Booking = require("../models/Booking");

router.post("/create", async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.json(booking);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/all", async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

router.put("/accept/:id", async (req, res) => {
  const booking = await Booking.findByIdAndUpdate(
    req.params.id,
    { status: "accepted" },
    { new: true }
  );
  res.json(booking);
});

router.put("/deliver/:id", async (req, res) => {
  const booking = await Booking.findByIdAndUpdate(
    req.params.id,
    { status: "delivered" },
    { new: true }
  );
  res.json(booking);
});

module.exports = router;