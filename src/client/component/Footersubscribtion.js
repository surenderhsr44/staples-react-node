import React, { Component } from 'react';



class Footersubscribtion extends Component {
  render() {
    return (<div>
<div className="footer-link-heading">Staples Offers</div>
<div className="mmx-row"><div className="mmx-column col-span-7 offer_subscribe email-col">
<form novalidate="" className="ng-pristine ng-valid"><input type="text" className="email-textbox" id="offer_subscribe_email" placeholder="Enter email address" autocomplete="off" />
<div id="offers-error-msg" className="offers-error"><div className="footer-alert-icon mmx-icon-alert"></div>
<span>Please enter a valid email address.</span></div><div id="offers-api-error-msg" className="offers-api-error">
<div className="footer-alert-icon mmx-icon-alert"></div>
<span>Sorry, something went wrong. Please re-enter your email address.</span></div>
</form></div><div className="mmx-column col-span-5 offer_subscribe"><div><button className="mmx-button" onclick="OffersModule.handleSignupClick()" title="Subscribe">
  Subscribe
</button></div></div></div>
</div>
    	
    	    );}
}

export default Footersubscribtion;