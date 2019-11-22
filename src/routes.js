import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import Pokemon from './pages/Pokemon';

import Header from './Components/Header';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Pokemon,
    },
    {
      initialRouteName: 'Main',
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
      cardStyle: {
        backgroundColor: '#111',
      },
      headerTintColor: '#fff',
    }
  )
);

export default Routes;
