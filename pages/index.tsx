import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import Layout from '../components/Layout';

@withStyles(theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
  },
  root: {
    flexGrow: 1,
  },
}))
class Index extends React.Component {
  public render() {
    return (
      <Layout>
        <div className={this.props.classes.root}>
          <Grid container>
            <Grid item xs={12}>
              <Paper className={this.props.classes.paper}>hello</Paper>
            </Grid>
          </Grid>
        </div>
      </Layout>
    );
  }
}

export default Index;
