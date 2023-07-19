require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const dbConnect = require("./config/dbConnect");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(cors());
app.use(cookieParser());

dbConnect();

mongoose.connection.once("open", () => {
  console.log("connected to mongoDB");
  app.listen(process.env.PORT, () => {
    console.log("server running");
  });
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
