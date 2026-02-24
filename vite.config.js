import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// IMPORTANT: Set base to your repo name when deploying to GitHub Pages, e.g., '/shashiprakash610.github.io/'
const repoBase = process.env.GH_PAGES_BASE || '/portfolio/' // e.g. '/portfolio/'


export default defineConfig({
    plugins: [react()],
    base: repoBase,
    // Ensures environment variables starting with VITE_ are exposed to the client
    envPrefix: 'VITE_',
})