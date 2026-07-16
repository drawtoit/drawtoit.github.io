import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base is "/" because this deploys to drawtoit.github.io (user site).
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      // Windows: EBUSY crashes when watching big binaries mid-copy.
      // Asset changes need a dev-server restart, source HMR unaffected.
      ignored: ["**/src/assets/**"],
    },
  },
});
