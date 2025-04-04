import { vitePlugin as remix } from '@remix-run/dev';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [tsconfigPaths(), remix()],
  root: __dirname,
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
