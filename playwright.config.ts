import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  timeout: 30 * 1000,
  testDir: "./tests",
  retries: 0,
  reporter: [["list"], ["html", { outputFolder: "playwright-report" }]],
  use: {
    // Base URL for API tests; can be overridden per test if needed.
    baseURL: "https://reqres.in",
    extraHTTPHeaders: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-api-key": "reqres-free-v1",
    },
  },
};
export default config;
