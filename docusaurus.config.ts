import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'We all learn from Experience',
  tagline: 'theCodeBuffet is an attempt to share technology learnings and help tech community to find solution atleast for few problems. That is our bit to give back something we got from industry.',
  url: 'https://thecodebuffet.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/tcb.png',
  organizationName: 'SukhmeetSethi', // Usually your GitHub org/user name.
  projectName: 'theCodeBuffet', // Usually your repo name.

  
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/SukhmeetSethi/thecodebuffet',
        },
        blog: false,
        theme: {
          customCss:  require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    // gtag: {
    //   trackingID: 'G-Z64B8KYMFN',
    //   // Optional fields.
    //   anonymizeIP: true, // Should IPs be anonymized?
    // },
    navbar: {
      title: '',
        logo: {
          alt: 'theCodeBuffet',
          src: 'img/logo-long-bold.png',
        },
      items: [
        {
          position: 'left',
          label: 'Cloud',
          items: [
            {     
              to: 'docs/cloud/aws/s3-basics',     
              label: 'aws'
            }
          ]


        },
        {
          // type: 'doc',
          // docId: 'tips-tricks/tips-tricks',
          position: 'left',
          label: 'Tips & Tricks',
          items: [
            {     
              to: 'docs/tips-tricks/git/git-alias',     
              label: 'Git'
            }
          ]
        },
        {
          type: 'doc',
          docId: 'about-me/about-me',
          position: 'right',
          label: 'About me',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UCJSM5lTp_WKfyhMQeEGBT4w',
            },
            {
              label: 'Stackoverflow',
              href: 'https://stackoverflow.com/users/7364381/sukhmeet-sethi',
            },
          ],
        },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} theCodeBuffet`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
