// IqwanEngine
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // FIX: Tailwind v4 Vite plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // FIX: Handles @import "tailwindcss" + @theme {} natively
  ],
  base: "/Iqwan-Recruitment-Web/",
});
