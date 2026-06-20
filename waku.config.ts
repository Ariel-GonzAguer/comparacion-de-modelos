import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "waku/config";

export default defineConfig({
  vite: {
    server: {
      // host: '0.0.0.0', // DESCOMENTAR ESTO PARA TESTEAR EN RED LOCAL
      port: 3000,
      watch: {
        ignored: ['**/node_modules/**', '**/.git/**', '**/dist/**', '**/*.gen.ts'],
        usePolling: false,
      },
    },
    plugins: [
      tailwindcss(),
      react(),
      babel({ presets: [reactCompilerPreset()] }),
    ],
  },
});
