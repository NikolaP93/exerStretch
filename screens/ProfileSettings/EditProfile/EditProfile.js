import React, { useContext } from 'react';
import { View, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import firebase from 'firebase';
import { UserContext } from '../../../Contexts/UserContext';
import styles from './styles';
import UserForm from '../../../components/UI/Form/Form';

const EditProfile = () => {
  const { state, dispatch } = useContext(UserContext);

  const userID = firebase.auth().currentUser.uid;

  // on submit, update context and overwrite changed data
  const handleSubmit = (values) => {
    dispatch({ type: 'UPDATE', payload: values });

    firebase.database().ref(`/users/${userID}`).update({ ...values, name: `${values.givenName} ${values.familyName}` });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <Image
          source={{ uri: state.photoUrl }}
          style={styles.profileImage}
        />
        <UserForm
          initialValues={state}
          handleSubmit={handleSubmit}
        />
      </View>
    </TouchableWithoutFeedback>

  );
};

export default EditProfile;
