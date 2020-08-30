import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const buttons = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { clickHandler } = this.props;
    clickHandler(buttonName);
  }

  render() {
    return (
      <div className="button-panel">
         <div className="number-panel">
          {buttons.map((row, i) => (
            <div className="row">
              {row.map((b, j) => (
                <Button
                  key={b}
                  buttonStyle='button'
                  name={b}
                  value={b}
                  {...(b === '0' && { wide: true })}
                  {...(i < 4 && j < 3 && { color: 'lightgrey' })}
                  {...(i === 4 && j < 2 && { color: 'lightgrey' })}
                  clickHandler={this.handleClick}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;