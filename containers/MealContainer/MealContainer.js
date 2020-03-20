import React from 'react';
import { View } from 'react-native';
import { ThemeProvider, Card, Icon, Text } from 'react-native-elements';

import styles from './style';
import { theme } from '../../components/UI/Themes';

const MealContainer = () => {
  const mealData = [
    {
      id: 1,
      title: `Breakfast`,
      color: '#fee1bc',
      iconName: 'cookie'
    },
    {
      id: 2,
      title: 'Lunch',
      color: '#90EE90',
      iconName: 'corn'
    },
    {
      id: 3,
      title: 'Dinner',
      color: '#e6e6fa',
      iconName: 'duck'
    },
  ];

  return (
    <View style={styles.container}>
      <ThemeProvider theme={theme.secondary}>
        {mealData.map((item) =>
          <Card
            key={item.id}
            containerStyle={{ backgroundColor: item.color}}
          >
            <Icon
              name={item.iconName}
              type='material-community'
              size={25}
            />
            <View style={styles.titleContainer}>
              <Text>Breakfast</Text>
              <Text>Salad</Text>
            </View>
          </Card>
        )}
      </ThemeProvider>

    </View>
  );
};


export default MealContainer;
