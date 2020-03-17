import React from 'react';
import { View } from 'react-native';
import ThemedButton from '../../components/UI/Button';
import styles from './style';


const MealContainer = () => {
  const mealData = [
    {
      id: 1,
      href: 'Welcome',
      title: 'Breakfast',
    },
    {
      id: 2,
      href: 'Welcome',
      title: 'Lunch',
    },
    {
      id: 3,
      href: 'Welcome',
      title: 'Dinner',
    },
  ];

  return (
    <View style={styles.container}>
      {mealData.map((item) =>
        <ThemedButton
          title={item.title}
          key={item.id}
          buttonStyle={styles.buttonStyle} />)}
    </View>
  );
};


export default MealContainer;
