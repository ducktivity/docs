import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'introduction',
    {
      type: 'category',
      label: 'Architecture',
      items: ['architecture/overview', 'architecture/local-first-application'],
    },
    {
      type: 'category',
      label: 'Local development',
      items: ['development/getting-started', 'development/schema-and-codegen'],
    },
    {
      type: 'category',
      label: 'Deployment',
      items: ['deployment/overview', 'deployment/pipeline'],
    },
  ],
}

export default sidebars
