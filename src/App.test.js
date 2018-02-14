import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
/*
 Basic responsive design principles

1. For responsive design it is good to use fluid grids and layout
we use percentages instead of pixels for all layout lenghts specially width. This is for the content to adapt to the viewport the user is using.

1. Flexible/responsive images
Images behind different then text because they do not adapt to the viewport, we make them flexible by definiging their dimensions in percentages, otherwise it will not scale with fixed px.

3. Media queries

allow us to change styles for different devices by using media queries. amazing for different types of devices


------- Layout Types in modern web design --------
There are three ways to layout a webpage

Float Layouts (modern standard)
Current standard we will use float layouts

FlexBox (new)
Laysout elements in one direction row

CSSGrid (newest)
creates a two dimensional grid for design elements


------ Build a Fluid Grid -------
A grid is a design system that allows us to build consistent interfaces

we can merge columns where we can make different configurations
the columns are in a container called a row we must use rows and columns


*/
