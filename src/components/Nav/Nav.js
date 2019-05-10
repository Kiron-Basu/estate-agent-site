import React from 'react';
import classes from './Nav.module.scss';
import logo from '../../assets/img/logo.png';
import MenuToggle from './SideDrawer/MenuToggle/MenuToggle';
// let boxClass = ["Nav_Nav__dropdownContent__modRf"];

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {addClass: true}
}

// toggleHandler = () => {
//   // console.log('in toggle', this.state);
//   this.setState(
//     {addClass: !this.state.addClass},
//     () => console.log('in toggle', this.state), this.dropdownClickHandler()
//   ); 
// }

// dropdownClickHandler = () => {
//   console.log('in drop', this.state);
//   this.state.addClass === true ? boxClass = ["Nav_Nav__dropdownContent__modRf", "Nav_Nav__dropdownContent__show__3eWLf"] : boxClass = ["Nav_Nav__dropdownContent__modRf"]
// }

render() {
  return (
        <header className="App-header">
         <MenuToggle toggleClick={this.props.clicked} open={this.props.open}/>
        <nav className={classes.Nav}>
          <img src={logo} alt="Estate Agent Logo" />
          <div className={classes.Nav__links}>
            <a href = "#">About Us</a> | 
            <a href = "#"> Properties</a> | 
            <div className={classes.Nav__dropdown}>
                <a onClick={this.props.toggleHandler} className="dropbtn">Our Services</a>
                <div id="myDropdown" className={this.props.boxClass.join(' ')}>
                  <a href="#">Link 1</a>
                  <hr></hr>
                  <a href="#">Link 2</a>
                  <hr></hr>
                  <a href="#">Link 3</a>
              </div>
            </div> |
            <a href = "#"> News</a> | 
            <a href = "#"> Testimonials</a> | 
            <a href = "#"> Contact Us</a> 
          </div>
          <div className={classes.Nav__loginLinks}>
            <a href = "#">Login/Register</a> 
            <a href = "#">My Properties</a> 
          </div>
          <div className={classes.Nav__valuationButton}>
            Instant Valuation
          </div>
        </nav>
      </header>
    )
  }
}

export default Nav;
