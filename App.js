import React, { useState, useReducer } from 'react';
import { SafeAreaView } from 'react-native';

//firebase config
import * as firebase from 'firebase';
import ENV from './environment.js';

firebase.initializeApp(ENV.firebaseConfig);

import { AppContainer } from './components/navigation/Navigators';
import { UserContext } from './Contexts/UserContext';
import { LoadingContext } from './Contexts/LoadingContext';
import { initialState, reducer } from './Contexts/reducers';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
      <SafeAreaView style={{ flex: 1 }}>
        <LoadingContext.Provider value={{ loading, setLoading }}>
          <UserContext.Provider value={{ state, dispatch }}>
            <AppContainer />
          </UserContext.Provider>
        </LoadingContext.Provider>
      </SafeAreaView>
  )
};




// navigation container
export default App;
