import React from 'react';
import { createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
// function that takes a route configuration object and an options object and returns a component.

import Landing from './components/screens/Landing';
import Account from './components/screens/Account';
import Welcome from './components/screens/Welcome';
import ProfileSettings from './components/screens/ProfileSettings';
import Workout from './components/screens/Workout';
import WorkoutList from './components/screens/WorkoutList';
import ActiveBarComponent from './components/navigation/ActiveBarComponent';


const DashboardTabNavigator = createBottomTabNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor}) => {
        return (
          // component checks if the icon is focused and returns appropriate icon
          <ActiveBarComponent name='home' tintColor={tintColor} focused={focused} />
        )
      },
    }
  },
  Workout: {
    screen: Workout,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor}) => {
        return (
          <ActiveBarComponent name='calendar' tintColor={tintColor} focused={focused} />
        )
          ;
      },
    }
  },
  WorkoutList: {
    screen: WorkoutList,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor}) => {
        return (
          <ActiveBarComponent name='list-alt' tintColor={tintColor} focused={focused} />
        )
      },
    }
  },
  ProfileSettings: {
    screen: ProfileSettings,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor}) => {
        return (
          <ActiveBarComponent name='user' tintColor={tintColor} focused={focused} />
        )
      },
    }
  },
},
  {
    tabBarOptions: {
      showLabel: false,
      inactiveTintColor: '#0db5ba',
      activeTintColor: '#0db5ba'
    }
  })

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
      headerStyle: 'none'
    },
  },
});

const App = () => {
  return <AppContainer />;
};



const AppContainer = createAppContainer(AppSwitchNavigator);

// navigation container
export default App;
