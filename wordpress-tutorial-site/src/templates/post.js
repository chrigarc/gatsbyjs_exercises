

import React from "react";

export default ({ data }) => {
   const post = data.wordpressPost;
   return (
    <div>
      <h1>Post {post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($id: String!) {
     wordpressPost(id: { eq: $id } ){
        id
        slug
        title
        excerpt
        content
        author {
          id
          name
        }
        date(formatString: "MMMM DD, YYYY")
      } 
   }
`;
