import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { useForm } from 'react-hook-form';
import { TextInput } from 'react-native-gesture-handler';
import Card from '../Card';

const Account = props => {
    const { register, handleSubmit, setValue } = useForm();


    useEffect(() => {
        register('fname');
        register('lname');
    }, [register])

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={'Enter first name here'}
                onChangeText={text => { setValue('fname', text) }} />
            <TextInput
                style={styles.input}
                placeholder={'Enter last name here'}
                onChangeText={text => { setValue('lname', text) }} />
            <Text></Text>
            <Card
                title={'Submit'}
                navigation={props.navigation}
                href={'Landing'}
            ></Card>
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

export default Account;
