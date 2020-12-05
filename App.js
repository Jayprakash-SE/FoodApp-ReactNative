import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

// Importing Screen
import SearchScreen from './src/screen/SearchScreen';
import ResultShow from './src/screen/ResultShow';

const nagivator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultShow: ResultShow
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Food Search'
    }
  }
)

export default createAppContainer( nagivator );