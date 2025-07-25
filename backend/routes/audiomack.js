const express = require("express");
const router = express.Router();
const AudiomackDownloader = require("../utils/AudiomackDownloader");

const audiomackDownloader = new AudiomackDownloader();

router.get("/", (req, res, next) => {
  res.send("Hello World");
});

router.post("/get-songs-by-album", async (req, res, next) => {
  const { artist, album } = req.body;
  const response = await audiomackDownloader.getSongsByAlbum(artist, album);
  res.send(response);
});

router.post("/get-song-by-name", async (req, res, next) => {
  const { artist, song } = req.body;
  console.log(req.body);
  const response = await audiomackDownloader.getSongByName(artist, song);
  res.send(response);
});

router.post("/get-song-by-id", async (req, res, next) => {
  const { songId } = req.body;
  const response = await audiomackDownloader.getSongById(songId);
  res.send(response);
});

router.post("/get-song-url-by-id", async (req, res, next) => {
  const { songId } = req.body;
  const response = await audiomackDownloader.getSongUrlById(songId);
  res.send(response);
});

module.exports = router;
