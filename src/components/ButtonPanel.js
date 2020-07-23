import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderButtons(name, style) {
    return (
      <Button
        value={name}
        buttonStyle={style}
        event={this.state}
      />
    );
  }

  render() {
    return (
      <div className="button-panel">
        <div className="number-panel">
          <div className="row">
            {this.renderButtons('AC', 'button orangeButton')}
            {this.renderButtons('+/-', 'button orangeButton')}
            {this.renderButtons('%', 'button orangeButton')}
            {this.renderButtons('÷', 'button orangeButton')}
          </div>
          <div className="row">
            {this.renderButtons('7')}
            {this.renderButtons('8')}
            {this.renderButtons('9')}
            {this.renderButtons('x', 'button orangeButton')}
          </div>
          <div className="row">
            {this.renderButtons('4')}
            {this.renderButtons('5')}
            {this.renderButtons('6')}
            {this.renderButtons('-', 'button orangeButton')}
          </div>
          <div className="row">
            {this.renderButtons('1')}
            {this.renderButtons('2')}
            {this.renderButtons('3')}
            {this.renderButtons('+', 'button orangeButton')}
          </div>
          <div className="row">
            {this.renderButtons('0', 'button bigbutton')}
            {this.renderButtons('.', 'button')}
            {this.renderButtons('=', 'button orangeButton')}
          </div>
        </div>
      </div>
    );
  }
}

export default ButtonPanel;