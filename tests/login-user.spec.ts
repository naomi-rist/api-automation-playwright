import { test, expect } from "@playwright/test";

test("POST login - successful", async ({ request, baseURL }) => {
  const response = await request.post(`${baseURL}/api/login`, {
    data: {
      email: "eve.holt@reqres.in",
      password: "pistol",
    },
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.token).toBeTruthy();
});

test("POST login - unsuccessful (missing password)", async ({
  request,
  baseURL,
}) => {
  const response = await request.post(`${baseURL}/api/login`, {
    data: {
      email: "sydney@fife",
    },
  });

  expect(response.status()).toBe(400);
  const body = await response.json();
  expect(body.error).toBeTruthy();
});
