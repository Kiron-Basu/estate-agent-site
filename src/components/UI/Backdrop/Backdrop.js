import React from 'react';
import classes from './Backdrop.module.scss';

const backdrop = ({ clicked, show }) =>
  show ? (
    <div
      className={classes.Backdrop}
      onClick={clicked}
      onKeyDown={clicked}
      role="presentation"
    />
  ) : null;

export default backdrop;
