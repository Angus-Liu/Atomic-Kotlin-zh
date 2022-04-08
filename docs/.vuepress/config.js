module.exports = {
  base: "/Atomic-Kotlin-zh/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  title: 'Atomic Kotlin',
  description: '《Atomic Kotlin》中文版',
  // 多语言设置
  locales: {
    '/': {
      lang: 'zh-CN'
    },
    '/en/': {
      lang: 'en-US'
    }
  },
  // 主题配置
  themeConfig: {
    logo: '/favicon.png',
    // 仓库相关
    repo: 'Angus-Liu/Atomic-Kotlin-zh',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        nav: [
          { text: '目录', link: '/toc' },
          { text: '官网', link: 'https://www.atomickotlin.com' },
        ],
        editLinkText: '翻译有错？帮助改进:)',
        // 侧边栏配置
        sidebar: {
          '/': [
            'copyright',
            {
              title: '第一章 编程基础',
              path: 'se01',
              collapsable: false,
              children: [
                'se01-ch01',
                'se01-ch02',
                'se01-ch03',
                'se01-ch04',
                'se01-ch05',
                'se01-ch06',
                'se01-ch07',
                'se01-ch08',
                'se01-ch09',
                'se01-ch10',
                'se01-ch11',
                'se01-ch12',
                'se01-ch13',
                'se01-ch14',
                'se01-ch15',
              ]
            },
            {
              title: 'Section II',
              path: 'se02',
              collapsable: false,
              children: [
                'se02-ch01',
                'se02-ch02',
                'se02-ch03',
                'se02-ch04',
                'se02-ch05',
                'se02-ch06',
                'se02-ch07',
                'se02-ch08',
                'se02-ch09',
                'se02-ch10',
                'se02-ch11',
                'se02-ch12',
                'se02-ch13',
                'se02-ch14',
              ]
            },
            {
              title: 'Section III',
              path: 'se03',
              collapsable: false,
              children: [
                'se03-ch01',
                'se03-ch02',
                'se03-ch03',
                'se03-ch04',
                'se03-ch05',
                'se03-ch06',
                'se03-ch07',
                'se03-ch08',
                'se03-ch09',
                'se03-ch10',
                'se03-ch11',
                'se03-ch12',
                'se03-ch13',
                'se03-ch14',
              ]
            },
            {
              title: 'Section IV',
              path: 'se04',
              collapsable: false,
              children: [
                'se04-ch01',
                'se04-ch02',
                'se04-ch03',
                'se04-ch04',
                'se04-ch05',
                'se04-ch06',
                'se04-ch07',
                'se04-ch08',
                'se04-ch09',
                'se04-ch10',
                'se04-ch11',
              ]
            },
            {
              title: 'Section V',
              path: 'se05',
              collapsable: false,
              children: [
                'se05-ch01',
                'se05-ch02',
                'se05-ch03',
                'se05-ch04',
                'se05-ch05',
                'se05-ch06',
                'se05-ch07',
                'se05-ch08',
                'se05-ch09',
                'se05-ch10',
                'se05-ch11',
                'se05-ch12',
                'se05-ch13',
                'se05-ch14',
                'se05-ch15',
                'se05-ch16',
                'se05-ch17',
                'se05-ch18',
              ]
            },
            {
              title: 'Section VI',
              path: 'se06',
              collapsable: false,
              children: [
                'se06-ch01',
                'se06-ch02',
                'se06-ch03',
                'se06-ch04',
                'se06-ch05',
                'se06-ch06',
              ]
            },
            {
              title: 'Section VII',
              path: 'se07',
              collapsable: false,
              children: [
                'se07-ch01',
                'se07-ch02',
                'se07-ch03',
                'se07-ch04',
                'se07-ch05',
                'se07-ch06',
                'se07-ch07',
                'se07-ch08',
                'se07-ch09',
              ]
            },
            {
              title: 'Appendices',
              path: 'appendices',
              collapsable: false,
              children: [
                'appendix-a',
                'appendix-b',
              ]
            },
          ]
        }
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        nav: [
          { text: 'TOC', link: '/en/toc' },
          { text: 'Official', link: 'https://www.atomickotlin.com' },
        ],
        editLinkText: 'Edit this page on GitHub :)',
        sidebar: {
          '/en/': [
            'copyright',
            {
              title: 'Section I',
              path: 'se01',
              collapsable: false,
              children: [
                'se01-ch01',
                'se01-ch02',
                'se01-ch03',
                'se01-ch04',
                'se01-ch05',
                'se01-ch06',
                'se01-ch07',
                'se01-ch08',
                'se01-ch09',
                'se01-ch10',
                'se01-ch11',
                'se01-ch12',
                'se01-ch13',
                'se01-ch14',
                'se01-ch15',
              ]
            },
            {
              title: 'Section II',
              path: 'se02',
              collapsable: false,
              children: [
                'se02-ch01',
                'se02-ch02',
                'se02-ch03',
                'se02-ch04',
                'se02-ch05',
                'se02-ch06',
                'se02-ch07',
                'se02-ch08',
                'se02-ch09',
                'se02-ch10',
                'se02-ch11',
                'se02-ch12',
                'se02-ch13',
                'se02-ch14',
              ]
            },
            {
              title: 'Section III',
              path: 'se03',
              collapsable: false,
              children: [
                'se03-ch01',
                'se03-ch02',
                'se03-ch03',
                'se03-ch04',
                'se03-ch05',
                'se03-ch06',
                'se03-ch07',
                'se03-ch08',
                'se03-ch09',
                'se03-ch10',
                'se03-ch11',
                'se03-ch12',
                'se03-ch13',
                'se03-ch14',
              ]
            },
            {
              title: 'Section IV',
              path: 'se04',
              collapsable: false,
              children: [
                'se04-ch01',
                'se04-ch02',
                'se04-ch03',
                'se04-ch04',
                'se04-ch05',
                'se04-ch06',
                'se04-ch07',
                'se04-ch08',
                'se04-ch09',
                'se04-ch10',
                'se04-ch11',
              ]
            },
            {
              title: 'Section V',
              path: 'se05',
              collapsable: false,
              children: [
                'se05-ch01',
                'se05-ch02',
                'se05-ch03',
                'se05-ch04',
                'se05-ch05',
                'se05-ch06',
                'se05-ch07',
                'se05-ch08',
                'se05-ch09',
                'se05-ch10',
                'se05-ch11',
                'se05-ch12',
                'se05-ch13',
                'se05-ch14',
                'se05-ch15',
                'se05-ch16',
                'se05-ch17',
                'se05-ch18',
              ]
            },
            {
              title: 'Section VI',
              path: 'se06',
              collapsable: false,
              children: [
                'se06-ch01',
                'se06-ch02',
                'se06-ch03',
                'se06-ch04',
                'se06-ch05',
                'se06-ch06',
              ]
            },
            {
              title: 'Section VII',
              path: 'se07',
              collapsable: false,
              children: [
                'se07-ch01',
                'se07-ch02',
                'se07-ch03',
                'se07-ch04',
                'se07-ch05',
                'se07-ch06',
                'se07-ch07',
                'se07-ch08',
                'se07-ch09',
              ]
            },
            {
              title: 'Appendices',
              path: 'appendices',
              collapsable: false,
              children: [
                'appendix-a',
                'appendix-b',
              ]
            },
          ]
        }
      }
    },
  },
  // markdown 配置
  markdown: {
    // lineNumbers: true
  },
}
