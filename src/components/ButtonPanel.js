import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

// eslint-disable-next-line no-unused-vars
  renderButtons(name, buttonStyle) {
    return (
      <Button
        value={name}
        event={this.state}
      />
    );
  }

  render() {
    return (
      <div className="button-panel">
        <div className="number-panel">
          <div className="row">
            {this.renderButtons('AC')}
            {this.renderButtons('+/-')}
            {this.renderButtons('%')}
            {this.renderButtons('÷')}
          </div>
          <div className="row">
            {this.renderButtons('7')}
            {this.renderButtons('8')}
            {this.renderButtons('9')}
            {this.renderButtons('x')}
          </div>
          <div className="row">
            {this.renderButtons('4')}
            {this.renderButtons('5')}
            {this.renderButtons('6')}
            {this.renderButtons('-')}
          </div>
          <div className="row">
            {this.renderButtons('1')}
            {this.renderButtons('2')}
            {this.renderButtons('3')}
            {this.renderButtons('+')}
          </div>
          <div className="row">
            {this.renderButtons('0')}
            {this.renderButtons('.')}
            {this.renderButtons('=')}
          </div>
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
