import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderButtons(name, style, color, wide) {
    // eslint-disable-next-line no-unneeded-ternary
    const fColor = color ? color : 'orange';
    return (
      <Button
        value={name}
        buttonStyle={style}
        color={fColor}
        wide={wide}
        event={this.state}
      />
    );
  }

  render() {
    return (
      <div className="button-panel">
        <div className="number-panel">
          <div className="row">
            {this.renderButtons('AC', 'button', 'white')}
            {this.renderButtons('+/-', 'button', 'white')}
            {this.renderButtons('%', 'button', 'white')}
            {this.renderButtons('÷', 'button')}
          </div>
          <div className="row">
            {this.renderButtons('7', 'button', 'white')}
            {this.renderButtons('8', 'button', 'white')}
            {this.renderButtons('9', 'button', 'white')}
            {this.renderButtons('x', 'button')}
          </div>
          <div className="row">
            {this.renderButtons('4', 'button', 'white')}
            {this.renderButtons('5', 'button', 'white')}
            {this.renderButtons('6', 'button', 'white')}
            {this.renderButtons('-', 'button')}
          </div>
          <div className="row">
            {this.renderButtons('1', 'button', 'white')}
            {this.renderButtons('2', 'button', 'white')}
            {this.renderButtons('3', 'button', 'white')}
            {this.renderButtons('+', 'button')}
          </div>
          <div className="row">
            {this.renderButtons('0', 'button', 'white', true)}
            {this.renderButtons('.', 'button', 'white')}
            {this.renderButtons('=', 'button')}
          </div>
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
