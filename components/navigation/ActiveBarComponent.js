import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 5,
  },
  circle: {
    position: 'absolute',
    top: -10,
  },
});

const ActiveBarComponent = ({ focused, tintColor, name }) => (
  focused
    ? (
      <View style={styles.container}>
        <Icon name="circle" size={8} color={tintColor} style={styles.circle} />
        <Icon name={name} size={25} color={tintColor} />
      </View>
    )
    : (
      <View style={styles.container}>
        <Icon name={name} size={25} color={tintColor} />
      </View>
    )
);

ActiveBarComponent.defaultProps = {
  focused: false,
  tintColor: null,
  name: null,
};

ActiveBarComponent.propTypes = {
  focused: PropTypes.bool,
  tintColor: PropTypes.string,
  name: PropTypes.string,
};


export default ActiveBarComponent;
