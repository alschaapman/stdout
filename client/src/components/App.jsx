import React from 'react';
import ReactDOM from 'react-dom';

import Masthead from './Masthead.jsx';
import Feed from './Feed.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Masthead />
        <Feed />
      </div>
    );
  }
}

export default App;
