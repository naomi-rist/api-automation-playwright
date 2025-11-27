import { test, expect } from "@playwright/test";

test("GET list users", async ({ request, baseURL }) => {
  const response = await request.get(`${baseURL}/api/users?page=2`);
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.page).toBe(2);
  expect(Array.isArray(body.data)).toBeTruthy();
  expect(body.data.length).toBeGreaterThan(0);
});
