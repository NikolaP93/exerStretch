import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const Card = props => {

    // animation starts from zero
    const [fadeIn] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(
            fadeIn,
            {
                toValue: 1,
                duration: 5000
            }
        ).start();
    }, [])

    return (
        <Animated.View style={{ opacity: fadeIn, ...styles.container, ...props.style }}>
            {props.children}
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        width: '80%',
        borderRadius: 20,
        height: 100,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        backgroundColor: '#a896b3',
        opacity: 0.8
    }
})

export default Card;