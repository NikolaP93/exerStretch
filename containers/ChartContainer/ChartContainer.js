import React from 'react';
import { View, Text } from 'react-native';
import ProgressBar from '../../components/progressBar/ProgressBar';
import styles from './style';

const ChartContainer = () => {
  const data = [
    {
      id: 1,
      percent: 84,
      label: 'Cal Intake',
      color: 'red',
    },
    {
      id: 2,
      percent: 40,
      label: 'Burn',
      color: 'green',
    },
    {
      id: 3,
      percent: 60,
      label: 'Step',
      color: 'blue',
    },
  ];


  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text>Yesterday</Text>
        <Text>Today</Text>
        <Text>Tomorrow</Text>
      </View>
      <View style={styles.contentContainer}>
        {data.map((item) => <ProgressBar percent={item.percent} color={item.color} key={item.id} label={item.label} />)}
      </View>
    </View>
  );
};


export default ChartContainer;
