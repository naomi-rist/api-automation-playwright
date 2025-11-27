import { test, expect } from "@playwright/test";

test("PATCH user", async ({ request, baseURL }) => {
  const response = await request.patch(`${baseURL}/api/users/2`, {
    data: {
      name: "morpheus",
      job: "manager",
    },
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.job).toBe("manager");
  expect(body.name).toBe("morpheus");
  expect(body.updatedAt).toBeTruthy();
});
