import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 12
    }
    this.handleClickEquals = this.handleClickEquals.bind(this);
    this.handleClickZero = this.handleClickZero.bind(this);
    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickThree = this.handleClickThree.bind(this);
    this.handleClickFour = this.handleClickFour.bind(this);
    this.handleClickFive = this.handleClickFive.bind(this);
    this.handleClickSix = this.handleClickSix.bind(this);
    this.handleClickSeven = this.handleClickSeven.bind(this);
    this.handleClickEight = this.handleClickEight.bind(this);
    this.handleClickNine = this.handleClickNine.bind(this);
    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickSubtract = this.handleClickSubtract.bind(this);
    this.handleClickMultiply = this.handleClickMultiply.bind(this);
    this.handleClickDivide = this.handleClickDivide.bind(this);
    this.handleClickDecimal = this.handleClickDecimal.bind(this);
    this.handleClickClear = this.handleClickClear.bind(this);
    
  }

  handleClickEquals() {
    this.setState({number: 11});
  }

  handleClickZero() {
    this.setState({number: 0});
  }

  handleClickOne() {
    this.setState({number: 1});
  }

  handleClickTwo() {
    this.setState({number: 2});
  }

  handleClickThree() {
    this.setState({number: 3});
  }

  handleClickFour() {
    this.setState({number: 4});
  }

  handleClickFive() {
    this.setState({number: 5});
  }

  handleClickSix() {
    this.setState({number: 6});
  }

  handleClickSeven() {
    this.setState({number: 7});
  }

  handleClickEight() {
    this.setState({number: 8});
  }

  handleClickNine() {
    this.setState({number: 9});
  }

  handleClickAdd() {
    this.setState({number: 10});
  }

  handleClickSubtract() {
    this.setState({number: 13});
  }

  handleClickMultiply() {
    this.setState({number: 14});
  }

  handleClickDivide() {
    this.setState({number: 15});
  }

  handleClickDecimal() {
    this.setState({number: 16});
  }

  handleClickClear() {
    this.setState({number: 0});
  }

  render() {
    return (
      <div>
        <Button id="equals" onClick={this.handleClickEquals}>=</Button>
        <Button id="zero" onClick={this.handleClickZero}>0</Button>
        <Button id="one" onClick={this.handleClickOne}>1</Button>
        <Button id="two" onClick={this.handleClickTwo}>2</Button>
        <Button id="three" onClick={this.handleClickThree}>3</Button>
        <Button id="four" onClick={this.handleClickFour}>4</Button>
        <Button id="five" onClick={this.handleClickFive}>5</Button>
        <Button id="six" onClick={this.handleClickSix}>6</Button>
        <Button id="seven" onClick={this.handleClickSeven}>7</Button>
        <Button id="eight" onClick={this.handleClickEight}>8</Button>
        <Button id="nine" onClick={this.handleClickNine}>9</Button>
        <Button id="add" onClick={this.handleClickAdd}>+</Button>
        <Button id="subtract" onClick={this.handleClickSubtract}>-</Button>
        <Button id="multiply" onClick={this.handleClickMultiply}>x</Button>
        <Button id="divide" onClick={this.handleClickDivide}>:</Button>
        <Button id="decimal" onClick={this.handleClickDecimal}>.</Button>
        <Button id="clear" onClick={this.handleClickClear}>AC</Button>
        <div id="display">formule wat je inklikt</div>
        <div id="display">{this.state.number}</div>
      </div>
    )
  }
}

export default App;
