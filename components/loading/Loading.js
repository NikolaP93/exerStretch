import React from 'react';
import {
  ActivityIndicator, StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Loading = () => (
  <ActivityIndicator size="large" color="#0000ff" style={styles.container} />
);


export default Loading;
