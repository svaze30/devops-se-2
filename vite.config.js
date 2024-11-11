import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/devops-se-2/",
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/setupTests.js"],
    coverage: {
      reporter: ["text", "json", "html"],
      exclude: ["node_modules/", "src/setupTests.js"],
    },
  },
});
