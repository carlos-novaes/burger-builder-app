import React from 'react';
import PropTypes from 'prop-types';

const DrawerToggle = props => {
  return <div onClick={props.clicked}>Menu</div>;
};

DrawerToggle.propTypes = {
  clicked: PropTypes.func.isRequired
};

export default DrawerToggle;
