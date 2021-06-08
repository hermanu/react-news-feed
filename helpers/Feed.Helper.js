const Parser = require("rss-parser");
const parser = new Parser();

const validRSSFeedUrls = {
  redditNews: "https://www.reddit.com/r/news/.rss",
  twentyMinutes: "https://www.20minutos.es/rss/",
};
const getRssFeed = async () => {
  const { items: redditNews } = await parser.parseURL(
    validRSSFeedUrls.twentyMinutes
  );
  return redditNews;
};

module.exports = {
  getRssFeed,
};
