/**
*
* Headers
*
*/

import React from 'react';

import {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
} from './styles.scss';

function H1(props) {
  return (
    <span className={h1} {...props} />
  );
}

function H2(props) {
  return (
    <span className={h2} {...props} />
  );
}

function H3(props) {
  return (
    <span className={h3} {...props} />
  );
}

function H4(props) {
  return (
    <span className={h4} {...props} />
  );
}

function H5(props) {
  return (
    <span className={h5} {...props} />
  );
}

function H6(props) {
  return (
    <span className={h6} {...props} />
  );
}

export { H1, H2, H3, H4, H5, H6 };
