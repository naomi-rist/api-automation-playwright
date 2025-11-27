import { test as base, expect } from "@playwright/test";

export const test = base.extend<{
  token: string;
}>({
  token: async ({ request }, use) => {
    const res = await request.post("/api/login", {
      data: {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      },
    });

    expect(res.status()).toBe(200);
    const body = await res.json();
    await use(body.token);
  },
});
