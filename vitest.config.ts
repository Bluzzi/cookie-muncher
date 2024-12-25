import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
  test: {
    environment: "jsdom",
    environmentOptions: {
      jsdom: {
        url: "https://example.com",
      },
    },
  },
  resolve: {
    alias: [
      { find: "#", replacement: resolve(__dirname, "src") },
    ],
  },
});
