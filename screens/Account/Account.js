import React, { useEffect, useContext } from 'react';
import firebase from 'firebase';

import styles from './styles';
import { UserContext } from '../../Contexts/UserContext';
import { LoadingContext } from '../../Contexts/LoadingContext';
import Auxiliary from '../../hoc/Auxiliary';
import ThemedButton from '../../components/UI/Button';
import { signInWithGoogleAsync } from '../GoogleSignIn/GoogleAuth';

const Account = ({ navigation }) => {
  const { setUser } = useContext(UserContext);
  const { setLoading } = useContext(LoadingContext);


  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        firebase.auth().signOut();
      }
    });
    setLoading(false);
  }, [setLoading]);

  const googleLogin = async () => {
    setLoading(true);
    const result = await signInWithGoogleAsync();
    if (result && result.type === 'success') {
      setUser(result);
      navigation.navigate('Welcome');
    } else {
      navigation.navigate('Account');
    }
    setLoading(false);
  };

  const content = (
    <ThemedButton
      title="Google Login"
      onPress={googleLogin}
    />
  );

  return (
    <Auxiliary style={styles.container}>
      {content}
    </Auxiliary>
  );
};

export default Account;
