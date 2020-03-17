import React, { useState, useContext } from 'react';
import { SafeAreaView } from 'react-native';


//firebase config
import * as firebase from 'firebase';
import ENV from './environment.js';

firebase.initializeApp(ENV.firebaseConfig);

import { AppContainer } from './components/navigation/Navigators';
import { UserContext } from './Contexts/UserContext';
import { LoadingContext } from './Contexts/LoadingContext';

const App = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);


  return (
      <SafeAreaView style={{ flex: 1 }}>
        <LoadingContext.Provider value={{ loading, setLoading }}>
          <UserContext.Provider value={{ user, setUser }}>
            <AppContainer />
          </UserContext.Provider>
        </LoadingContext.Provider>
      </SafeAreaView>
  )
};




// navigation container
export default App;
