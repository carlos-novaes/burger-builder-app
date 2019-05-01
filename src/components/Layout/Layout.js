import React, { Fragment } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import styles from './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = props => {
  return (
    <Fragment>
      <Toolbar />
      <SideDrawer />
      <main className={styles.Content}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
