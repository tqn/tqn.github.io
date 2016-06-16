/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { contentColProps } from '../../responsive';
import CardPadded from '../CardPadded';
import {
  H4,
} from '../Headers';

export default class HomePage extends React.Component {

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
            <p>This is the home page!</p>
          </CardPadded>
          <CardPadded {...this.props.sectionStyles}>
            <H4>Second panel header</H4>
          </CardPadded>
        </Col>
      </Row>
    );
  }
}
