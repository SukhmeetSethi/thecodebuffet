// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'We all learn from Experience',
  tagline: 'theCodeBuffet is an attempt to share technology learnings and help tech community to find solution atleast for few problems. That is our bit to give back something we got from industry.',
  url: 'https://thecodebuffet.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/tcb.png',
  organizationName: 'SukhmeetSethi', // Usually your GitHub org/user name.
  projectName: 'theCodeBuffet', // Usually your repo name.
  
 
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/SukhmeetSethi/thecodebuffet',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/SukhmeetSethi/thecodebuffet',
        // },
        blog: false,

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      gtag: {
        trackingID: 'G-Z64B8KYMFN',
        // Optional fields.
        anonymizeIP: true, // Should IPs be anonymized?
      },
      navbar: {
        title: '',
        logo: {
          alt: 'theCodeBuffet',
          src: 'img/logo-long-bold.png',
        },
        items: [
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
              // {
              //   label: 'Git',
              //   href: 'https://github.com/SukhmeetSethi/',
              // },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCJSM5lTp_WKfyhMQeEGBT4w',
              },
              {
                label: 'Stackoverflow',
                href: 'https://stackoverflow.com/users/7364381/sukhmeet-sethi',
              },
            ],
          }
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} theCodeBuffet`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      
    }),
};

module.exports = config  

