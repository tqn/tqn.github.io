/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import CardPadded from '../CardPadded';

export function HomePage() {
  return (
    <CardPadded>
      <p>This is the home page!</p>
    </CardPadded>
  );
}

export default HomePage;
