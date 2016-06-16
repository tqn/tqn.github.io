/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { colors, MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import { contentColProps } from '../../responsive';
import TqnAppBar from '../../components/TqnAppBar';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: colors.indigo500,
    primary2Color: colors.indigo700,
    accent1Color: colors.orangeA200,
    pickerHeaderColor: colors.indigo500,
  },
});

export default class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  };

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <TqnAppBar colProps={contentColProps} />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}
