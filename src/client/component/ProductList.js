import React, { Component } from 'react';
import Product from '../data/Product.json';
import MiddelNext from './MiddelNext';

class ProductList extends Component {
  render() {
    return (
    	<div className="stp--product-carousel">

    	<MiddelNext />
    	<div>
		{ Product.map((Product1, index) => {
			return <div className="list">
			{<img className ="category-img" alt="Load " src={Product1.imgURL }/> }
			<ul className="li">
			<li>
			{Product1.Title}</li>
			<li>{Product1.Services}</li>
				</ul>
	
			</div>})}
	    </div>
	    </div>
	     
	    );}
}

export default ProductList;
