const request = require("supertest");
const app = require("../server/server");

describe("verify JWT token", () => {
  it("should verify the authenticity of a JSON web token", async () => {
    const res = await request(app).get("/authentication/verifyToken").set({
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpc19tb2QiOnRydWUsImlzX2FkbWluIjpmYWxzZSwibW9kZXJhdG9yX2lkIjoxfSwiaWF0IjoxNjQ5MTM5Nzg1LCJleHAiOjE2NTE1NTg5ODV9.VsyHkkr4oaH934Lg_FsLkvZ_kYrxICpQgDwLv0KZPKw",
    });
    expect(res.status).toBe(200);
  });
});
