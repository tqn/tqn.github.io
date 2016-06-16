/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import C from '../CardPadded';
import {
  H4,
} from '../Headers';

export function HomePage() {
  return (
    <div>
      <C>
        <p>This is the home page!</p>
      </C>
      <C>
        <H4>Second panel header</H4>
      </C>
    </div>
  );
}

export default HomePage;
