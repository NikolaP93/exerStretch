import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

//firebase config
import * as firebase from 'firebase';
import ENV from './environment.js';

firebase.initializeApp(ENV.firebaseConfig);


import { AppContainer } from './components/navigation/Navigators';
import { UserContext } from './UserContext';

const App = () => {
  const [user, setUser] = useState();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UserContext.Provider value={{ user, setUser }}>
        <AppContainer />
      </UserContext.Provider>
    </SafeAreaView>
  )
};




// navigation container
export default App;
