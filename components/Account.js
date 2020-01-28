import React, { useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const Account = props => {

    return (
        <View style={{ borderRadius: 1, overflow: "hidden" }}>
            <Text>Account Creation Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 100,
        aspectRatio: 16 / 9,
        marginVertical: 50,
    },
});

export default Account;
