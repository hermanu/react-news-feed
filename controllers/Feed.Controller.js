const FeedModel = require("../models/FeedModel");
const FeedHelper = require("../helpers/Feed.Helper");

// Create Feed
const createFeed = async (feed) => {
  try {
    // const validFeedReddit = {
    //   title: feed.title,
    //   description: feed.title,
    //   date: feed.pubDate,
    //   author: decodeURI(feed.author.toString()),
    //   content: decodeURI(feed.content.toString()).replace("submitted by", ""),
    // };

    const validFeed = {
      title: feed.title,
      description: feed.title,
      date: feed.pubDate,
      author: feed.creator.replace("redaccion@20minutos.es", ""),
      content: feed.content || feed["content:encoded"],
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

//Get archived feed list
const getArchivedFeedList = async () => {
  try {
    return await FeedModel.find({ archived: true }).sort({ archivedDate: -1 });
  } catch (error) {
    console.log("getFeedList Error", error);
  }
};

//Archive feed
const archiveFeed = async (id) => {
  try {
    const filter = { _id: id };
    const feed = { archived: true, archivedDate: new Date() };
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

//Delete feed by Id
const deleteFeedById = async (id) => {
  try {
    return await FeedModel.findByIdAndDelete(id);
  } catch (error) {
    console.log("DeleteFeedById error", error);
  }
};

module.exports = {
  getFeedList,
  getArchivedFeedList,
  createFeed,
  updateFeedList,
  archiveFeed,
  deleteFeedById,
};
