import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';

import Header from '../components/header/Header';
import ProgressBar from '../components/progressBar/ProgressBar';
import ChartContainer from '../containers/ChartContainer'
import Auxiliary from '../hoc/Auxiliary';
import { UserContext } from '../Contexts/UserContext';
import { LoadingContext } from '../Contexts/LoadingContext';
import MealContainer from '../containers/MealContainer';

const Welcome = props => {

    //destructure user object returned from user
    const { user: {
        user
    },
        setUser
    } = useContext(UserContext);
    const { loading, setLoading } = useContext(LoadingContext);

    useEffect(() => {
        setLoading(false)
    })

    const firstName = user.givenName;
    

    return (
        <Auxiliary>
            <ScrollView >
                <Header style={styles.container}>
                    <View style={styles.titles}>
                        <Text style={styles.h1}>Good Morning</Text>
                        <Text style={{ ...styles.h2, color: '#ffffff' }}>{firstName}</Text>
                    </View>
                    <Image source={require('../assets/yoga.png')} style={styles.logo} />
                    <Image source={require('../assets/sun.png')} style={styles.sun} />
                </Header>
                <ChartContainer />
                <MealContainer />
            </ScrollView>
        </Auxiliary>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 200
    },
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 50,
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
        fontSize: 20,
        fontWeight: '600'
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
    },
});

export default Welcome;
