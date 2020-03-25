import React, { useContext } from 'react';

import { Button, ThemeProvider } from 'react-native-elements';
import styles from './styles';
import { UserContext } from '../../Contexts/UserContext';
import { LoadingContext } from '../../Contexts/LoadingContext';
import Auxiliary from '../../hoc/Auxiliary';
import { signInWithGoogleAsync } from '../GoogleSignIn/GoogleAuth';
import { theme } from '../../components/UI/Themes';

const Account = ({ navigation }) => {
  const { state, dispatch } = useContext(UserContext);
  const { setLoading } = useContext(LoadingContext);


  // logs into firebase with google credentials and passes the user data into the context
  const googleLogin = async () => {
    setLoading(true);
    const result = await signInWithGoogleAsync();
    if (result && result.type === 'success') {
      navigation.navigate('Welcome');
    } else {
      navigation.navigate('Account');
    }
    setLoading(false);
  };

  const content = (
    <ThemeProvider theme={theme.primary}>
      <Button
        title="Google Login"
        onPress={googleLogin}
      />
    </ThemeProvider>
  );

  return (
    <Auxiliary style={styles.container}>
      {content}
    </Auxiliary>
  );
};

export default Account;
