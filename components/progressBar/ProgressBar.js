import * as React from 'react';
import { Text, View } from 'react-native'
import ProgressCircle from 'react-native-progress-circle';


const Progress = props => {

    return (
        <View>
            <ProgressCircle
                percent={props.percent}
                radius={40}
                borderWidth={4}
                color="#3399FF"
                shadowColor="#999"
                bgColor="#fff"
            >
                <Text style={{ fontSize: 18 }}>{props.percent}%</Text>
            </ProgressCircle>
            <Text style={{ fontSize: 18 }}>{props.label}</Text>
        </View>
    )
};

export default Progress;