import React, { useContext } from 'react';
import firebase from 'firebase';
import * as Google from 'expo-google-app-auth';
import ENV from '../../environment';
import { UserContext } from '../../Contexts/UserContext';

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

export const signInWithGoogleAsync = async () => {
  try {
    const result = await Google.logInAsync({
      androidClientId: ENV.firebaseConfig.androidClientId,
      scopes: ['profile', 'email'],
    });
    if (result.type === 'success') {
      onSignIn(result);
    } else {
      return new Error('Login failed');
    }
    return result;
  } catch (e) {
    console.log('Failed to login with Google' + e);
  }
};

export const signOutWithGoogleAsync = async () => {
  await firebase.auth().signOut();
};
