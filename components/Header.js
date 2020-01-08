import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Card from '../components/Card'

const Header = () => {

    return (
        <View style={styles.container}>
                <Card style={styles.card}>
                        <Text style={styles.text}>Welcome to Stretchercise</Text>
                </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginTop: 20,
    },
    text: {
        fontSize: 22
    },
    card: {
        height: 100,
        width: 300
    }
})

export default Header;