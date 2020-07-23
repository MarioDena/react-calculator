import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { value } = this.props;
    const { buttonStyle } = this.props;
    const { color } = this.props; 
    const { wide } = this.props;

    return (
      <button className={`${buttonStyle} ${color} ${wide}`} type="submit">
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string,
  buttonStyle: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  value: '0',
  buttonStyle: 'button',
  color: 'orange',
  wide: false,
};

export default Button;
