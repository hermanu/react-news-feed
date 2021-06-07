const FeedModel = require("../models/FeedModel");
const FeedHelper = require("../helpers/Feed.Helper");

// Create Feed
const createFeed = async (feed) => {
  try {
    const validFeed = {
      title: feed.title,
      description: feed.title,
      date: feed.pubDate,
      author: decodeURI(feed.author.toString()),
      content: decodeURI(feed.content.toString()).replace("submitted by", ""),
    };
    const newFeed = new FeedModel(validFeed);
    await newFeed.save();
    return newFeed;
  } catch (error) {
    console.log("CreateFeed Error", error);
  }
};

//Get feed list
const getFeedList = async () => {
  try {
    return await FeedModel.find({ archived: false });
  } catch (error) {
    console.log("getFeedList Error", error);
  }
};

//Update feedById

const updateFeedById = async (id, feed) => {
  try {
    const filter = { _id: id };
    const updatedFeed = await FeedModel.findOneAndUpdate(filter, feed, {
      new: true,
    });
    return updatedFeed;
  } catch (error) {
    console.log(error);
  }
};

const updateFeedList = async () => {
  try {
    const newFeedList = await FeedHelper.getRssFeed();

    for (const feed of newFeedList) {
      await createFeed(feed);
    }
    return await FeedModel.find();
  } catch (error) {
    console.log("UpdatedFeedlist error", error);
  }
};

module.exports = {
  getFeedList,
  createFeed,
  updateFeedList,
  updateFeedById,
};
