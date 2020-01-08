import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Card from './Card';

const TimeQuery = props => {

    const [userInput, setUserInput] = useState('10');



    return (
        <View style={{ opacity: 1 }}>
            <Card>
                <Text style={styles.text}>How often would you like to stretchercise?</Text>
                <View style={styles.inputContainer}>
                    <Text>
                        Every
                        </Text>
                    <TextInput
                        style={styles.textInput}
                        defaultValue={userInput}
                        keyboardType='number-pad'
                        defaultValue={userInput}
                        onChangeText={text => setUserInput(text)}
                    />
                    <Text>minutes</Text>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        paddingBottom: 20
    },
    textInput: {
        height: 20,
        width: 25,
        textAlign: 'center',
        color: 'white'
    },
    inputContainer: {
        flexDirection: 'row',
    }
});

export default TimeQuery;