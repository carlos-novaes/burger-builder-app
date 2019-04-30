import React from 'react';
import styles from './Toolbar.module.css';
import PropTypes from 'prop-types';

const Toolbar = props => {
  return (
    <header className={styles.Toolbar}>
      <div>MENU</div>
      <div>LOGO</div>
      <nav>...</nav>
    </header>
  );
};

Toolbar.propTypes = {};

export default Toolbar;
