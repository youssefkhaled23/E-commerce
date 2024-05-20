import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@componets": path.resolve(__dirname, "./src/componets"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@util": path.resolve(__dirname, "./src/util"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@layout": path.resolve(__dirname, "./src/layout"),
      "@customType": path.resolve(__dirname, "./src/customType"),
      "@feedback": path.resolve(__dirname, "./src/feedback"),
      "@Validtion" :path.resolve(__dirname, "./src/Validtion")
    },
  },
  plugins: [react(), svgr()],
});
