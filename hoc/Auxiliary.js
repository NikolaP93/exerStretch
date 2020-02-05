import React from 'react';
import { View } from 'react-native';

const Auxiliary = props => {
    return (
        <View style={{...props.style}}>{props.children}</View>
    )
}

export default Auxiliary;