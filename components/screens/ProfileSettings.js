import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Auxiliary from '../../hoc/Auxiliary';
import firebase from 'firebase';
import Card from '../Card';


const ProfileSettings = props => {

    const logout = async () => {
        await firebase.auth().signOut();
    }

    return (
        <Auxiliary style={styles.container}>
            <Text>ProfileSettings page</Text>
            <Card title={'Log out'}
                navigation={props.navigation}
                href={'Account'}
                signin={logout}
            ></Card>
        </Auxiliary>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#a4c4f4'
    },
});

export default ProfileSettings
