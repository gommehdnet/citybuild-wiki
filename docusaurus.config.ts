import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "GommeHD.net CityBuild Wiki",
  tagline: "Und wir fangen gerade erst an!",
  favicon: "img/favicon.png",

  // todo: change this to final url
  url: "https://gommehdnet.github.io/citybuild-wiki/",
  baseUrl: "/citybuild-wiki/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "gommehdnet", // Usually your GitHub org/user name.
  projectName: "citybuild-wiki", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "GommeHD.net CityBuild Wiki",
      logo: {
        alt: "GommeHD.net Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        {
          to: "/",
          label: "Hier könnte Ihre Werbung stehen",
          position: "left",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Wiki",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "YouTube",
              href: "https://youtube.com/GommeHDnet",
            },
            {
              label: "Discord",
              href: "https://discord.gg/gommehdnet",
            },
            {
              label: "X",
              href: "https://x.com/gommehdnet",
            },
            {
              label: "TikTok",
              href: "https://tiktok.com/@gommehdnet",
            },
          ],
        },
        {
          title: "Mehr",
          items: [
            {
              label: "Extra Link",
              to: "/",
            },
            {
              label: "Hauptseite",
              href: "https://gommehd.net",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GommeHD.net. Gemacht mit Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
