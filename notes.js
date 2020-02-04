// ES6
// includes let and const
// includes import statement

import React from "react";
import ReactDOM from "react-dom";

//ReactDOM.render(what i want to render, where i want to render)

// new js comes with: promises, arrow operators, async, await, classes, JSX
// not all the browsers support this new features

//BABEL
//It has different plugins. combo of plugins are called presets.
//BABEL COMPILES JSX TO JS calling React

// JSX
ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));
//div id root contains our react components

//COMPONENT
// class Tweet {
//     state = {};
//     render(){
// this method returns a reactElement which is in virtual DOM (maps to a DOM element)
//     }
// }

//REACT reacts to state changes

//create-react-app name
//This will install server, babel and webpack
//we dont need to config

//<div>  =  React.Fragment
//className is a keyword for JSX, class in normal js
