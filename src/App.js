import React, { Component } from 'react';
import  Header  from './components/Header/header_component'
import About from './components/About/about_component'
import Features from './components/Features/feature_component'
import PriceOptions from './components/PriceOptions/price_options_component'
import Stories from './components/Stories/stories_component'

class App extends Component {
  render() {
    return (
     <div>
     <Header />
     <main>
      <About />
      <Features />
      <PriceOptions />
      <Stories />
     </main>
    </div>
    );
  }
}

export default App;
