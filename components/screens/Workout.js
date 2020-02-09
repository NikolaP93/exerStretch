import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Auxiliary from '../../hoc/Auxiliary';

const Workout = () => {
    return (
        <Auxiliary style={styles.container}>
            <Text>Workout page</Text>
        </Auxiliary>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#e6c2b2'
    },
});

export default Workout;
