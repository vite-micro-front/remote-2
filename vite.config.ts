import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "board",
      filename: "remoteEntry.js",
      exposes: {
        "./page": "./src/board/index.ts",
      },
      shared: {
        react: {
          requiredVersion: "18.2.0",
          singleton: true,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "18.2.0",
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: "7.0.1",
        },
      },
    }),
  ],
  build: {
    target: "chrome89",
  },
});
