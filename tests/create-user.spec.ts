import { expect } from "@playwright/test";
import { test } from "../setup/placeholder";

test("POST create user - valid data", async ({ request, token, baseURL }) => {
  const payload = {
    name: "morpheus",
    job: "leader",
  };

  const response = await request.post(`${baseURL}/api/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: JSON.stringify(payload),
  });
  expect(response.status()).toBe(201);

  const body = await response.json();
  expect(body.name).toBe(payload.name);
  expect(body.job).toBe(payload.job);
  expect(body.id).toBeTruthy();
  expect(body.createdAt).toBeTruthy();
});
