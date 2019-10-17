import React from 'react';

import Layout from './components/Layout';

import About from 'pages/About';
import Collection from 'pages/Collection'; 
import Contact from 'pages/Contact'

import {
  BrowserRouter, 
  Route, 
  Switch 
} from 'react-router-dom'; 


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route  path="/about" exact component={About} />
          <Route  path="/collection" exact component={Collection} />
          <Route  path="/contact" exact component={Contact} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
