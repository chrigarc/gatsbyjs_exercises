

import React from "react";

export default ({ data }) => {
  const page = data.wordpressPage;
  return (
    <div>
      <h1>Page {page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </div>
  );
};

export const query = graphql`
  query BlogPageQuery($id: String!) {
     wordpressPage(id: { eq: $id } ){
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
