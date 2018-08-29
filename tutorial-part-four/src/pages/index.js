import React from "react"
import styled from 'styled-components';
import {rhythm} from "../utils/typography";
const H3 = styled.h3`
        margin-bottom:${rhythm(2)};
        display: inline-block;
        font-style: normal;
`;

const Span = styled.span`
        color: #BBB
`;
import Link from "gatsby-link";

export default ({ data }) => (
    <div>
    <h1>Amazing Pandas Eating Things</h1>
        <img
            src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
            alt="Group of pandas eating bamboo"
        />
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
                <Link
                    to={node.fields.slug}
                >
                <H3 marginBottom={rhythm(1 / 4)}>
                    {node.frontmatter.title}{" "}
                    <Span color="#BBB">— {node.frontmatter.date}</Span>
                </H3>
                <p>{node.excerpt}</p>
                </Link>
            </div>
        ))}
    </div>
);

export const query2 = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
             date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;