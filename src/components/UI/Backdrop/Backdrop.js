import React from 'react';
import styles from './Backdrop.module.css';
import PropTypes from 'prop-types';

const Backdrop = props =>
  props.show ? (
    <div className={styles.Backdrop} onClick={props.clicked} />
  ) : null;

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired
};
export default Backdrop;
