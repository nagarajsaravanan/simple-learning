import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    base: '/simple-learning/',
    // default theme config
    navbar: [
        {
            text: 'Home',
            link: '/',
        },
        {
            text: 'Core Concepts',
            link: '/core-js/',
        },
        {
            text: 'Node JS',
            link: '/node-js/',
        }
    ],
    sidebar: {
        '': [
            {
            text: 'Home',
            link: '/'
            }
        ],
        '/core-js/': [
            {
            text: 'CORE JS',
            link: '/core-js/'
            }
        ],
        '': [
            {
            text: 'NODE JS',
            link: '/node-js/'
            }
        ],
    }
  }),
  lang: 'en-US',
  title: 'SIMPLE LEARNING',
  description: 'Just playing around',
})