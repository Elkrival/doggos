import React from 'react'
import doggo1 from '../../img/doggo-1.jpeg'
import doggo2 from '../../img/doggo-2.jpeg'
import doggo3 from '../../img/doggo-3.jpeg'

const About = () =>{
 return(
  <section className="section-about">
   <div className="u-center-text u-margin-bottom-big">
   <h2 className="heading-secondary">
   Commands running gimme five groom slobber run fast
   </h2>
   </div>
  <div className="row">
   <div className="col-1-of-2">
    <h3 className="heading-tertiary u-margin-bottom-small">
     Good Boy park lazy dog walk kibble Scooby snacks
    </h3>
    <p className="paragraph">
     Play Dead sit nap lazy dog wet nose Tigger run fast fish lazy cat wagging hamster toy field yawn feathers ferret yawn aquarium.Feathers bird seed food scratcher mouse running teeth licks heel walk pet gate maine coon cat collar twine parakeet.
    </p>
    <h3 className="heading-tertiary u-margin-bottom-small">
     Chew Toys!
    </h3>
     <p className="paragraph">
      Pet Food pet supplies gimme five puppy cage food feathers food heel feathers running pet gate walk lazy dog Spike. Good Boy park lazy dog walk kibble Scooby snacks licks canary.
     </p>
     <a href="3" className="btn-text">
      To Infinity & Beyond &rArr;
     </a>
   </div>
   <div className="col-1-of-2">
    <div className="composition">
     <img src={ doggo1 } alt="" className="composition__photo composition__photo--p1"/>
     <img src={ doggo2 } alt="" className="composition__photo composition__photo--p2"/>
     <img src={ doggo3 } alt="" className="composition__photo composition__photo--p3"/>
    </div>
   </div>
  </div>
  </section>
 )
}
export default About
/*
 The styles of this component will be put inside our pages home scss because it is part of the home about page.


 u-center-text

This class is only used to center the items inside of it. It is called a utility class.

Because we use the skew of the heading and we need to create space we will use the utility class to set margins across the page, this maintains our elements reuseable
*/
