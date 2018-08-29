

module.exports = {
    siteMetadata: {
        title: `Blah Blah Fake Title`,
        content: 'Hola carnal'
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
    ],
};

