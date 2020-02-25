import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Card from '../components/Card.js';
import Colors from '../constants/Colors.js';

const MealContainer = props => {

    const mealData = [
        {
            id: 1,
            href: 'Welcome',
            title: 'Breakfast',
            color: 'orange'
        },
        {
            id: 2,
            href: 'Welcome',
            title: 'Lunch'
        },
        {
            id: 3,
            href: 'Welcome',
            title: 'Dinner'
        }
    ]

    return (
        <View style={styles.container}>
            {mealData.map((item) => {
                return <Card title={item.title} key={item.id} href={item.href} style={{ ...styles.card, backgroundColor: item.color ? item.color : Colors.primary}}/>
            })}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    card: {
        height: 70,
    }
});

export default MealContainer;
