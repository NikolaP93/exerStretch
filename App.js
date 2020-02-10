import React from 'react';
import { SafeAreaView } from 'react-native'
// function that takes a route configuration object and an options object and returns a component.

import { AppContainer } from './components/navigation/Navigators';

const App = () => {
  return <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
    <AppContainer />
  </SafeAreaView>
};




// navigation container
export default App;
