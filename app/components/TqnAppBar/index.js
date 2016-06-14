/**
*
* TqnAppBar
*
*/

import React from 'react';
import { AppBar } from 'material-ui';
import { Row, Col } from 'react-flexbox-grid';

function TqnAppBar(props) {
  return (
    <AppBar
      showMenuIconButton={false}
      title={
        <Row>
          <Col {...props.colProps}>
            Tej Qu Nair
          </Col>
        </Row>
      }
    />
  );
}

TqnAppBar.propTypes = {
  colProps: React.PropTypes.object,
};

export default TqnAppBar;
