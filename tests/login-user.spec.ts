import { test, expect } from "@playwright/test";

test("[TC011] POST login - successful", async ({ request, baseURL }) => {
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

test("[TC012] POST login - unsuccessful (missing password)", async ({
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
  expect(body.error).toBe("Missing password");
});

test("[TC013] POST login - unsuccessful (invalid email format)", async ({
  request,
  baseURL,
}) => {
  const response = await request.post(`${baseURL}/api/login`, {
    data: {
      email: "email.com",
      password: "pistol",
    },
  });

  expect(response.status()).toBe(400);
  const body = await response.json();
  expect(body.error).toBeTruthy();
  expect(body.error).toBe("invalid email format");
});

test("[TC014] POST login - unsuccessful (empty fields)", async ({
  request,
  baseURL,
}) => {
  const response = await request.post(`${baseURL}/api/login`, {
    data: {
      email: "",
      password: "",
    },
  });

  expect(response.status()).toBe(400);
  const body = await response.json();
  expect(body.error).toBeTruthy();
});

test("[TC015] POST login - unsuccessful (wrong password)", async ({
  request,
  baseURL,
}) => {
  const response = await request.post(`${baseURL}/api/login`, {
    data: {
      email: "eve.holt@reqres.in",
      password: "guns",
    },
  });

  expect(response.status()).toBe(400);
  const body = await response.json();
  expect(body.error).toBeTruthy();
});
