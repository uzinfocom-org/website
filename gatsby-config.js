const fetch = require("node-fetch");
const { createHttpLink } = require("apollo-link-http");

module.exports = {
    siteMetadata: {
        name: "Uzinfocom Open Source",
        title: `O'zbekistondagi Birinchi Open Source Rivojlantiruvchi Jamiyat`,
        description: `O'zbekistondagi Birinchi Open Source Rivojlantiruvchi Jamiyat.`,
        author: `@uzinfocom-org`,
        siteUrl: `https://oss.uzinfocom.uz`,
        social: {
            twitter: "uzinfocom",
            github: "uzinfocom-org",
            telegram: "xinuxuz",
            discord: "my3G2FVW5Z",
            email: "cctld@uzinfocom.uz",
        },
    },
    plugins: [
        {
            resolve: "gatsby-plugin-no-theme-flash",
            options: {
                storageKey: "theme-type",
                lightClassName: "light",
                darkClassName: "dark",
            },
        },
        "gatsby-plugin-top-layout",
        {
            resolve: `gatsby-plugin-material-ui`,
            // options: {
            //     stylesProvider: {
            //         injectFirst: true,
            //     },
            // },
        },
        // `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                // Setting a color is optional.
                color: `red`,
                // Disable the loading spinner.
                showSpinner: false,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/posts`,
            },
        },
        // `gatsby-transformer-sharp`,
        // `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Uzinfocom Open Source`,
                short_name: `Uzinfocom`,
                description: "Uzinfocom Open Source",
                lang: "en",
                start_url: `/`,
                background_color: `#000`,
                theme_color: `#000`,
                display: "standalone",
                icon: `src/images/logo-dark.png`, // This path is relative to the root of the site.
                legacy: false,
                // include_favicon: false,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    // gatsby-remark-relative-images must
                    // go before gatsby-remark-images
                    // {
                    //     resolve: `gatsby-remark-relative-images`,
                    // },
                    // {
                    //     resolve: `gatsby-remark-images`,
                    //     options: {
                    //         // It's important to specify the maxWidth (in pixels) of
                    //         // the content container as this plugin uses this as the
                    //         // base for generating different widths of each image.
                    //         maxWidth: 590,
                    //         linkImagesToOriginal: false,
                    //     },
                    // },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            // Class prefix for <pre> tags containing syntax highlighting;
                            // defaults to 'language-' (eg <pre class="language-js">).
                            // If your site loads Prism into the browser at runtime,
                            // (eg for use with libraries like react-live),
                            // you may use this to prevent Prism from re-processing syntax.
                            // This is an uncommon use-case though;
                            // If you're unsure, it's best to use the default value.
                            classPrefix: "language-",
                            // This is used to allow setting a language for inline code
                            // (i.e. single backticks) by creating a separator.
                            // This separator is a string and will do no white-space
                            // stripping.
                            // A suggested value for English speakers is the non-ascii
                            // character '???'.
                            inlineCodeMarker: null,
                            // This lets you set up language aliases.  For example,
                            // setting this to '{ sh: "bash" }' will let you use
                            // the language "sh" which will highlight using the
                            // bash highlighter.
                            aliases: {},
                            // This toggles the display of line numbers globally alongside the code.
                            // To use it, add the following line in src/layouts/index.js
                            // right after importing the prism color scheme:
                            //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
                            // Defaults to false.
                            // If you wish to only show line numbers on certain code blocks,
                            // leave false and use the {numberLines: true} syntax below
                            showLineNumbers: false,
                            // If setting this to true, the parser won't handle and highlight inline
                            // code used in markdown i.e. single backtick code like `this`.
                            noInlineHighlight: false,
                            // This adds a new language definition to Prism or extend an already
                            // existing language definition. More details on this option can be
                            // found under the header "Add new language definition or extend an
                            // existing language" below.
                            languageExtensions: [
                                {
                                    language: "superscript",
                                    extend: "javascript",
                                    definition: {
                                        superscript_types: /(SuperType)/,
                                    },
                                    insertBefore: {
                                        function: {
                                            superscript_keywords: /(superif|superelse)/,
                                        },
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        `gatsby-plugin-catch-links`,
        {
            resolve: "gatsby-source-graphql",
            options: {
                typeName: "Github",
                fieldName: "github",
                createLink: () =>
                    createHttpLink({
                        uri: `https://api.github.com/graphql`,
                        headers: {
                            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                        },
                        fetch,
                    }),
            },
        },
        // {
        //     resolve: "gatsby-plugin-react-svg",
        //     options: {
        //         rule: {
        //             include: /images/, // See below to configure properly
        //         },
        //     },
        // },
        {
            resolve: "gatsby-plugin-no-sourcemaps",
        },
        {
            resolve: "gatsby-plugin-sitemap",
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
    ],
};
