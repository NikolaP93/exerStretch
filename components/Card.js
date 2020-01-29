import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const Card = props => {

    const { navigate } = props.navigation;

    return (
        // inherits parents styles plus it's own, on click changes to given prop
        <TouchableOpacity 
        style={{ ...styles.container, ...props.style }} 
        activeOpacity={.5} 
        onPress={() => { navigate(props.href); props.fn}}>
            <Text style={{ ...styles.text }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        backgroundColor: '#0db5ba'
    },
    text: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 20,
    }
})

export default Card;