import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Auxiliary from '../../hoc/Auxiliary';


const Header = props => {
    return (
        <Auxiliary style={{ ...styles.container, ...props.style }}>
            {props.children}
        </Auxiliary>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 225,
        backgroundColor: '#0db5ba',
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30
    }
})

export default Header;