/**
*
* CardPadded
*
*/

import React from 'react';
import { Paper } from 'material-ui';

import styles from './styles.css';

export default class CardPadded extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Paper className={styles.cardPadded} {...this.props} />
    );
  }
}
