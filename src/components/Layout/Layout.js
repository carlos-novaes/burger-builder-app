import React, { Component, Fragment } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import styles from './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  };
  SideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  drawerToggleClicked = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Fragment>
        <Toolbar click={this.drawerToggleClicked} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.SideDrawerClosedHandler}
        />
        <main className={styles.Content}>{this.props.children}</main>
      </Fragment>
    );
  }
}
export default Layout;
