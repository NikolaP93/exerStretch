import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Landing from '../../screens/Landing/Landing';
import Account from '../../screens/Account/Account';
import Welcome from '../../screens/Welcome/Welcome';
import Workout from '../../screens/Workout/Workout';
import WorkoutList from '../../screens/WorkoutList/WorkoutList';
import ProfileSettings from '../../screens/ProfileSettings/ProfileSettings';
import ActiveBarComponent from './ActiveBarComponent/';
import Colors from '../../constants/Colors/';
import Loading from '../loading/Loading/';


const DashboardTabNavigator = createMaterialTopTabNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
        // component checks if the icon is focused and returns appropriate icon
        <ActiveBarComponent name="home" tintColor={tintColor} focused={focused} />
      ),
    },
  },
  Workout: {
    screen: Workout,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
        <ActiveBarComponent name="calendar" tintColor={tintColor} focused={focused} />
      ),
    },
  },
  WorkoutList: {
    screen: WorkoutList,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
        <ActiveBarComponent name="list-alt" tintColor={tintColor} focused={focused} />
      ),
    },
  },
  ProfileSettings: {
    screen: ProfileSettings,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
        <ActiveBarComponent name="user" tintColor={tintColor} focused={focused} />
      ),
    },
  },
},
  {
    tabBarOptions: {
      showLabel: false,
      inactiveTintColor: Colors.primary,
      activeTintColor: Colors.primary,
      style: {
        backgroundColor: 'white',
      },
      indicatorStyle: {
        height: 0,
      },
      showIcon: true,
    },
    tabBarPosition: 'bottom',
  });
// allows us to navigate without a header
const AppSwitchNavigator = createSwitchNavigator({
  Landing: {
    screen: Landing,
    navigationOptions: {
      header: null,
    },
  },
  Account: {
    screen: Account,
    navigationOptions: {
      headerTitle: 'Account',
    },
  },
  Welcome: {
    screen: DashboardTabNavigator,
    navigationOptions: {
      headerStyle: 'none',
    },
  },
  Loading: {
    screen: Loading,
  },
});


export const AppContainer = createAppContainer(AppSwitchNavigator);
