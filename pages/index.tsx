import React from 'react';

import Button from '@material-ui/core/Button';

import Layout from '../components/Layout';

export default class extends React.Component {
  public render() {
    return (
      <Layout>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </Layout>
    );
  }
}
