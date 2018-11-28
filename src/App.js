import React, { Component } from 'react';
import './App.css';

import Layout from './components/Layout/Layout';
import MovieDbs from './containers/MovieDbs/MovieDbs';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <MovieDbs />
        </Layout>
      </div>
    );
  }
}

export default App;
