import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'
import projectData from './src/db/projects.json'

const projectRoutes = projectData.map(project => `/#/projects/${project.id}`)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({ 
      hostname: 'https://fauxcrow.github.io',
      dynamicRoutes: [
        '/',
        '/#/projects',
        ...projectRoutes 
      ],
      modifySitemapURL: (url) => {
        if (!url.includes('/#/')) {
          return url.replace('https://fauxcrow.github.io/', 'https://fauxcrow.github.io/#/')
        }
        return url
      }
    }),
  ],
  base: '/',
})
