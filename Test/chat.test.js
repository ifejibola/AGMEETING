const { createServer } = require("http");
const { Server } = require("socket.io");
const Client = require("socket.io-client");
const db = require("../models/index");
const request = require("supertest");
const app = require("../server/server");

describe("verify soket-io connection established", () => {
  let io, serverSocket, clientSocket;

  beforeAll((done) => {
    const httpServer = createServer();
    io = new Server(httpServer);
    httpServer.listen(() => {
      const port = httpServer.address().port;
      clientSocket = new Client(`http://localhost:${port}`);
      io.on("connection", (socket) => {
        serverSocket = socket;
      });
      clientSocket.on("connect", done);
    });
  });

  afterAll(() => {
    io.close();
    clientSocket.close();
  });

  test("verify message send/recieve", (done) => {
    clientSocket.on("hello", (arg) => {
      expect(arg).toBe("world");
      done();
    });
    serverSocket.emit("hello", "world");
  });
});

describe("verify get room messages endpoint", () => {
  let thisDb = db;
  beforeAll(async () => {
    await thisDb.sequelize.sync({ force: true });
  });

  it("should get all the messages for a meeting", async () => {
    const res = await request(app).get("/chat/roomMessages").set({
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpc19tb2QiOnRydWUsImlzX2FkbWluIjpmYWxzZSwibW9kZXJhdG9yX2lkIjoxfSwiaWF0IjoxNjQ5MTM5Nzg1LCJleHAiOjE2NTE1NTg5ODV9.VsyHkkr4oaH934Lg_FsLkvZ_kYrxICpQgDwLv0KZPKw",
    });
    expect(res.status).toBe(200);
  });

  afterAll(async () => {
    await thisDb.sequelize.close();
  });
});
