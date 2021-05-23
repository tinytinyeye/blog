const prism = require('remark-prism');

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    commonmark: true,
    gfm: true,
    options: {
        remarkPlugins: [prism],
    }
})

module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
})
