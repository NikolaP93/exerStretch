import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Auxiliary from '../../hoc/Auxiliary';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {
        height: 225,
        backgroundColor: Colors.primary,
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30,
    },
});

const Header = ({ children, style }) => (
    <Auxiliary style={{ ...styles.container, ...style }}>
        {children}
    </Auxiliary>
);

Header.defaultProps = {
    children: null,
    style: null
}

Header.propTypes = {
    children: PropTypes.array,
    style: PropTypes.object,
}

export default Header;
