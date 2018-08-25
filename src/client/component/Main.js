import React, { Component } from 'react';
import Hero from './Hero'
import Middel from './Middel'
import Middelsecond from './Middelsecond'
import ProductList from './ProductList'
import Hero2 from './Hero2'

class Main extends Component {
  render() {
    return (
      <div>
         <Hero />
	       <Middel />
	       <Middelsecond />
         <ProductList />
	       <Hero2 />
      </div>
    );
  }
}

export default Main;