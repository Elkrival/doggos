import React from 'react'


/*
 The checkbox hack because we have a floating menu icon that goes on every page and moves throughout the application will be placed at the top of all of the elements.
*/
const Navigation = () =>{
 return(
  <div className="navigation">
   <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
   <label htmlFor="navi-toggle" className="navigation__button">

    <span className="navigation__icon">&nbsp;</span>
   </label>
   <div className="navigation__background">&nbsp;</div>
   <nav className="navigation__nav">
    <ul className="navigation__list">
     <li className="navigation__item"><a href="#aasdf" className="navigation__link"><span>01</span>About Nature</a></li>
     <li className="navigation__item"><a href="#aasdf" className="navigation__link"><span>02</span>Your Benefits</a></li>
     <li className="navigation__item"><a href="#aasdf" className="navigation__link"><span>03</span>Popular Tours</a></li>
     <li className="navigation__item"><a href="#aasdf" className="navigation__link"><span>04</span>Stories</a></li>
     <li className="navigation__item"><a href="#aasdf" className="navigation__link"><span>05</span>Book Now</a></li>
    </ul>
   </nav>
  </div>
 )
}
export default Navigation