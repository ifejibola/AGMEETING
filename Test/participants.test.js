const { createServer } = require("http");
const Participant = require("../server/participant/models/participant");
const db = require("../models/index");
const request = require("supertest");
const app = require("../server/server");

describe("Verify get meeting participants", () => {
  let thisDb = db;
  beforeAll(async () => {
    await thisDb.sequelize.sync({ force: true });
  });
  it("Should get all the participants in a meeting", async () => {
    const res = await request(app)
      .get("/participants/meetingParticipants")
      .set({
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpc19tb2QiOnRydWUsImlzX2FkbWluIjpmYWxzZSwibW9kZXJhdG9yX2lkIjoxfSwiaWF0IjoxNjQ5MTM5Nzg1LCJleHAiOjE2NTE1NTg5ODV9.VsyHkkr4oaH934Lg_FsLkvZ_kYrxICpQgDwLv0KZPKw",
      });
    expect(res.body).toEqual([
      {
        email: "test@test.com",
        id: 1,
        is_admin: false,
        is_mod: true,
        moderator_id: 1,
      },
      {
        email: "test2@test.com",
        id: 3,
        is_admin: false,
        is_mod: false,
        moderator_id: 1,
      },
    ]);
  });
});

describe("verify participant deletion endpoint", () => {
  let thisDb = db;
  beforeAll(async () => {
    await thisDb.sequelize.sync({ force: true });
  });

  it("should verify that the deletion endpoint is working", async () => {
    const res = await request(app)
      .post("/participants/deleteParticipant")
      .set({
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpc19tb2QiOnRydWUsImlzX2FkbWluIjpmYWxzZSwibW9kZXJhdG9yX2lkIjoxfSwiaWF0IjoxNjQ5MTM5Nzg1LCJleHAiOjE2NTE1NTg5ODV9.VsyHkkr4oaH934Lg_FsLkvZ_kYrxICpQgDwLv0KZPKw",
      })
      .send([4]);
    expect(res.body).toBe("success");
  });

  afterAll(async () => {
    await thisDb.sequelize.close();
  });
});
