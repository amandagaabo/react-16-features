import React, { Fragment } from 'react';

function ArrayOfColors () {
  return [
    <li key="1">Pink</li>,
    <li key="2">Purple</li>,
    <li key="3">Grey</li>
  ];   
}

function FragmentWithColors () {
  return (
    <Fragment>
      <li key="1">Red</li>
      <li key="2">Black</li>
      <li key="3">Blue</li>
    </Fragment>
  )
}

function FragmentShorthandWithColors () {
  return (
    <>
      <li key="1">Orange</li>
      <li key="2">Yellow</li>
      <li key="3">White</li>
    </>
  )
}

export {
  ArrayOfColors,
  FragmentWithColors,
  FragmentShorthandWithColors
};
