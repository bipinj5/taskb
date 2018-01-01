import React, { Component } from 'react';
import Moments from './Moments.js';
import { StackNavigator } from 'react-navigation';
export default (DrawNav = StackNavigator(
{
  Moments: { screen: Moments }
}));