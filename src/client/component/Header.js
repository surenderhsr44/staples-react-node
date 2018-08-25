import React, { Component } from 'react';
import Navigation from './Navigation';
import Topbar from './Topbar';
import Headermiddel from './Headermiddel';

class Header extends Component {
  render() {
    return (
    	<div>
	      <Topbar />
	      <Headermiddel />
	      <Navigation />	       
       </div>
    );}
}

export default Header;
