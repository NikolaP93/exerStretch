import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Auxiliary from '../../hoc/Auxiliary';

const ProfileSettings = () => {
    return (
        <Auxiliary style={styles.container}>
            <Text>ProfileSettings page</Text>
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
