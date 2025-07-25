const express = require("express");
const isAuthenticated = require("../middleware/isAuthenticated.js");
const {
  AudiomackAd,
  BoomRecent,
  AudioRecent,
  BoomAd,
} = require("../models/index.js");
const router = express.Router();

router.use("/auth", require("./auth"));
router.use("/audiomack", require("./audiomack"));
router.get("/audiomack-ad", async (req, res) => {
  try {
    const ads = await AudiomackAd.find();
    return res.json(ads);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error });
  }
});
router.get("/boomplay-ad", async (req, res) => {
  try {
    const ads = await BoomAd.find();
    return res.json(ads);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error });
  }
});

router.post("/set-recent/:type", async (req, res) => {
  try {
    const { id, title, artist, image } = req.body;
    const { type } = req.params;
    const data = { id, title, artist, image };

    if (id && title && artist && image) {
      if (type === "boomplay") {
        const find = await BoomRecent.findOne({ id });
        if (!find) {
          const totalCount = await BoomRecent.countDocuments();
          if (totalCount > 5) {
            await BoomRecent.findOneAndDelete({});
          }
          await BoomRecent.create(data);
        }
      } else if (type === "audiomack") {
        const find = await AudioRecent.findOne({ id });
        if (!find) {
          const totalCount = await AudioRecent.countDocuments();
          if (totalCount > 5) {
            await AudioRecent.findOneAndDelete({});
          }
          await AudioRecent.create(data);
        }
      }
    }
    return { success: true };
  } catch (error) {
    return { success: false };
  }
});
router.get("/get-recent/:type", async (req, res) => {
  try {
    const { type } = req.params;
    let recent = [];
    if (type === "boomplay") {
      recent = await BoomRecent.find().sort({ _id: -1 });
    } else if (type === "audiomack") {
      recent = await AudioRecent.find().sort({ _id: -1 });
    }
    return { success: true, recent };
  } catch (error) {
    return { success: false };
  }
});

router.use(isAuthenticated);
router.use("/user", require("./user"));
router.use("/dashboard", require("./dashboard.js"));

module.exports = router;
