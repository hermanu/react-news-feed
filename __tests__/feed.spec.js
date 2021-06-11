// const FeedController = require("../server/controllers/Feed.Controller");
const request = require("supertest");
const mongoose = require("mongoose");

let app;
let currentFeed;
let server;

const feedExample = {
  title: "Test title",
  description: "Test description",
  content: "Test Contet",
  author: "Test Author",
};

beforeAll(() => {
  app = require("../server/server.js");
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
});

describe("Feed Endpoints", () => {
  test("POST /api/v1/feed should create a new feed", async () => {
    const { body: createdFeed } = await request(app)
      .post("/api/v1/feed")
      .send(feedExample);
    expect(createdFeed).toHaveProperty("createdAt");
    expect(createdFeed.createdAt).toEqual(createdFeed.updatedAt);
    expect(createdFeed.archived).not.toBeTruthy();
    currentFeed = createdFeed;
  });

  test("GET /api/v1/feed should get a list of NEW feeds", async () => {
    const { body: feedList } = await request(app).get("/api/v1/feed");
    expect(Array.isArray(feedList)).toBeTruthy();
    expect(feedList[0]).toEqual(currentFeed);
  });

  test("PUT /api/v1/feed/:id should return updated feed ", async () => {
    currentFeed.archived = true;
    const { body: updatedFeed } = await request(app)
      .put(`/api/v1/feed/${currentFeed._id}`)
      .send(currentFeed);
    expect(updatedFeed.archived).toEqual(true);
    expect(updatedFeed.modifiedAt).not.toEqual(updatedFeed.createdAt);
    currentFeed = updatedFeed;
  });

  test("GET /api/v1/feed/archived should get a list of ARCHIVED feeds", async () => {
    const { body: archivedFeedList } = await request(app).get(
      "/api/v1/feed/archived"
    );
    expect(Array.isArray(archivedFeedList)).toBeTruthy();
    expect(archivedFeedList[0]).toEqual(currentFeed);
  });

  test("DELETE /api/v1/feed/:id should delete a feed given an _id", async () => {
    const { body: deletedFeed } = await request(app).delete(
      `/api/v1/feed/${currentFeed._id}`
    );
    expect(deletedFeed).toEqual(currentFeed);
  });
});

afterAll((done) => {
  mongoose.connection.db.dropDatabase();
  // mongoose.disconnect(done);
  done();
});
