const User = require("../models/User");

module.exports = {
  async show(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (user) {
      return res.status(200).json({ message: "OK", data: user._id });
    } else {
      return res
        .status(401)
        .json({ error: "Usuario não cadastrado ou informações invalidas" });
    }
  },
};
