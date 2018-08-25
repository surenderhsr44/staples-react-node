import React, { Component } from 'react';
import {SocialIcon} from 'react-social-icons'


class Footersocialsection extends Component {
  render() {
    return (
    	<div>
    	<div className ="link-header"> Join us On</div>
		<li className="li">
		<SocialIcon url="http://www.facebook/staples" />
		<SocialIcon url="http://twitter.com/staples" />
		<SocialIcon url="http://pinterest.com/staples" />
		<SocialIcon url="https://www.linkedin.com/company/staples" /></li>

</div>
    	
    	    );}
}

export default Footersocialsection;