import React from 'react';

import Layout from './components/Layout';

import About from 'pages/About';
import Collection from 'pages/Collection'; 
import Artist from 'pages/Artist'; 
import Testimonials from 'pages/Testimonials'; 
import Diamonds from 'pages/Diamonds'; 
import UncutDiamonds from 'pages/UncutDiamonds'; 
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
          <Route  path="/artist" exact component={Artist} />
          <Route  path="/diamonds" exact component={Diamonds} />
          <Route  path="/uncut-diamonds" exact component={UncutDiamonds} />
          <Route  path="/testimonials" exact component={Testimonials} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
