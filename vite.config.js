import { defineConfig } from 'vite';

export default defineConfig({
    base: process.env.CI ? '/ZeldaJS/' : '/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
    },
});
