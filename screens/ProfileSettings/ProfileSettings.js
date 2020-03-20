import React, { useEffect, useContext } from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import { Button, ThemeProvider } from 'react-native-elements';
import Auxiliary from '../../hoc/Auxiliary';

import { signOutWithGoogleAsync } from '../GoogleSignIn/GoogleAuth';
import Colors from '../../constants/Colors';
import { theme } from '../../components/UI/Themes';

const ProfileSettings = ({ navigation }) => {


  const signOut = () => {
    signOutWithGoogleAsync();
    navigation.navigate('Account')
  }
  const data = [
    {
      id: 'Edit Profile',
      title: 'Edit Profile',
      iconTitle: 'account-circle',
    },
    {
      id: 'Exercise Packs',
      title: 'Exercise Packs',
      iconTitle: 'archive',
    },
    {
      id: 'Reminder',
      title: 'Reminder',
      iconTitle: 'alarm',
    },
    {
      id: 'Sound',
      title: 'Sound',
      iconTitle: 'library-music',
    },
    {
      id: 'About',
      title: 'About',
      iconTitle: 'info',
    },
    {
      id: 'Logout',
      title: 'Logout',
      iconTitle: 'power-settings-new',
      onPress: signOut,
      href: 'Account',
    },

  ];

  return (
    <Auxiliary style={styles.container}>
      <View style={styles.itemsContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ThemeProvider theme={theme.transparent}>
              <Button
                title={item.title}
                icon={{ name: item.iconTitle, color: Colors.primary }}
                onPress={() => navigation.navigate('EditProfile')}
              />
            </ThemeProvider>

          )}
        />
      </View>
    </Auxiliary>
  );
};

export default ProfileSettings;
