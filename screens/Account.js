import React, { useEffect, useContext } from 'react';
import { StyleSheet } from 'react-native';

import firebase from 'firebase';
import * as Google from 'expo-google-app-auth';
import ENV from '../environment';

import Auxiliary from '../hoc/Auxiliary';
import Card from '../components/Card';

import { UserContext } from '../Contexts/UserContext';
import { LoadingContext } from '../Contexts/LoadingContext';

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
    flex: 1,
  },
});

const Account = ({ navigation }) => {
  const { setUser } = useContext(UserContext);
  const { setLoading } = useContext(LoadingContext);


  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        firebase.auth().signOut();
      }
    });
    setLoading(false);
  }, []);

  const isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      const { providerData } = firebaseUser;
      for (let i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID
          && providerData[i].uid === googleUser.getBasicProfile().getId()) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };

  const onSignIn = (googleUser) => {
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    const unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        const credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken,
        );
        // Sign in with credential from the Google user.
        firebase.auth().signInWithCredential(credential).then((result) => {
          if (result.additionalUserInfo.isNewUser) {
            firebase
              .database()
              .ref(`/users/${result.user.uid}`)
              .set({
                gmail: result.user.email,
                profile_picture: result.user.photoURL,
                display_name: result.user.displayName,
                created_at: Date.now(),
              });
          }
        });
      }
    });
  };

  // sign in with google and navigate to the welcome page
  const signInWithGoogleAsync = async () => {
    setLoading(true);
    try {
      const result = await Google.logInAsync({
        androidClientId: ENV.firebaseConfig.androidClientId,
        scopes: ['profile', 'email'],
      });
      if (result.type === 'success') {
        onSignIn(result);
        // Build Firebase credential with the Facebook access token.
        const credential = firebase.auth.GoogleAuthProvider.credential(result);

        setUser(result);

        // Sign in with credential from the Facebook user.
        firebase.auth().signInWithCredential(credential).catch(() => {
          // Handle Errors here.
        });
        navigation.navigate('Welcome');
      } else {
        navigation.navigate('Account');
      }
    } catch (e) {
      console.log(e);
    }
  };

  const content = (
    <Card
      title="Google Login"
      passedFunction={signInWithGoogleAsync}
      navigation={navigation}
      href="Account"
    />
  );

  return (
    <Auxiliary style={styles.container}>
      {content}
    </Auxiliary>
  );
};


export default Account;
