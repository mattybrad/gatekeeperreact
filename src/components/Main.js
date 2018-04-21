require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Test from './Test';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Test/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
