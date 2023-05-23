const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  date: String,
  apprved: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Spot",
  },
});

module.exports = mongoose.model("Bookingt", BookingSchema);
