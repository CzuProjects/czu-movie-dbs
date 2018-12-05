import React, { Component } from 'react';
import './App.css';
 import { BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import MovieDbs from './containers/MovieDbs/MovieDbs';
import axios from 'axios';



axios.interceptors.request.use(request => {
    console.log(request);
    return Promise.reject(request);
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    return Promise.reject(response);
}, error => {
    console.log(error);
    return Promise.reject(error);
});

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
