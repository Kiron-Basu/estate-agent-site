import React from 'react';
import logo from '../../../assets/img/logo.png';
import classes from './SideDrawer.module.scss';
import nav from '../Nav.module.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';

// let boxClass = ["Nav_Nav__dropdownContent__modRf"];

const sideDrawer = ({ open, closed, boxClass, toggleHandler }) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  console.log(boxClass);
  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <div className={attachedClasses.join(' ')}>
        {/* <div className={classes.Logo}>
          <Logo />
        </div> */}
        <nav>
        <img src={logo} alt="Estate Agent Logo" />
        <div className={classes.SideDrawer__links}>
            <a href = "#">About Us</a>  
            <a href = "#"> Properties</a>  
            <div className={nav.Nav__dropdown}>
                <a  onClick={toggleHandler} className={classes.SideDrawer__links}>Our Services</a>
                <div id="myDropdown" className={boxClass.join(' ')}>
                  <a href="#">Link 1</a>
                  <hr></hr>
                  <a href="#">Link 2</a>
                  <hr></hr>
                  <a href="#">Link 3</a>
              </div>
            </div> 
            <a href = "#"> News</a>  
            <a href = "#"> Testimonials</a>  
            <a href = "#"> Contact Us</a> 
          </div>
          <div className={classes.SideDrawer__loginLinks}>
            <a href = "#">Login/Register</a> 
            <a href = "#">My Properties</a> 
          </div>
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;