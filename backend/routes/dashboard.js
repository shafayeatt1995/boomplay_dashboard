const express = require("express");
const { BoomAd, AudiomackAd } = require("../models");
const router = express.Router();

router.get("/boom-ads", async (req, res) => {
  try {
    const ads = await BoomAd.find({}, { contents: 0 }).sort({ _id: -1 });
    res.json(ads);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error });
  }
});
router.post("/boom-ads/create", async (req, res) => {
  try {
    const ad = await BoomAd.create(req.body);
    res.json(ad);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error });
  }
});
router.post("/boom-ads/status/:id", async (req, res) => {
  try {
    await BoomAd.updateOne({ _id: req.params.id }, [
      { $set: { status: { $eq: [false, "$status"] } } },
    ]);
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error });
  }
});
router.patch("/boom-ads/:id", async (req, res) => {
  try {
    delete req.body._id;
    const ad = await BoomAd.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(ad);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error });
  }
});
router.delete("/boom-ads/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await BoomAd.findByIdAndDelete(id);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
router.get("/boom-ads/:id", async (req, res) => {
  try {
    const ad = await BoomAd.findById(req.params.id);
    res.json(ad);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error });
  }
});

router.get("/audiomack-ads", async (req, res) => {
  try {
    const ads = await AudiomackAd.find({}, { contents: 0 });
    res.json(ads);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error });
  }
});
router.post("/audiomack-ads/create", async (req, res) => {
  try {
    const ad = await AudiomackAd.create(req.body);
    res.json(ad);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error });
  }
});
router.post("/audiomack-ads/status/:id", async (req, res) => {
  try {
    await AudiomackAd.updateOne({ _id: req.params.id }, [
      { $set: { status: { $eq: [false, "$status"] } } },
    ]);
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error });
  }
});
router.patch("/audiomack-ads/:id", async (req, res) => {
  try {
    delete req.body._id;
    const ad = await AudiomackAd.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(ad);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error });
  }
});
router.delete("/audiomack-ads/:id", async (req, res) => {
  try {
    await AudiomackAd.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
router.get("/audiomack-ads/:id", async (req, res) => {
  try {
    const ad = await AudiomackAd.findById(req.params.id);
    res.json(ad);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error });
  }
});

module.exports = router;
