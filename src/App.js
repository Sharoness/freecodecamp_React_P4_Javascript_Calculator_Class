import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';



class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Button id="equals">=</Button>
        <Button id="zero">0</Button>
        <Button id="one">1</Button>
        <Button id="two">2</Button>
        <Button id="three">3</Button>
        <Button id="four">4</Button>
        <Button id="five">5</Button>
        <Button id="six">6</Button>
        <Button id="seven">7</Button>
        <Button id="eight">8</Button>
        <Button id="nine">9</Button>
        <Button id="add">+</Button>
        <Button id="subtract">-</Button>
        <Button id="multiply">x</Button>
        <Button id="divide">:</Button>
        <Button id="decimal">.</Button>
        <Button id="clear">AC</Button>
        <div id="display"></div>
      </div>
    )
  }
}

export default App;
