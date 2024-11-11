import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/setupTests.js"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        "src/setupTests.js",
        "**/*.test.{js,jsx}",
        "dist/**",
      ],
      include: ["src/**/*.{js,jsx}"],
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
