// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import login from './pages/login'; 
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const navigator = createStackNavigator(
  {
    login: login,
    // ResultsShow: ResultsShowScreen,
  },
  {
    initialRouteName: 'login',
    defaultNavigationOptions: {
      title: 'Mental health ',
    },
  }
);

export default createAppContainer(navigator);


    