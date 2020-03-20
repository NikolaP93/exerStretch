import React, { useContext } from 'react';
import { View, Image, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { UserContext } from '../../../Contexts/UserContext';
import { Formik } from 'formik';
import { compose } from 'recompose';
import {
    handleTextInput,
    withNextInputAutoFocusInput,
    withNextInputAutoFocusForm
} from 'react-native-formik';

const MyInput = compose(
    handleTextInput,
    withNextInputAutoFocusInput
)(TextInput);

const Form = withNextInputAutoFocusForm(View);

const EditProfile = () => {

    const { state, dispatch } = useContext(UserContext);

    // on submit, update context and overwrite changed data
    const handleSubmit = user => {
        dispatch({ type: 'UPDATE', payload: user })
    }

    return (
        <View>
            <Image
                source={{ uri: state.photoUrl }}
                style={{ height: 400, width: '100%', borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}
            />

            <View>
                <Formik
                    initialValues={state}
                    onSubmit={values => {
                        handleSubmit(values);
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <Form>
                            <MyInput
                                label="Email"
                                name="email"
                                onChange={handleChange('email')}
                            />
                            <MyInput
                                label="Email"
                                name="name"
                                onChange={handleChange('name')}
                            />
                            <MyInput
                                label="Age"
                                name="age"
                                keyboardType='numeric'
                                placeholder='Enter age'
                                onChange={handleChange('age')}
                            />
                            <MyInput
                                label="Height"
                                name="height"
                                keyboardType='numeric'
                                placeholder='Enter height'
                                onChange={handleChange('height')}
                            />
                            <MyInput
                                label="Weight"
                                name="weight"
                                keyboardType='numeric'
                                placeholder='Enter weight'
                                onChange={handleChange('weight')}
                            />
                            <Button title="Submit" onPress={handleSubmit} />
                        </Form>
                    )}
                </Formik>
            </View>

        </View>
    )
}

export default EditProfile
