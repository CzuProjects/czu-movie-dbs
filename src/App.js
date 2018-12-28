import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import MovieDbs from './containers/MovieDbs/MovieDbs';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Layout>
                    <MovieDbs />
                </Layout>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
