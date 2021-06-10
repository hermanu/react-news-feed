const express = require("express");
const router = express.Router();
const FeedController = require("../../controllers/Feed.Controller");

//Get news feed list
router.get("/", async (req, res) => {
  try {
    const response = await FeedController.getFeedList();
    res.send(response);
  } catch (error) {
    console.log("Router get / error", error);
  }
});

//Get archived feed list
router.get("/archived", async (req, res) => {
  try {
    const response = await FeedController.getArchivedFeedList();
    res.send(response);
  } catch (error) {
    console.log("Router get / error", error);
  }
});

// Updates news feed list
router.post("/update", async (req, res) => {
  try {
    const response = await FeedController.updateFeedList();
    res.send(response);
  } catch (error) {
    console.log("Router post /update error", error);
  }
});

//Archive new feed
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await FeedController.archiveFeed(id);
    res.send(response);
  } catch (error) {
    console.log("Router patch /id error", error);
  }
});

//Delete new feed
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await FeedController.deleteFeedById(id);
    res.send(response);
  } catch (error) {
    console.log("Router patch /id error", error);
  }
});

// Updates news feed list
router.post("/", async (req, res) => {
  try {
    const response = await FeedController.createFeed(req.body);
    res.send(response);
  } catch (error) {
    console.log("Router post createFeed error", error);
  }
});

module.exports = router;
