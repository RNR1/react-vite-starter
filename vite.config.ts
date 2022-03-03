import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import eslintPlugin from 'vite-plugin-eslint';
import svgrPlugin from 'vite-plugin-svgr';
import fontsPlugin from 'vite-plugin-fonts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    // eslintPlugin({ cache: true }),
    react(),
    svgrPlugin({
      svgrOptions: {
        configFile: '.svgrrc.json',
      },
    }),
    fontsPlugin({
      google: {
        families: ['Roboto'],
      },
    }),
  ],
});
