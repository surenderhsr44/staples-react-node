import React, { Component } from 'react';
class MiddelNext extends Component {
  render() {
    return (
   <div className="carousel-details">
      <div className="info">
                <div className="carousel-title">Popular Categories</div>
      </div>
      <ul className="controls">
              <li className="prev"><span className="stp--icon stp--icon-arrow-prev disabled"></span></li>
              <li className="next"><span className="stp--icon stp--icon-arrow-next"></span></li>
            </ul>
    </div>

 );
  }
}

export default MiddelNext;