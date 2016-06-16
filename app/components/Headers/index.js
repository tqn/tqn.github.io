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
} from './styles.css';

export function H1(props) {
  return (
    <span className={h1} {...props} />
  );
}

export function H2(props) {
  return (
    <span className={h2} {...props} />
  );
}

export function H3(props) {
  return (
    <span className={h3} {...props} />
  );
}

export function H4(props) {
  return (
    <span className={h4} {...props} />
  );
}

export function H5(props) {
  return (
    <span className={h5} {...props} />
  );
}

export function H6(props) {
  return (
    <span className={h6} {...props} />
  );
}
