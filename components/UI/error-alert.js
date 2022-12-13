/* eslint-disable react/prop-types */
import React from 'react'
import classes from './error-alert.module.css';

function ErrorAlert(props) {
  return <div className={classes.alert}>{props.children}</div>;
}

export default ErrorAlert;
