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
    const { classStyle } = this.props;
    return (
      <button className={classStyle} type="submit">
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string,
  classStyle: PropTypes.string,
};

Button.defaultProps = {
  value: '0',
  classStyle: 'button-item',
};

export default Button;