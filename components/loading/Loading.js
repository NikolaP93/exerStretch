import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

const Loading = props => {
    return (
        <ActivityIndicator size="large" color="#0000ff" style={styles.container}/>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Loading;