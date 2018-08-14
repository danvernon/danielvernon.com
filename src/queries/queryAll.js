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
                      localFile {
                        childImageSharp {
                          resolutions(width:1000) {
                            src
                            width
                          }
                        }
                      }
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
                    acf {
                        hover_background_color
                        project_description
                        project_tagline
                        project_featured_image {
                            id
                            source_url
                        }
                        project_involvement
                        project_completion_date
                        project_link
                        project_link_title
                        section_one_gallery {
                          id
                          localFile {
                            childImageSharp {
                              resolutions(width:1400) {
                                src
                                width
                              }
                            }
                          }
                        }
                    }
                }
            }
        }
    }
`
