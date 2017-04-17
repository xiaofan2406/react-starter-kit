import React from 'react';
import PropTypes from 'prop-types';
import withCss from 'react-jss';
import { fontFamily, fontSize } from 'styles';
import 'styles/reset.css';
import 'styles/animation.css';

import Header from './Header';

const css = {
  layout: {
    fontFamily,
    fontSize
  },
  main: {
    padding: '1em'
  }
};

function Layout({ classes, children }) {
  return (
    <div className={classes.layout}>
      <Header />
      <div className={classes.main}>
        {children}
      </div>
    </div>
  );
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default withCss(css)(Layout);
