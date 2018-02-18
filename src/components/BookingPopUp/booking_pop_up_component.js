import React from 'react'
import img_one from '../../img/nat-8.jpg'
import img_two from '../../img/nat-9.jpg'

const BookingPopUp = ()=>{
 return(
  <div className="popup" id="popup">
   <div className="popup__content">
    <div className="popup__left">
     <img src={ img_one } alt="Tour Photoooo" className="popup__img"/>
     <img src={ img_two } alt="Tour Photoone" className="popup__img"/>
    </div>
    <div className="popup__right">
     <a href="#section-tours" className="popup__close">&times;</a>
      <h2 className="heading-secondary u-margin-bottom-small"> Start Booking Now</h2>
      <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
      <p className="popup__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In fermentum et sollicitudin ac orci. Integer vitae justo eget magna fermentum iaculis eu. Eu sem integer vitae justo eget magna fermentum. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada.</p>
      <a href="" className="btn btn--green">Book Now</a>
    </div>
    </div>
  </div>
 )
}

export default BookingPopUp
