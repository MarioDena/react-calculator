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
    return (
      <button className={buttonStyle} type="submit">
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string,
  buttonStyle: PropTypes.string,
};

Button.defaultProps = {
  value: '0',
  buttonStyle: 'button',
};

export default Button;
