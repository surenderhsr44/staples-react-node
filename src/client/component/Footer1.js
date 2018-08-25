import React, { Component } from 'react';
import footer from '../data/footer.json';


class Footer1 extends Component {
  render() {
    return (
    	
    	<div className="footer-1">
		{ footer.map((footer, index) => {
			return <div className="footer-list">
			<div className="link-header"><a href="ssss">{footer.footer} </a></div>
				<ul>
				<div className="li">
			<li >{footer.footersub1}</li>
			<li>{footer.footersub2}</li>
			<li>{footer.footersub3}</li>
			<li>{footer.footersub4}</li>
			<li>{footer.footersub5}</li>
			<li>{footer.footersub6}</li>
			<li>{footer.footersub7}</li>
			<li>{footer.footersub8}</li>
			<li>{footer.footersub9}</li>
								</div>
			</ul>
						</div>	
	
			})}
	   
	    </div>
	     
	    );}
}

export default Footer1;