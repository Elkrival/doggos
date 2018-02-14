import React from 'react'
import logo from '../../img/chihuahua.png'
/*

Implementing BEM system
The block is the header
Then the element is everying inside this block
we use __ to separate them

the className heading is it's own block because it displays itself as a different version by using modifiers

heading-primary is block
heading-primary--main we use two dashes to annotate the different modifiers
heading-primary--sub
*/
const Header = () =>{
  return(
   <header className="header">
     <div>
      <img src={ logo } alt="Logo" className="header__logo"/>
     </div>
    <div className="header__text-box">
    <h1 className="heading-primary">
     <span className="heading-primary--main">Furry Friends </span>
     <span className="heading-primary--sub">Our favorite companion!</span>
    </h1>
     <a href="#here" className="btn btn--white btn--animated">To Infinity and Beyond &rArr;	</a>
    </div>
   </header>
   // <section className="grid-test">
   //  <div className="row">
   //   <div className="col-1-of-2"> Col 1 of 2</div>
   //   <div className="col-1-of-2">Col 1 of 2 </div>
   //  </div>
   //  <div className="row">
   //   <div className="col-1-of-3"> Col 1 of 3</div>
   //   <div className="col-1-of-3">Col 1 of 3 </div>
   //   <div className="col-1-of-3"> Col 1 of 3</div>
   //  </div>
   //  <div className="row">
   //   <div className="col-1-of-3"> Col 1 of 3</div>
   //   <div className="col-2-of-3">Col 2 of 3 </div>
   //  </div>
   //  <div className="row">
   //   <div className="col-1-of-4"> Col 1 of 4</div>
   //   <div className="col-1-of-4">Col 1 of 4 </div>
   //   <div className="col-1-of-4"> Col 1 of 4</div>
   //   <div className="col-1-of-4"> Col 1 of 4</div>
   //  </div>
   //  <div className="row">
   //   <div className="col-1-of-4">Col 1 of 4</div>
   //   <div className="col-1-of-4">Col 1 of 4</div>
   //   <div className="col-2-of-4">Col 2 of 4</div>
   //  </div>
   // <div className="row">
   //  <div className="col-1-of-4">Col 1 of 4</div>
   //  <div className="col-3-of-4">Col 3 of 4</div>
   // </div>
   // </section>
 )
}

export default Header;
