import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const ActiveBarComponent = props => {
    return (
        props.focused ?
            (
                <View style={styles.container}>
                    <Icon name='circle' size={8} color={props.tintColor} style={styles.circle} />
                    <Icon name={props.name} size={25} color={props.tintColor} />
                </View>
            ) :
            (<View style={styles.container}>
                <Icon name={props.name} size={25} color={props.tintColor} />
            </View>)
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 5
    },
    circle: {
        position: 'absolute',
        top: -10
    }
});

export default ActiveBarComponent;
