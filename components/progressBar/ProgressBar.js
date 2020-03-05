import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
    },
    label: {
        fontSize: 14,
        opacity: 0.5,
        marginBottom: '15%',
    },
});

const ProgressBar = ({ percent, color, label }) => (
    <View style={styles.container}>
        <ProgressCircle
            percent={percent}
            radius={40}
            borderWidth={4}
            color={color}
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 18 }}>{percent}</Text>
        </ProgressCircle>
        <Text style={styles.label}>{label}</Text>
    </View>
);

ProgressBar.defaultProps = {
    percent: 0,
    label: null,
    color: 'red'
}

ProgressBar.propTypes = {
    percent: PropTypes.number,
    label: PropTypes.string,
    color: PropTypes.string
}

export default ProgressBar;
