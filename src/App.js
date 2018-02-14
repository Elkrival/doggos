import React, { Component } from 'react';
import  Header  from './components/Header/header_component'
import About from './components/About/about_component'

class App extends Component {
  render() {
    return (
     <div>
     <Header />
     <main>
      <About />
     </main>
    </div>
    );
  }
}

export default App;
