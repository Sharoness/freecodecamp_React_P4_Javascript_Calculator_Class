import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: "0"
    }

    this.handleClickEquals = this.handleClickEquals.bind(this);
    this.handleClickNumber = this.handleClickNumber.bind(this);
    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickSubtract = this.handleClickSubtract.bind(this);
    this.handleClickMultiply = this.handleClickMultiply.bind(this);
    this.handleClickDivide = this.handleClickDivide.bind(this);
    this.handleClickDecimal = this.handleClickDecimal.bind(this);
    this.handleClickClear = this.handleClickClear.bind(this);
    
  }
 
  handleClickEquals() {
    this.setState({number: "="});
  }

  handleClickNumber(waarde) {
    this.setState(state => ({
      number: parseInt(state.number.toString().concat(waarde)).toString().substr(0, 16)
    }));
  }

  handleClickAdd() {
    this.setState({number: "+"});
  }

  handleClickSubtract() {
    this.setState({number: "-"});
  }

  handleClickMultiply() {
    this.setState({number: "x"});
  }

  handleClickDivide() {
    this.setState({number: ":"});
  }

  handleClickDecimal() {
    this.setState({number: ""});
  }

  handleClickClear() {
    this.setState({number: 0});
  }

  render() {
    return (
      <div>
        <Button id="equals" onClick={this.handleClickEquals}>=</Button>
        <Button id="zero" onClick={() => {this.handleClickNumber(0)}}>0</Button>
        <Button id="one" onClick={() => {this.handleClickNumber(1)}}>1</Button>
        <Button id="two" onClick={() => {this.handleClickNumber(2)}}>2</Button>
        <Button id="three" onClick={() => {this.handleClickNumber(3)}}>3</Button>
        <Button id="four" onClick={() => {this.handleClickNumber(4)}}>4</Button>
        <Button id="five" onClick={() => {this.handleClickNumber(5)}}>5</Button>
        <Button id="six" onClick={() => {this.handleClickNumber(6)}}>6</Button>
        <Button id="seven" onClick={() => {this.handleClickNumber(7)}}>7</Button>
        <Button id="eight" onClick={() => {this.handleClickNumber(8)}}>8</Button>
        <Button id="nine" onClick={() => {this.handleClickNumber(9)}}>9</Button>
        <Button id="add" onClick={this.handleClickAdd()}>+</Button>
        <Button id="subtract" onClick={this.handleClickSubtract}>-</Button>
        <Button id="multiply" onClick={this.handleClickMultiply}>x</Button>
        <Button id="divide" onClick={this.handleClickDivide}>:</Button>
        <Button id="decimal" onClick={this.handleClickDecimal}>.</Button>
        <Button id="clear" onClick={this.handleClickClear}>AC</Button>
        <div id="formulaDisplay">formule wat je inklikt</div>
        <div id="display">{this.state.number}</div>
      </div>
    )
  }
}

export default App;
