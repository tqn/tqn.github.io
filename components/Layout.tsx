import React from 'react';

import Head from 'next/head';

export default props => (
  <div>
    <Head>
      <title>Tej Qu Nair</title>
    </Head>
    {/* <header>Header</header> */}
    <section>{props.children}</section>
  </div>
);
