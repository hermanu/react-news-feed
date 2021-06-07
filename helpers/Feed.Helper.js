const Parser = require("rss-parser");
const parser = new Parser();

const getRssFeed = async () => {
  const rssFeedUrl = "https://www.reddit.com/r/news/.rss";
  const { items: redditNews } = await parser.parseURL(rssFeedUrl);
  return redditNews;
};

module.exports = {
  getRssFeed,
};
