import React, { useContext, useEffect, useState } from 'react';
import {
  View, Text, Image, ScrollView,
} from 'react-native';
import Header from '../../components/header/Header';
import ChartContainer from '../../containers/ChartContainer/ChartContainer';
import MealContainer from '../../containers/MealContainer/MealContainer';
import Auxiliary from '../../hoc/Auxiliary';
import { UserContext } from '../../Contexts/UserContext';
import { LoadingContext } from '../../Contexts/LoadingContext';
import styles from './styles';

const Welcome = () => {
  // destructure user object returned from user
  const { state, dispatch } = useContext(UserContext);

  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    console.log('use effect')
    console.log(state.name)
    if (state.name) {
      setLoading(false);
    }
  }, [state]);

  return (
    <Auxiliary>
      <ScrollView>
        <Header style={styles.container}>
          <View style={styles.titles}>
            <Text style={styles.h1}>Good Morning</Text>
            <Text style={{ ...styles.h2 }}>{state.name}</Text>
          </View>
          <Image source={require('../../assets/yoga.png')} style={styles.logo} />
          <Image source={require('../../assets/sun.png')} style={styles.sun} />
        </Header>
        <ChartContainer />
        <MealContainer />
      </ScrollView>
    </Auxiliary>
  );
};


export default Welcome;
