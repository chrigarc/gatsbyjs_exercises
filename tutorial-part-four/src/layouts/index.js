import React from "react";

import Link from "gatsby-link";

import styled from 'styled-components';

import { rhythm } from "../utils/typography";

const MainContainer = styled.div`
    margin: 0 auto;
    max-width: 700px;
    padding: ${rhythm(2)};
    padding-top: ${rhythm(1.5)};
`;

const StyledLink = styled(Link)`
    float: right;
    margin: 10px;
`
const H3 = styled.h3`
        margin-bottom:${rhythm(2)};
        display: inline-block;
        font-style: normal;
`;

export default ({ children, data }) => (
    <MainContainer>
        <Link to={`/`}>
            <H3 >
                Pandas Eating Lots <br/>
                {data.site.siteMetadata.title} <br/>
                {data.site.siteMetadata.content}
            </H3>
        </Link>
        <StyledLink to={`/about/`}>
            About
        </StyledLink>
        <StyledLink to={`/my-files/`}>
            My Files
        </StyledLink>
        {children()}

        <footer>
            Que chingon se ve todo esto!!
        </footer>
    </MainContainer>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        content
        title
      }
    }
  }
`