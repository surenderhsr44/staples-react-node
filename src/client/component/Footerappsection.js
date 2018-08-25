import React, { Component } from 'react';
import {SocialIcon} from 'react-social-icons'

class Footerappsection extends Component {
  render() {
    return (
    	<div>
    	<div className="link-header">Downloas our Mobile App</div>
		<li className="li"><SocialIcon url="https://itunes.apple.com/app/id376393873" />
		<SocialIcon url="https://play.google.com/store/apps/details?id=app.staples&amp;referrer=utm_campaign%3DEmail%2520Footer%26trackingcode%3Dmahjqulr%26utm_source%3DMktg-OrderConf%26utm_medium%3DEmail%26utm_content%3DFooter" />
		</li>
		</div>
    	   );}
}

export default Footerappsection;