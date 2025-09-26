// vite.config.mjs
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// replace 'My_Portfolio' with your GitHub repo name
export default defineConfig({
  base: "/portfolio_1/",
  plugins: [react()],
});