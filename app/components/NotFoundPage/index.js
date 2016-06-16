/**
* NotFoundPage
*
* This is the page we show when the user visits a url that doesn't have a route
*/

import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { contentColProps } from '../../responsive';
import CardPadded from '../CardPadded';
import {
  H2,
} from '../Headers';

export default class NotFoundPage extends React.Component {

  static propTypes = {
    sectionStyles: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Row>
        <Col {...contentColProps}>
          <CardPadded {...this.props.sectionStyles}>
            <H2>Page not found</H2>
          </CardPadded>
        </Col>
      </Row>
    );
  }
}
