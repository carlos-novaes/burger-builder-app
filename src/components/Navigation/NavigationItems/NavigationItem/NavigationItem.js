import React from 'react';
import styles from './NavigationItem.module.css';
import PropTypes from 'prop-types';

const NavigationItem = props => {
  return (
    <li className={styles.NavigationItem}>
      <a className={props.active ? styles.active : null} href={props.link}>
        {props.children}
      </a>
    </li>
  );
};

NavigationItem.propTypes = {};

export default NavigationItem;
