import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';

import Auxiliary from '../../hoc/Auxiliary';
import ThemedButton from '../../components/UI/Button';

import { signOutWithGoogleAsync } from '../GoogleSignIn/GoogleAuth';

const ProfileSettings = ({ navigation }) => {
  const data = [
    {
      id: 'Edit Profile',
      title: 'Edit Profile',
      iconTitle: 'user',
    },
    {
      id: 'Exercise Packs',
      title: 'Exercise Packs',
      iconTitle: 'archive',
    },
    {
      id: 'Reminder',
      title: 'Reminder',
      iconTitle: 'bell',
    },
    {
      id: 'Sound',
      title: 'Sound',
      iconTitle: 'music',
    },
    {
      id: 'About',
      title: 'About',
      iconTitle: 'info',
    },
    {
      id: 'Logout',
      title: 'Logout',
      iconTitle: 'sign-out',
      passedFunction: signOutWithGoogleAsync,
      href: 'Account',
    },

  ];

  return (
    <Auxiliary style={styles.container}>
      <View style={styles.itemsContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ThemedButton
            title={item.title}
            iconTitle={item.iconTitle}
            containerStyle={styles.containerStyle}
            buttonStyle={styles.buttonStyle}
            iconContainerStyle={styles.icon}
            />
          )}
        />
      </View>
    </Auxiliary>
  );
};

export default ProfileSettings;
