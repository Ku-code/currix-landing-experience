import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
// For GitHub Pages: use base '/repo-name/' for project sites, '/' for custom domain (currix.nl)
const repoName = process.env.GITHUB_PAGES_BASE || "";
export default defineConfig({
  base: repoName ? `/${repoName}/` : "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
