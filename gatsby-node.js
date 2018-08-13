const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);
const queryAll = require(`./src/queries/queryAll.js`)


exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;

    return new Promise((resolve, reject) => {
        // Templates
        const pageTemplate = path.resolve("./src/templates/page.js");
        const postTemplate = path.resolve("./src/templates/post.js");
        const workTemplate = path.resolve("./src/templates/work.js");

        resolve(
            graphql(queryAll).then(result => {
                if (result.errors) reject(result.errors)

                // Pages detail
                const pages = result.data.allWordpressPage.edges

                pages.forEach(edge => {
                    createPage({
                        path: `/${edge.node.slug}/`,
                        component: slash(pageTemplate),
                        context: {
                            id: edge.node.id,
                        },
                    })
                })

                // Posts detail
                const posts = result.data.allWordpressPost.edges

                posts.forEach(edge => {
                    createPage({
                        path: `/posts/${edge.node.slug}/`,
                        component: slash(postTemplate),
                        context: {
                            id: edge.node.id,
                        },
                    });
                })

                // Work detail
                const workItems = result.data.allWordpressWpWork.edges

                workItems.forEach(edge => {
                    createPage({
                        path: `/work/${edge.node.slug}/`,
                        component: slash(workTemplate),
                        context: {
                            id: edge.node.id,
                        },
                    });
                })

            })
        )
    });
};
