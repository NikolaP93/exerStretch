import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import Card from '../Card';
import Header from '../header/Header';
import Auxiliary from '../../hoc/Auxiliary';

const Welcome = props => {

    return (
        <Auxiliary>
            <Header style={styles.container}>
                <View style={styles.titles}>
                    <Text style={styles.h1}>Good Morning</Text>
                    <Text style={styles.h2}>King</Text>
                </View>
                <Image source={require('../../assets/yoga.png')} style={styles.logo} />
                <Image source={require('../../assets/sun.png')} style={styles.sun} />
            </Header>
        </Auxiliary>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 50
    },
    titles: {
        marginLeft: 30,
        width: '30%',
        marginTop: 20
    },
    h1: {
        fontSize: 20,
        opacity: 0.4,
        fontWeight: 'bold',
        marginBottom: 5
    },
    h2: {
        color: '#ffffff',
        fontSize: 18
    },
    logo: {
        marginRight: 10,
        height: 120,
        width: 150,
        left: 80
    },
    sun: {
        height: 50,
        width: 50,
        top: -20
    }
});

export default Welcome;
