const Booking = require("../models/Booking");

module.exports = {
  async store(req, res) {
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { date } = req.body;

    try {
      const booking = await Booking.create({
        user: user_id,
        spot: spot_id,
        date,
      });

      return res.status(200).json(booking);
    } catch {
      return res
        .status(400)
        .json({ error: "Não foi possivel criar sua reserva" });
    }
  },
};
