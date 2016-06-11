/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { AppBar, Paper } from 'material-ui';

const styles = {
  mainContainer: {
    margin: `${30}px auto`,
    padding: `${30}px`,
    maxWidth: `${(10 / 12) * 100}vw`,
  },
};


function App(props) {
  return (
    <div>
      <AppBar title="Tej Qu Nair" />
      <Paper style={styles.mainContainer} children={props.children} />
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
