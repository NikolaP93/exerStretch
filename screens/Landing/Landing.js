import React from 'react';
import {
  View, Text, Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';
import styles from './styles';
import Auxiliary from '../../hoc/Auxiliary';
import ThemedButton from '../../components/UI/Button';

const Landing = ({ navigation }) => (
  <Auxiliary style={styles.container}>
    <LinearGradient
      colors={['#C8C8C8', '#FFFFFF']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 1 }}
      end={{ x: 0.2, y: 1 }}
    >
      <View style={styles.textContainer}>
        <Text style={styles.h1}>
          <Text style={{ color: Colors.primary }}>Exer</Text>
          <Text>stretch</Text>
        </Text>
        <Text style={styles.h2}>Welcome to our Club</Text>
        <Text style={styles.h3}>
          We need some information to make a perfect workout experience for you.
        </Text>
        <View>
        <ThemedButton
            title="Start"
            onPress={() => navigation.navigate('Account')}
          />
          
        </View>

        <Image source={require('../../assets/yoga.png')} style={styles.logo} />
      </View>
    </LinearGradient>
  </Auxiliary>
);

export default Landing;
