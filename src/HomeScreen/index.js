import React, { Component } from 'react';
import HomeScreen from './HomeScreen.js';
import { DrawerNavigator } from 'react-navigation';
import SideBar from '../SideBar/SideBar.js';
import Profile from '../ProfileScreen/index.js';
import List from '../List/index.js';
import Moments from '../Moments/index.js';
import Highlights from '../Highlights/index.js';
const HomeScreenRouter = DrawerNavigator(
  {
	Home: { screen: HomeScreen },
	Profile: { screen: Profile },
	List: { screen: List },
	Moments: { screen: Moments },
	Highlights: { screen: Highlights }
  },
  {
	contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
	