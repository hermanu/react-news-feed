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

// Updates news feed list
router.post("/update", async (req, res) => {
  try {
    const response = await FeedController.updateFeedList();
    res.send(response);
  } catch (error) {
    console.log("Router post /update error", error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const feed = req.body;
    const response = await FeedController.updateFeedById(id, feed);
    res.send(response);
  } catch (error) {
    console.log("Router patch /id error", error);
  }
});

module.exports = router;
