import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../App.css';
import calculate from '../logic/Calculate';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    if (/^\d|\.$/.test(buttonName)) {
      this.setState(previousState => {
        let next = previousState.next || '0';
        if (buttonName !== '.') {
          try {
            next = parseFloat(next += buttonName);
          } catch (e) {
            next = 0;
          }
        } else if (next.toString().indexOf('.') === -1) next += buttonName;
        return { next };
      });
    } else {
      this.setState((state) => calculate(state, buttonName));
    }
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="App">
        <Display value={(next || total || 0).toString()}/>
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;