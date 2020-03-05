import React, { useContext, useEffect } from 'react';
import {
  View, StyleSheet, Text, Image, ScrollView,
} from 'react-native';

import Header from '../components/header/Header';
import ChartContainer from '../containers/ChartContainer';
import Auxiliary from '../hoc/Auxiliary';
import { UserContext } from '../Contexts/UserContext';
import { LoadingContext } from '../Contexts/LoadingContext';
import MealContainer from '../containers/MealContainer';

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
  },
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 50,
  },
  titles: {
    marginLeft: 30,
    width: '30%',
    marginTop: 20,
  },
  h1: {
    fontSize: 20,
    opacity: 0.4,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  h2: {
    fontSize: 20,
    fontWeight: '600',
  },

  logo: {
    marginRight: 10,
    height: 120,
    width: 150,
    left: 80,
  },
  sun: {
    height: 50,
    width: 50,
    top: -20,
  },
});

const Welcome = () => {
  // destructure user object returned from user
  const {
    user: {
      user: {
        givenName,
        familyName,
      },
    },
    setUser,
  } = useContext(UserContext);
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(false);
  }, []);

  const firstName = givenName;
  const lastName = familyName;

  return (
    <Auxiliary>
      <ScrollView>
        <Header style={styles.container}>
          <View style={styles.titles}>
            <Text style={styles.h1}>Good Morning</Text>
            <Text style={{ ...styles.h2, color: '#ffffff' }}>{`${firstName}\n${lastName}`}</Text>
          </View>
          <Image source={require('../assets/yoga.png')} style={styles.logo} />
          <Image source={require('../assets/sun.png')} style={styles.sun} />
        </Header>
        <ChartContainer />
        <MealContainer />
      </ScrollView>
    </Auxiliary>
  );
};

export default Welcome;
