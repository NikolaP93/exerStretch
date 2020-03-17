import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

import Auxiliary from '../../hoc/Auxiliary';


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
