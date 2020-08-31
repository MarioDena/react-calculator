import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ value }) => (<div className="display"><p className="result">{value}</p></div>);

Display.propTypes = {
  value: PropTypes.string,
};

Display.defaultProps = {
  value: '0',
};

export default Display;
