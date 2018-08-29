import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>My WordPress Blog</h1>
      <h4>Posts</h4>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div  key={node.id}>
          <Link to={node.slug}>
          <p>{node.title}</p>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export const pageQuery = graphql`
  query MyFiles {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`;
