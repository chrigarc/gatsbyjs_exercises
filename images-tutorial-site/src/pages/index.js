import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image";

const IndexPage = ({ data }) => {
  const imagesResolutions = data.allWordpressPost.edges.map(
    edge =>
      edge.node.childWordPressAcfPostPhoto.photo.localFile.childImageSharp
        .resolutions
  );
  return (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      {imagesResolutions.map(imageRes => (
        <Img resolutions={imageRes} key={imageRes.src} />
      ))}
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query ImageQuery {
    allWordpressPost {
      edges {
        node {
          childWordPressAcfPostPhoto {
            photo {
              localFile {
                childImageSharp {
                  # edit the maxWidth value to generate resized images
                  resolutions(width: 500, height: 500) {
                    ...GatsbyImageSharpResolutions_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;