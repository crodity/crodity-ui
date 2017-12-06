import React from 'react';
import PropTypes from 'prop-types';
import bottomImage from '../static/mobile-footer.png';
import topImage from '../static/mobile-header.png';

const styles = {
  root: {
    // marginBottom: 24,
    // marginRight: 24,
    maxWidth: 360,
    width: '100%',
    overflow: 'hidden',
  },
  container: {
    border: 'solid 1px #d9d9d9',
    borderBottom: 'none',
    height: 580,
    overflow: 'hidden',
  },
  bottomTear: {
    display: 'block',
    position: 'relative',
    // marginTop: -10,
    maxWidth: 360,
  },
  topTear: {
    display: 'block',
    maxWidth: 360,
  },
};


const Mobile = ({ children }) => (
  <div style={styles.root}>
    <img
      src={topImage}
      style={styles.topTear}
      role="presentation"
    />
    <div style={styles.container}>
      {children}
    </div>
    <img
      src={bottomImage}
      style={styles.bottomTear}
      role="presentation"
    />
  </div>
);

Mobile.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Mobile;
