const express = require("express");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");
const cors = require("cors");
require("./config/mongo");

app.use(
  cors({
    origin: [
      "https://boomplaydownloader.com",
      "https://boomplay-downloader.com",
      "https://audiomacktomp3.com",
      "https://audiomack-downloader.com",
      "https://jellyfish-app-u6327.ondigitalocean.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URL,
      ttl: 24 * 60 * 60,
    }),
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});
app.use("/", require("./routes"));

module.exports = app;
