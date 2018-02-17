/*
This section will make use of icons it is a good practice to use Icon font instead of an image, the reason we do this is because a font is built on vectors such that when the icon needs to be resized it will be more responsive than an image

Linea.io is a place to gather icons

 To use the icon font we add the icon class to an element, the element is not important, however, the element we will use is the <i></i> element.

 We never want to animate or add any external translations to a column we should add another box element for that.

 To break down this design the feature-box is a component because it will be code that will be reused 4 times
*/
import React from 'react'

const Features = () =>{
 return(
  <section className="section-features">
    <div className="row">
     <div className="col-1-of-4">
      <div className="feature-box">
       <i className="feature-box__icon icon-basic-world"></i>
       <h3 className="heading-tertiary">Explore Together</h3>
       <p className="feature-box__text">We never want to animate or add any external translations to a column we should add another box element for that.</p>
      </div>
     </div>
     <div className="col-1-of-4">
      <div className="feature-box">
       <i className="feature-box__icon icon-basic-compass"></i>
       <h3 className="heading-tertiary">Meet Nature</h3>
       <p className="feature-box__text">We never want to animate or add any external translations to a column we should add another box element for that.</p>
      </div>
     </div>
     <div className="col-1-of-4">
      <div className="feature-box">
       <i className="feature-box__icon icon-basic-map"></i>
       <h3 className="heading-tertiary">Find Your Way</h3>
       <p className="feature-box__text">We never want to animate or add any external translations to a column we should add another box element for that.</p>
      </div>
     </div>
     <div className="col-1-of-4">
      <div className="feature-box">
       <i className="feature-box__icon icon-basic-heart"></i>
       <h3 className="heading-tertiary">Live a healthier life</h3>
       <p className="feature-box__text">We never want to animate or add any external translations to a column we should add another box element for that.</p>
      </div>
     </div>
    </div>
  </section>
 )
}
export default Features
