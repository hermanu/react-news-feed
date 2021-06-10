const FeedModel = require("../models/FeedModel");
// const FeedHelper = require("../../helpers/Feed.Helper");

// Create Feed

const FeedController = class {
  async createFeed(feed) {
    try {
      feed = { ...feed, date: new Date() };
      return await new FeedModel(feed).save();
    } catch (error) {
      throw new Error(error);
    }
  }

  async getNewsFeedList() {
    try {
      return await FeedModel.find({ archived: false }).sort({ createdAt: -1 });
    } catch (error) {
      throw new Error(error);
    }
  }

  async getArchivedFeedList() {
    try {
      return await FeedModel.find({ archived: true }).sort({ createdAt: -1 });
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateFeed(id, feed) {
    try {
      return await FeedModel.findByIdAndUpdate(id, feed, { new: true });
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteFeed(id) {
    try {
      return await FeedModel.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
};

module.exports = FeedController;
