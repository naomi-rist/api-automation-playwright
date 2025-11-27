import { test, expect } from "@playwright/test";

test("DELETE user", async ({ request, baseURL }) => {
  const response = await request.delete(`${baseURL}/api/users/2`);
  expect(response.status()).toBe(204);
});

test("DELETE user - unknown user id", async ({ request, baseURL }) => {
  const response = await request.delete(`${baseURL}/api/users/unknown`);
  expect(response.status()).toBe(204);
});

test("DELETE user - without any user id", async ({ request, baseURL }) => {
  const response = await request.delete(`${baseURL}/api/users/`);
  expect(response.status()).toBe(204);
});
