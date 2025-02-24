const { loadNuxt, build } = require("nuxt");
require("dotenv").config();
const app = require("express")();
const isDev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 8080;
const cors = require("cors");

app.use(
  cors({
    origin: [
      "https://boomplaydownloader.com",
      "https://boomplay-downloader.com",
      "https://audiomack-downloader.com",
      "https://audiomacktomp3.com",
      "http://localhost:8080",
      "http://localhost:3000",
    ],
  })
);

async function start() {
  const nuxt = await loadNuxt(isDev ? "dev" : "start");
  app.use(nuxt.render);
  if (isDev) {
    await build(nuxt);
  }

  app.listen(port, "0.0.0.0");
  console.log("Server listening on `localhost:" + port + "`.");
}

start();
