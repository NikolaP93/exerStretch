import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, ActivityIndicator } from 'react-native';

import * as Google from 'expo-google-app-auth';
import Auxiliary from '../../hoc/Auxiliary';
import Card from '../Card';

const Account = props => {

    const [loading, setLoading] = useState(false);

    //sign in with google and navigate to the welcome page
    const signInWithGoogleAsync = async () => {
        try {
            setLoading(true)
            const result = await Google.logInAsync({
                androidClientId: '241453931910-lci0pp08uds0e66b9abacv32gbcvaq9k.apps.googleusercontent.com',
                scopes: ['profile', 'email']
            });
            if (result.type === 'success') {
                props.navigation.navigate('Welcome');
            } else {
                props.navigation.navigate('Account');
            }
        } catch (e) {
            console.log(e)
        }
    }

    let content = 
    <Card title={'Google Login'}
        signin={signInWithGoogleAsync}
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
        marginTop: 10
    }
});

export default Account;
