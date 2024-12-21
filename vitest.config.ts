/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
        enabled: true,
        provider: 'istanbul' ,
        reporter: ['text', 'json', 'html', 'lcov'],
        all: true,
        include: ['app/**/*.{ts,tsx}'], // Files to include
        exclude: ['node_modules', 'test/**/*', 'dist', '*.config.*'], // Excluded files or directories
      },
      setupFiles:"app/tests/setup.ts"
  },

});
