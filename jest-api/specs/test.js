let request = require("supertest");
const superagent = require("superagent");
//require("superagent-retry")(superagent);

describe("Test the Users API", () => {
  test("It Should respond with the User details", () => {
    request("https://httpbin.org")
      .get("/get")
      .set("Content-Type", "application/json")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});
