/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import CardPadded from '../CardPadded';

export function NotFound() {
  return (
    <CardPadded>
      <p>Page not found</p>
    </CardPadded>
  );
}

export default NotFound;
