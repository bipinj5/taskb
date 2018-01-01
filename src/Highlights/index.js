import React, { Component } from 'react';
import Highlights from './Highlights.js';
import { StackNavigator } from 'react-navigation';
export default (DrawNav = StackNavigator(
{
  Highlights: { screen: Highlights }
}));