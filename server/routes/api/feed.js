const express = require("express");
const router = express.Router();

const FeedController = require("../../controllers/Feed.Controller");

// Create new feed list
router.post("/", async (req, res, next) => {
  let response;
  try {
    response = await new FeedController().createFeed(req.body);
  } catch (error) {
    next(error);
  }
  res.send(response);
});

//Get news feed list
router.get("/", async (req, res, next) => {
  try {
    const response = await new FeedController().getNewsFeedList();
    res.send(response);
  } catch (error) {
    next(error);
  }
});

//Get archived feed list
router.get("/archived", async (req, res, next) => {
  try {
    const response = await new FeedController().getArchivedFeedList();
    res.send(response);
  } catch (error) {
    next(error);
  }
});

//Update new feed
router.put("/:id", async (req, res, next) => {
  let response;
  try {
    const id = req.params.id;
    const feed = req.body;
    response = await new FeedController().updateFeed(id, feed);
  } catch (error) {
    next(error);
  }
  res.send(response);
});

//Delete new feed
router.delete("/:id", async (req, res, next) => {
  let response;
  try {
    const id = req.params.id;
    response = await new FeedController().deleteFeed(id);
  } catch (error) {
    next(error);
  }
  res.send(response);
});

// Not needed (commented just in case)
// // Updates news feed list
// router.post("/update", async (req, res) => {
//   try {
//     const response = await FeedController.updateFeedList();
//     res.send(response);
//   } catch (error) {
//     throw new Error(error);
//   }
// });

module.exports = router;
