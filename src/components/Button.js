import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { name, clickHandler } = this.props;
    clickHandler(name);
  }

  render() {
    const {
      buttonStyle, name, color, wide,
    } = this.props;

    return (
      <button
        type="button"
        className={`${buttonStyle} ${color} ${wide}`}
        onClick={this.handleClick}
      >
        {name}
      </button>
    );
  }
}

Button.propTypes = {
  buttonStyle: PropTypes.string,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
  buttonStyle: 'button',
};

export default Button;
