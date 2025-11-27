import { test, expect } from "@playwright/test";

test("[TC016] POST register - successful", async ({ request, baseURL }) => {
  const response = await request.post(`${baseURL}/api/register`, {
    data: {
      email: "eve.holt@reqres.in",
      password: "pistol",
    },
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.token).toBeTruthy();
});

test("[TC017] POST register - unsuccessful (missing password)", async ({
  request,
  baseURL,
}) => {
  const response = await request.post(`${baseURL}/api/register`, {
    data: {
      email: "sydney@fife",
    },
  });

  expect(response.status()).toBe(400);
  const body = await response.json();
  expect(body.error).toBeTruthy();
});

test("[TC018] POST register - unsuccessful (with existing email)", async ({
  request,
  baseURL,
}) => {
  const response = await request.post(`${baseURL}/api/register`, {
    data: {
      email: "eve.holt@reqres.in",
      password: "pistol",
    },
  });

  expect(response.status()).toBe(400);
  const body = await response.json();
  expect(body.error).toBeTruthy();
});
