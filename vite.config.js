import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Define caminhos relativos
  plugins: [react()],
});
