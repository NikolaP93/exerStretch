import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Card from '../components/Card';
import Auxiliary from '../hoc/Auxiliary';
import Colors from '../constants/Colors';


const Landing = props => {

    return (
        <Auxiliary style={styles.container}>
            <LinearGradient colors={['#C8C8C8', '#FFFFFF']} style={{ flex: 1 }} start={{ x: 0, y: 1 }}
                end={{ x: .2, y: 1 }}>
                <View style={styles.textContainer}>
                    <Text style={styles.h1}>
                        <Text style={{ color: Colors.primary }}>Exer</Text>
                        <Text>stretch</Text>
                    </Text>
                    <Text style={styles.h2}>Welcome to our Club</Text>
                    <Text style={styles.h3}>We need some information to make a perfect workout experience for you.</Text>
                    <Card title={'Start'}
                        navigation={props.navigation}
                        href={'Account'}
                        ></Card>
                    <Image source={require('../assets/yoga.png')} style={styles.logo} />
                </View>
            </LinearGradient>
        </Auxiliary>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textContainer: {
        height: 300,
        width: 400,
        alignItems: 'center',
        top: '25%'
    },
    h1: {
        fontSize: 38,
        marginVertical: 20
    },
    h2: {
        fontWeight: 'bold',
        fontSize: 26,
    },
    h3: {
        textAlign: 'center',
        width: '70%',
        marginTop: 10,
        fontSize: 14
    },
    button: {
        fontSize: 16,
        color: 'white',

    },
    logo: {
        height: 150,
        width: 150,
        margin: 20
    }
})

export default Landing
