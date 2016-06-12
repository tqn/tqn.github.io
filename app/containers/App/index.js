/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { AppBar, Paper } from 'material-ui';
import { Row, Col } from 'react-flexbox-grid';
import styles from './styles.css';

function App(props) {
  return (
    <div>
      <AppBar title="Tej Qu Nair" />
      <Row>
        <Col xs={12} lgOffset={2} lg={8}>
          <Paper className={styles.mainContainer}>
            {props.children}
          </Paper>
        </Col>
      </Row>
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
