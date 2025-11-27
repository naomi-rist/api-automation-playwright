import { test, expect } from "@playwright/test";

test("[TC004] DELETE user", async ({ request, baseURL }) => {
  const response = await request.delete(`${baseURL}/api/users/2`);
  expect(response.status()).toBe(204);
});

test("[TC005] DELETE user - unknown user id", async ({ request, baseURL }) => {
  const response = await request.delete(`${baseURL}/api/users/unknown`);
  expect(response.status()).toBe(404);
});

test("[TC006] DELETE user - without any user id", async ({
  request,
  baseURL,
}) => {
  const response = await request.delete(`${baseURL}/api/users/`);
  expect(response.status()).toBe(400);
});

test("[TC007] DELETE user - with alphanumeric id", async ({
  request,
  baseURL,
}) => {
  const response = await request.delete(`${baseURL}/api/users/123abc`);
  expect(response.status()).toBe(400);
});

test("[TC008] DELETE user - delete user twice", async ({
  request,
  baseURL,
}) => {
  const response = await request.delete(`${baseURL}/api/users/2`);
  expect(response.status()).toBe(204);
  const response2 = await request.delete(`${baseURL}/api/users/2`);
  expect(response2.status()).toBe(404);
});
