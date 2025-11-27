import { test, expect } from "@playwright/test";

test("[TC020] PUT update user", async ({ request, baseURL }) => {
  const response = await request.put(`${baseURL}/api/users/2`, {
    data: {
      name: "morpheus",
      job: "CTO",
    },
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.job).toBe("CTO");
  expect(body.updatedAt).toBeTruthy();
});
