import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import ProgressCircle from 'react-native-progress-circle';


const ProgressBar = props => {

    return (
        <View style={styles.container}>
            <ProgressCircle
                percent={props.percent}
                radius={40}
                borderWidth={4}
                color={props.color}
                shadowColor="#999"
                bgColor="#fff"
            >
                <Text style={{ fontSize: 18 }}>{props.percent}</Text>
            </ProgressCircle>
            <Text style={styles.label}>{props.label}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1
    },
    label: {
        fontSize: 14,
        opacity: 0.5,
        marginBottom: '15%'
    }
})

export default ProgressBar;