import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'tahreem-s-app'  // replace this with your GitHub repo name

export default defineConfig({
  base: `/${repoName}/`,   // important for routing in GitHub Pages
  plugins: [react()]
})
