import React from 'react';
import classes from './MenuToggle.module.scss';

// let toggle = false;
let burgerClasses = [];
const toggleBurger = () => {
  // let burgerIcon = document.getElementById('burger');
  // burgerIcon.classList.toggle('is-active');
 
  // toggle = !toggle;
  console.log(burgerClasses);
}
const menuToggle = ({ toggleClick, open }) => {
  if(open) {
    burgerClasses = ['MenuToggle_burger__cuJsd'];
   } else {
    burgerClasses = [];
   }

   return (
  <div
    className={classes.MenuToggle}
    onClick={toggleClick}
    onKeyDown={toggleClick}
    role="presentation"
  > 
    <div className={burgerClasses} id="burger" onClick={toggleBurger}>
        <div className={classes.line} />
        <div className={classes.line} />
        <div className={classes.line} />
    </div>
  </div>
   )
};

export default menuToggle;