import React from 'react';
import { StyleSheet } from 'react-native';
import Auxiliary from '../../hoc/Auxiliary';
import Colors from '../../constants/Colors';

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
        backgroundColor: Colors.primary,
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30
    }
})

export default Header;