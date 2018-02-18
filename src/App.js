import React, { Component } from 'react';
import  Header  from './components/Header/header_component'
import About from './components/About/about_component'
import Features from './components/Features/feature_component'
import PriceOptions from './components/PriceOptions/price_options_component'
import Stories from './components/Stories/stories_component'
import Booking from './components/Booking/booking_component'
import Footer from './components/Footer/footer_component'
import Navigation from './components/Navigation/navigation_component'
import BookingPopUp from './components/BookingPopUp/booking_pop_up_component'

class App extends Component {
  render() {
    return (
     <div>
     <Navigation />
     <Header />
     <main>
      <About />
      <Features />
      <PriceOptions />
      <Stories />
      <Booking />
     </main>
      <Footer />
    <BookingPopUp />
    </div>
    );
  }
}

export default App;
