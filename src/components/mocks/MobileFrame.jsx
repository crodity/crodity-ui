import React from 'react';
import Frame from 'react-frame-component';
import Mobile from './Mobile';

const styles = {
  root: {
    border: 'none',
    maxWidth: 360,
    width: '100%',
    height: 660,
    overflow: 'hiden',
  },
};

const styleHead = `
  body {
    margin: 0;
  }
`;

const head = (
  <style dangerouslySetInnerHTML={{ __html: styleHead }} />
);

const MobileFrame = props => (
  <Frame style={styles.root} head={head}>
    <Mobile {...props} />
  </Frame>
);

export default MobileFrame;
