import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    backgroundColor: '#0db5ba',
  },
  text: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

const Card = (props) => {
  // if a function is passed to the card, execute it as well
  const navigateAndExecuteFunction = () => {
    if (props.signin) {
      props.signin();
    } else {
      props.navigation.navigate(props.href);
    }
  };

  return (
  // inherits parents styles plus it's own, on click changes to given prop
    <TouchableOpacity
      style={{ ...styles.container, ...props.style }}
      activeOpacity={0.5}
      onPress={() => { navigateAndExecuteFunction(); }}
    >
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};


export default Card;
