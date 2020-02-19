import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    backgroundColor: Colors.primary,
    height: 50
  },
  text: {
    textTransform: 'capitalize',
    fontSize: 20,
  },
  withIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    paddingVertical: 10,
    width: 45,
    height: 45,
    paddingHorizontal: 5,
    borderRadius: 30,
    textAlign: 'center',
    backgroundColor: '#eaf1f8',
    marginRight: 10
  }
});

const Card = (props) => {
  // if a function is passed to the card, execute it as well
  const navigateAndExecuteFunction = () => {
    if (props.passedFunction) {
      props.passedFunction();
      props.navigation.navigate(props.href);
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
      {props.iconTitle ? <View style={styles.withIcon}>
        <Icon name={props.iconTitle} size={25} color={Colors.primary} style={styles.icon} />
        <Text style={styles.text}>{props.title}</Text>
      </View>
        :
        <View>
          <Text style={[styles.text, { fontWeight: 'bold' }]}>{props.title}</Text>
        </View>}
    </TouchableOpacity>
  );
};

Card.defaultProps = {
  passedFunction: null,
  navigation: null,
  style: null,
  title: 'Card',
  href: 'Account',
};

Card.propTypes = {
  passedFunction: PropTypes.func,
  navigation: PropTypes.object,
  style: PropTypes.object,
  title: PropTypes.string,
  href: PropTypes.string,
};

export default Card;
