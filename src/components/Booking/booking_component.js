import React from 'react'

const Booking = () =>{
 return(
  <section className="section-booking">
   <div className="row">
    <div className="book">
     <div className="book__form">
      <form action="#" className="form">
        <div className=" u-margin-bottom-medium">
         <h3 className="heading-secondary"> Start Booking Now</h3>
        </div>
       <div className="form__group">
        <input type="text" placeholder="Full Name" id="full-name" required className="form__input"/>
        <label htmlFor="full-name" className="form__label">Full Name</label>
       </div>
       <div className="form__group">
         <input type="email" placeholder="Email" id="email" required className="form__input"/>
         <label htmlFor="email" className="form__label">Email</label>
       </div>
       <div className="form__group u-margin-bottom-medium" >
        <div className="form__radio-group">
         <input type="radio" id="small" name="size" className="form__radio-input"/>
          <label htmlFor="small" className="form__radio-label"><span className="form__radio-button"></span>Small tour group </label>
          </div>
          <div className="form__radio-group">
          <input type="radio" id="large" name="size" className="form__radio-input"/>
          <label htmlFor="large" className="form__radio-label"><span className="form__radio-button"></span>Large tour group</label>
        </div>
       </div>
        <div className="form__group">
         <button className="btn btn--green">Next Steps  &rArr;</button>
        </div>
      </form>
     </div>
    </div>
   </div>
  </section>
 )
}
export default Booking

// ------------- Form Group Label ---------------
/*

         For a label to recognize a form it needs an id

   The radio button cannot be styled by CSS To style it we will be using the span element to hide the radio button.

  button element:
  We must use a button element because a form tag can only be submitted by the event of a button , it cannot be submitted by an anchor element tag
*/
