import React from 'react';

function TopLeagues(props) {
    return (
        <div className="ss-league">
        <div className="section-title sidebar-title">
          <h5>Top Leagues</h5>
        </div>
        <a href="#" className="sl-item">
          <img src="img/flag/flag-1.jpg" alt="" />
          <span>Afghanis</span>
        </a>
        <a href="#" className="sl-item">
          <img src="img/flag/flag-2.jpg" alt="" />
          <span>Australia</span>
        </a>
        <a href="#" className="sl-item">
          <img src="img/flag/flag-3.jpg" alt="" />
          <span>Qatar</span>
        </a>
        <a href="#" className="sl-item">
          <img src="img/flag/flag-4.jpg" alt="" />
          <span>Cambodia</span>
        </a>
        <a href="#" className="sl-item">
          <img src="img/flag/flag-5.jpg" alt="" />
          <span>Uzbekistan</span>
        </a>
      </div>
    );
}

export default TopLeagues;