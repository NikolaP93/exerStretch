import React from 'react';
import { SafeAreaView } from 'react-native';

//firebase config
import * as firebase from 'firebase';
import { firebaseConfig } from './config';
firebase.initializeApp(firebaseConfig);


import { AppContainer } from './components/navigation/Navigators';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <AppContainer />
    </SafeAreaView>
  )
};




// navigation container
export default App;
