const FeedModel = require("../models/FeedModel");
// const FeedHelper = require("../../helpers/Feed.Helper");

// Create Feed
const createFeed = async (feed) => {
  try {
    const validFeed = {
      title: feed.title,
      description: feed.description,
      date: feed.pubDate,
      author: feed.author,
      content: feed.content,
      date: feed.date || new Date(),
    };
    const newFeed = new FeedModel(validFeed);
    await newFeed.save();
    return newFeed;
  } catch (error) {
    throw new Error(error);
  }
};

//Get feed list
const getFeedList = async () => {
  try {
    return await FeedModel.find({ archived: false }).sort({ createdAt: -1 });
  } catch (error) {
    console.log("getFeedList Error", error);
  }
};

//Get archived feed list
const getArchivedFeedList = async () => {
  try {
    const archivedFeedList = await FeedModel.find({ archived: true }).sort({
      archivedDate: -1,
    });
    return archivedFeedList;
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
// No longer needed (commented just in case)
// const updateFeedList = async () => {
//   try {
//     const newFeedList = await FeedHelper.getRssFeed();

//     // check if already exist

//     for (const feed of newFeedList) {
//       const filter = { guid: feed.guid };
//       await FeedModel.findOneAndUpdate(filter, feed, { new: true });
//     }
//     return await FeedModel.find();
//   } catch (error) {
//     console.log("UpdatedFeedlist error", error);
//   }
// };

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
  // updateFeedList,
  archiveFeed,
  deleteFeedById,
};
