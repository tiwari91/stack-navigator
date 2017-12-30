import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {DrawerNavigator} from 'react-navigation';

import LoginScreen from './Screens/LoginScreen'
import HomeScreen from './Screens/HomeScreen'


export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator/>
    );
  }
}

const AppDrawerNavigator = DrawerNavigator({
  HomeScreen : {
    screen: HomeScreen
  },
  LoginScreen : {
    screen: LoginScreen
  }
})
