import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';

import { Container } from '../styledComponents/layout';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query titleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}>
          <html lang="en" />
        </Helmet>
        <Header
          background="background-image: linear-gradient(116deg, #08AEEA 0%, #2AF598 100%)"
          title={data.site.siteMetadata.title}
        />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0
          }}>
          <Container>{children}</Container>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
