import React, { Component } from 'react';
import List from './List.js';
import { StackNavigator } from 'react-navigation';
export default (DrawNav = StackNavigator(
{
  List: { screen: List }
}));