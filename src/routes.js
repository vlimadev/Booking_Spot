const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const SessionController = require("./controllers/SessionController");
const LoginController = require("./controllers/LoginController");
const SpotController = require("./controllers/SpotController");
const ProfileController = require("./controllers/ProfileController");
const BookingController = require("./controllers/BookingController");
const routes = express.Router();
const upload = multer(uploadConfig);

routes.post("/login", LoginController.show);
routes.get("/profile", ProfileController.show);
routes.post("/register", SessionController.store);

routes.get("/spots", SpotController.index);
routes.post("/spots", upload.single("thumbnail"), SpotController.store);
routes.post("/spots/:spot_id/bookings", BookingController.store);

module.exports = routes;
