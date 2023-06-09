const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const app = express();

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USERNAME}:ARQRyjek25VDB9s3@app1.m2gto33.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

app.listen(3333);
