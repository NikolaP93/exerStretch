import React, { useEffect, useContext } from 'react';
import {
  View, Text, Image,
} from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from 'firebase';

import Colors from '../../constants/Colors';
import styles from './styles';
import Auxiliary from '../../hoc/Auxiliary';
import { theme } from '../../components/UI/Themes';
import { LoadingContext } from '../../Contexts/LoadingContext';
import { UserContext } from '../../Contexts/UserContext';

const Landing = ({ navigation }) => {
  console.disableYellowBox = true;

  const { state, dispatch } = useContext(UserContext);
  const { loading, setLoading } = useContext(LoadingContext);

  // observes if the google user is new in the app and if not, dispatches his value to the context
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref(`/users/${user.uid}`).on('value', (snapshot) => {
          dispatch({ type: 'UPDATE', payload: snapshot.val()});
        });
        navigation.navigate('Welcome');
      } else {
        setLoading(false);
      }
    });
  }, []);

  return (
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
            <ThemeProvider theme={theme.primary}>
              <Button
                title="Start"
                onPress={() => navigation.navigate('Account')}
              />
            </ThemeProvider>


          </View>

          <Image source={require('../../assets/yoga.png')} style={styles.logo} />
        </View>
      </LinearGradient>
    </Auxiliary>
  );
};

export default Landing;
