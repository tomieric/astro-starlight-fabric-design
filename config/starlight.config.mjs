export const locales = {
	root: { label: '默认', lang: 'zh-CN'},
	'zh-cn': { label: '简体中文', lang: 'zh-CN'}
}

export default {
  title: 'Fabric Design',
  logo: {
    src: './public/favicon.svg',
    light: '/favicon.svg',
    dark: '/favicon.svg'
  },
  customCss: [
    './src/css/tailwind.css'
  ],
  social: {
    // codePen: '/zh/design/introduce',
    github: 'https://fabric-design-docs.vercel.app/',
  },
  locales,
  sidebar: [
    {
      label: 'Design',
      transitions: {
        'zh-CN': '设计'
      },
      // autogenerate: { directory: 'design' },
      items: [
        {
          label: '基础',
          items: [
            {
              label: '简介',
              link: '/design/introduce'
            },
            {
              label: '价值观',
              link: '/design/values'
            },
            {
              label: '原则',
              link: '/design/principle'
            },
          ]
        },
        {
          label: '样式指南',
          items: [
            {
              label: '色彩',
              link: '/design/color'
            },
            {
              label: '文字',
              link: '/design/character'
            },
            {
              label: '图标',
              link: '/design/icon'
            },
            {
              label: '文案',
              link: '/design/typography'
            },
            {
              label: '布局',
              link: '/design/layout'
            },
          ]
        },
        {
          label: '数据可视化',
          link: '/design/visual'
        },
      ]
    },
    {
      label: '模板',
      autogenerate: { directory: 'templates' },
    },
    {
      label: '组件',
      autogenerate: { directory: 'components' },
      collapsed: true,
    }
  ],
}