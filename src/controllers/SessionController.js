const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { email, password, company } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      const user = await User.create({ email, password, company });
      return res.status(200).json({ message: "OK", data: user });
    } else {
      return res.status(400).json({
        error:
          "Usuario já cadstrado, por favor insira um novo email ou faça login",
      });
    }
  },
};
