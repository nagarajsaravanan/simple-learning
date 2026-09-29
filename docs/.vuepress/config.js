import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: '/simple-learning/',
  bundler: viteBundler(),
  lang: 'en-US',
  title: 'SIMPLE LEARNING',
  description: 'Practical, concise tech notes and tutorials',

  theme: defaultTheme({
    // Navigation bar
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Core JavaScript',
        link: '/core-js/',
      },
      {
        text: 'React.js',
        link: '/react-js/',
      },
      {
        text: 'Node.js',
        link: '/node-js/',
      },
      {
        text: 'DevOps',
        link: '/devops/ci-cd/',
      },
      {
        text: 'Book Notes',
        link: '/books/',
      },
    ],

    // Sidebar configuration
    sidebarDepth: 2,
    sidebar: {
      '/core-js/': [
        {
          text: 'Core JavaScript',
          collapsible: false,
          children: [
            {
              text: 'Overview',
              link: '/core-js/',
            },
            {
              text: 'JavaScript Name & History',
              link: '/core-js/#javascript-name',
            },
            {
              text: 'TC39 & ECMAScript Standards',
              link: '/core-js/#organizations',
            },
            {
              text: 'Specification vs Environment',
              link: '/core-js/#specification-vs-environment',
            },
            {
              text: 'Multi-Paradigm Language',
              link: '/core-js/#a-multi-paradigm-language',
            },
            {
              text: 'Backward & Forward Compatibility',
              link: '/core-js/#backward-forward-compatibility',
            },
            {
              text: 'Transpiling & Polyfills',
              link: '/core-js/#transpiling-polyfill',
            },
            {
              text: 'JS Engine & JIT Compilation',
              link: '/core-js/#javascript-is-a-compiled-language',
            },
          ],
        },
      ],
      '/devops/': [
        {
          text: 'DevOps & CI/CD',
          collapsible: false,
          children: [
            {
              text: 'Overview',
              link: '/devops/',
            },
            {
              text: 'CI/CD GitHub Actions Guide',
              collapsible: true,
              children: [
                {
                  text: 'Introduction',
                  link: '/devops/ci-cd/',
                },
                {
                  text: '1. Prerequisites',
                  link: '/devops/ci-cd/#_1-prerequisites',
                },
                {
                  text: '2. Project Setup',
                  link: '/devops/ci-cd/#_2-create-a-node-js-project',
                },
                {
                  text: '3. Application Code',
                  link: '/devops/ci-cd/#_3-create-application-code',
                },
                {
                  text: '4. Testing Setup (Jest)',
                  link: '/devops/ci-cd/#_4-create-a-test',
                },
                {
                  text: '5. Test Command Configuration',
                  link: '/devops/ci-cd/#_5-configure-the-test-command',
                },
                {
                  text: '6. Git Repository Setup',
                  link: '/devops/ci-cd/#_6-create-a-git-repository',
                },
                {
                  text: '7. GitHub Remote Repo',
                  link: '/devops/ci-cd/#_7-create-a-github-repository',
                },
                {
                  text: '8. GitHub Actions Workflow',
                  link: '/devops/ci-cd/#_8-create-github-actions-workflow',
                },
                {
                  text: '9. CI Configuration (ci.yml)',
                  link: '/devops/ci-cd/#_9-add-the-ci-configuration',
                },
                {
                  text: '10. Push Workflow',
                  link: '/devops/ci-cd/#_10-push-the-workflow',
                },
                {
                  text: '11. Check GitHub Actions',
                  link: '/devops/ci-cd/#_11-check-github-actions',
                },
                {
                  text: '12. Test CI Failure Validation',
                  link: '/devops/ci-cd/#_12-test-ci-with-a-code-change',
                },
                {
                  text: '13. What About CD?',
                  link: '/devops/ci-cd/#_13-what-about-cd',
                },
                {
                  text: '14. CI/CD Architecture Flow',
                  link: '/devops/ci-cd/#_14-ci-cd-in-simple-words',
                },
                {
                  text: '15. Important Files',
                  link: '/devops/ci-cd/#_15-important-files',
                },
                {
                  text: '16. Key Commands',
                  link: '/devops/ci-cd/#_16-key-commands',
                },
              ],
            },
          ],
        },
      ],
      '/react-js/': [
        {
          text: 'React.js Essentials',
          collapsible: false,
          children: [
            {
              text: 'Overview & Fundamentals',
              link: '/react-js/',
            },
            {
              text: 'Components & JSX (Deep Dive)',
              link: '/react-js/components-and-jsx.html',
            },
            {
              text: 'Props (Complete Guide)',
              link: '/react-js/props.html',
            },
            {
              text: 'JSX & Rendering',
              link: '/react-js/#jsx-rendering',
            },
            {
              text: 'Components & Props',
              link: '/react-js/#components-props',
            },
            {
              text: 'State & Event Handling',
              link: '/react-js/#state-event-handling',
            },
            {
              text: 'Core Hooks',
              link: '/react-js/#core-hooks',
            },
            {
              text: 'Component Lifecycle',
              link: '/react-js/#component-lifecycle',
            },
            {
              text: 'Rules of Hooks',
              link: '/react-js/#rules-of-hooks',
            },
            {
              text: 'Todo App Example',
              link: '/react-js/#quick-example-todo-item-component',
            },
          ],
        },
      ],
      '/node-js/': [
        {
          text: 'Node.js Essentials',
          collapsible: false,
          children: [
            {
              text: 'Overview & Architecture',
              link: '/node-js/',
            },
            {
              text: 'Architecture & Event Loop',
              link: '/node-js/#architecture-event-loop',
            },
            {
              text: 'Core Modules',
              link: '/node-js/#core-modules',
            },
            {
              text: 'Creating an HTTP Server',
              link: '/node-js/#creating-an-http-server',
            },
          ],
        },
      ],
      '/books/': [
        {
          text: 'Book Library',
          collapsible: false,
          children: [
            {
              text: 'Bookshelf Overview',
              link: '/books/',
            },
          ],
        },
        {
          text: 'YDKJS: Get Started (2nd Ed)',
          collapsible: false,
          children: [
            {
              text: 'Book Overview',
              link: '/books/ydkjs-get-started/',
            },
            {
              text: 'Ch 1: What Is JavaScript?',
              link: '/books/ydkjs-get-started/ch1-what-is-js.html',
            },
            {
              text: 'Ch 2: Surveying JS',
              link: '/books/ydkjs-get-started/ch2-surveying-js.html',
            },
            {
              text: 'Ch 3: Roots of JS (Closure, this, Prototypes)',
              link: '/books/ydkjs-get-started/ch3-roots-of-js.html',
            },
            {
              text: 'Ch 4: The 3 Pillars of JS',
              link: '/books/ydkjs-get-started/ch4-bigger-picture.html',
            },
            {
              text: 'Appendix: Practice & Challenges',
              link: '/books/ydkjs-get-started/practice.html',
            },
          ],
        },
        {
          text: 'Get It Done (Fishbach)',
          collapsible: false,
          children: [
            {
              text: 'Book Overview',
              link: '/books/get-it-done/',
            },
            {
              text: "Ch 1: Goals Aren't Chores",
              link: '/books/get-it-done/ch1-goals-arent-chores.html',
            },
            {
              text: 'Ch 2: Put a Number on It',
              link: '/books/get-it-done/ch2-put-a-number-on-it.html',
            },
            {
              text: 'Ch 3: Incentives Matter',
              link: '/books/get-it-done/ch3-incentives-matter.html',
            },
            {
              text: 'Ch 4: Intrinsic Motivation',
              link: '/books/get-it-done/ch4-intrinsic-motivation.html',
            },
            {
              text: 'Ch 5: Glass Half Full & Empty',
              link: '/books/get-it-done/ch5-glass-half-full-half-empty.html',
            },
            {
              text: 'Ch 6: The Middle Problem',
              link: '/books/get-it-done/ch6-the-middle-problem.html',
            },
            {
              text: 'Ch 7: Learning from Failure',
              link: '/books/get-it-done/ch7-learning-from-negative-feedback.html',
            },
            {
              text: 'Ch 8: Goal Juggling',
              link: '/books/get-it-done/ch8-goal-juggling.html',
            },
            {
              text: 'Ch 9: Self-Control',
              link: '/books/get-it-done/ch9-self-control.html',
            },
            {
              text: 'Ch 10: Patience',
              link: '/books/get-it-done/ch10-patience.html',
            },
            {
              text: 'Ch 11: Pursuing Goals with Others',
              link: '/books/get-it-done/ch11-pursuing-goals-with-others.html',
            },
            {
              text: 'Ch 12: Goals in Relationships & Teams',
              link: '/books/get-it-done/ch12-goals-in-relationships.html',
            },
            {
              text: 'The Zoho Master Action Plan',
              link: '/books/get-it-done/summary.html',
            },
          ],
        },
      ],
      '/': [
        {
          text: 'Learning Tracks',
          collapsible: false,
          children: [
            {
              text: 'Core JavaScript',
              link: '/core-js/',
            },
            {
              text: 'React.js',
              link: '/react-js/',
            },
            {
              text: 'Node.js',
              link: '/node-js/',
            },
            {
              text: 'DevOps & CI/CD',
              link: '/devops/ci-cd/',
            },
            {
              text: 'Book Notes',
              link: '/books/',
            },
          ],
        },
      ],
    },
  }),
})