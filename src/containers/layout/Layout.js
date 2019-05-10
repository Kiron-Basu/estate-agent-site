import React, { Component } from 'react';
import classes from './Layout.css';
import SideDrawer from '../../components/Nav/SideDrawer/SideDrawer';
import Nav from '../../components/Nav/Nav';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
          addClass: false,
          showSideDrawer: false
        }
    }
    toggleHandler = () => {
        // console.log('in toggle', this.state);
        this.setState(
          {addClass: !this.state.addClass},
          () => console.log('in toggle', this.state)
        ); 
      }
      
      // dropdownClickHandler = () => {
      //   console.log('in drop', this.state);
      //   this.state.addClass === true ? boxClass = ["Nav_Nav__dropdownContent__modRf", "Nav_Nav__dropdownContent__show__3eWLf"] : boxClass = ["Nav_Nav__dropdownContent__modRf"]
      // }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
    console.log('reached clsoed handler');
  };

  sideDrawerOpenedHandler = () => {
    this.setState(prevState => {
      console.log('got here');
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    const boxClass = this.state.addClass ? ["Nav_Nav__dropdownContent__modRf", "Nav_Nav__dropdownContent__show__3eWLf"] : ["Nav_Nav__dropdownContent__modRf"]
    return (
      <React.Fragment>
        <Nav boxClass = {boxClass} toggleHandler = {this.toggleHandler} clicked={this.sideDrawerOpenedHandler} open={this.state.showSideDrawer}/>
          <SideDrawer
          boxClass = {boxClass} 
          toggleHandler = {this.toggleHandler}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
          />
      </React.Fragment>
    );
  }
}

export default Layout;
