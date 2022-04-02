const request = require("supertest");
const app = require("../server/server");

describe("verify JWT token", () => {
  it("should verify the authenticity of a JSON web token", async () => {
    const res = await request(app).get("/authentication/verifyToken").set({
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpc01vZCI6dHJ1ZX0sImlhdCI6MTY0NzYyMDIwMX0.Xb7W2jQB7RElKeIQXki8nqD2nmmyXxjaxslhpJTsuVw",
    });
    expect(res.status).toBe(200);
  });
});
