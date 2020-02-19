import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';

import firebase from 'firebase';

import * as Google from 'expo-google-app-auth';
import Auxiliary from '../hoc/Auxiliary';
import Card from '../components/Card';

import { UserContext } from '../UserContext';


const Account = props => {

    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user !== null) {
                firebase.auth().signOut();
                return;
            } 
        })
    }, []);

    const [loading, setLoading] = useState(false);

    // if user is logged in, logout (testing phase) / 


    const isUserEqual = (googleUser, firebaseUser) => {
        if (firebaseUser) {
            var providerData = firebaseUser.providerData;
            for (var i = 0; i < providerData.length; i++) {
                if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                    providerData[i].uid === googleUser.getBasicProfile().getId()) {
                    // We don't need to reauth the Firebase connection.
                    return true;
                }
            }
        }
        return false;
    }

    const onSignIn = googleUser => {
        // We need to register an Observer on Firebase Auth to make sure auth is initialized.
        var unsubscribe = firebase.auth().onAuthStateChanged(function (firebaseUser) {
            unsubscribe();
            // Check if we are already signed-in Firebase with the correct user.
            if (!isUserEqual(googleUser, firebaseUser)) {
                // Build Firebase credential with the Google ID token.
                var credential = firebase.auth.GoogleAuthProvider.credential(
                    googleUser.idToken,
                    googleUser.accessToken);
                // Sign in with credential from the Google user.
                firebase.auth().signInWithCredential(credential).then((result) => {
                    if (result.additionalUserInfo.isNewUser) {
                        firebase
                            .database()
                            .ref('/users/' + result.user.uid)
                            .set({
                                gmail: result.user.email,
                                profile_picture: result.user.photoURL,
                                display_name: result.user.displayName,
                                created_at: Date.now()
                            })
                    }
                }).catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    // ...
                });
            } else {
                console.log('User already signed-in Firebase.');
            }
        });
    }

    //sign in with google and navigate to the welcome page
    const signInWithGoogleAsync = async () => {
        try {
            setLoading(true)
            const result = await Google.logInAsync({
                androidClientId: '241453931910-lci0pp08uds0e66b9abacv32gbcvaq9k.apps.googleusercontent.com',
                scopes: ['profile', 'email']
            });
            if (result.type === 'success') {
                onSignIn(result)
                // Build Firebase credential with the Facebook access token.
                const credential = firebase.auth.GoogleAuthProvider.credential(result);

                setUser(result);

                // Sign in with credential from the Facebook user.
                firebase.auth().signInWithCredential(credential).catch((error) => {
                    // Handle Errors here.
                });

                props.navigation.navigate('Welcome');
            } else {
                props.navigation.navigate('Account');
            }
        } catch (e) {
            console.log(e)
        }
        props.navigation.navigate('Welcome')
    }

    let content =
        <Card title={'Google Login'}
            passedFunction={signInWithGoogleAsync}
            navigation={props.navigation}
            href={'Account'}
        ></Card>

    if (loading) {
        content = <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <Auxiliary style={styles.container}>
            {content}
        </Auxiliary>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'center',
        flex: 1
    }
});

export default Account;
