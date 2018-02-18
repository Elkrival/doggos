import React from 'react'
import logo from '../../img/chihuahua.png'

const Footer = () =>{
 return(
  <footer className="footer">
   <div className="footer__logo-box">
    <img src={ logo } alt="Doggo" className="footer__logo"/>
   </div>
   <div className="row">
   <div className="col-1-of-2">
    <div className="footer__navigation">
     <ul className="footer__list">
      <li className="footer__item">
       <a href="#ackkk" className="footer__link">Company</a>
      </li>
      <li className="footer__item">
       <a href="#ackkk" className="footer__link">Contact us</a>
      </li>
      <li className="footer__item">
       <a href="#ackkk" className="footer__link">Careers</a>
      </li>
      <li className="footer__item">
       <a href="#ackkk" className="footer__link">Privacy</a>
      </li>
      <li className="footer__item">
       <a href="#ackkk" className="footer__link">Terms</a>
      </li>
     </ul>
    </div>
   </div>
   <div className="col-1-of-2">
     <p className="footer__copyright">
     Powered by the &#x2600;  <a href="#Boooooom" className="footer__link">Ivan Ayala</a>
     <br/>
       Built using React and Sass</p>
    </div>
   </div>
  </footer>
 )
}

export default Footer
