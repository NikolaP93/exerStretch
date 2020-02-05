import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import Card from '../Card';

const Welcome = props => {

    return (
        <View style={styles.container}>
            <Text>Welcome page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        width: '100%',
        alignItems: 'center',
        marginTop: 10
    },
    input: {
        height: 50,
        width: '90%',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 5,
        paddingHorizontal: 5
    }
});

export default Welcome;
