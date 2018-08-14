'use strict'

module.exports = `
    {
        allWordpressPage {
            edges {
                node {
                    id
                    slug
                    status
                    template
                }
            }
        }

        allWordpressPost {
            edges {
                node {
                    id
                    slug
                    status
                    template
                    format
                    title
                    date
                    excerpt
                    featured_media {
                      source_url
                    }
                }
            }
        }

        allWordpressWpWork {
            edges {
                node {
                    id
                    title
                    slug
                    featured_media {
                        source_url
                    }
                }
            }
        }
    }
`
