import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    backgroundColor: Colors.primary,
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

Card.defaultProps = {
  signin: null,
  navigation: null,
  style: null,
  title: 'Card',
  href: 'Account',
};

Card.propTypes = {
  signin: PropTypes.func,
  navigation: PropTypes.object,
  style: PropTypes.object,
  title: PropTypes.string,
  href: PropTypes.string,
};

export default Card;
