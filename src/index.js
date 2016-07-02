import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  render(){
    return <h1> hh </h1>
  }
}

let rootEle = document.getElementById('app');

ReactDOM.render(<MyComponent />, rootEle)
