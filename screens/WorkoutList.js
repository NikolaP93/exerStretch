import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Auxiliary from '../hoc/Auxiliary';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#b4c4d4',
  },
});

const WorkoutList = () => (
  <Auxiliary style={styles.container}>
    <Text>WorkoutList page</Text>
  </Auxiliary>
);

export default WorkoutList;
