// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KeeperC',
  tagline: 'Keep your ERC20s safe through Chainlink Automation (Keepers)',
  url: 'https://keeperc20.web.app',
  baseUrl: '/KeepERC20-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KeepERC20', // Usually your GitHub org/user name.
  projectName: 'KeepERC20-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
        },
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
      navbar: {
        title: 'KeeperC',
        items: [
          {
            type: 'doc',
            docId: 'KeepERC20',
            position: 'left',
            label: 'Document',
          },
          {
            href: '/category/for-developers',
            position: 'left',
            label: 'For Developers',
          },
          {
            href: 'https://github.com/KeepERC20',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Document',
                to: '/',
              },
              {
                label: 'For Developers',
                to: '/category/for-developers',
              },
            ],
          },
          {
            title: 'External Links',
            items: [
              {
                label: 'Website',
                href: 'https://keeperc20.web.app',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/KeepERC20',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'lukepark327@gmail.com',
                href: 'mailto:lukepark327@gmail.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} KeeperC.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
