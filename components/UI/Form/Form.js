import React, { useContext } from 'react';
import { View, Image, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { Formik } from 'formik';
import { compose } from 'recompose';
import {
    handleTextInput,
    withNextInputAutoFocusInput,
    withNextInputAutoFocusForm,
} from 'react-native-formik';

const MyInput = compose(
    handleTextInput,
    withNextInputAutoFocusInput,
)(TextInput);

const Form = withNextInputAutoFocusForm(View);

const UserForm = ({ initialValues, handleSubmit }) => {

    return (
        <View>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    handleSubmit(values);
                }}
            >
                {({
                    handleChange, handleBlur, handleSubmit, values,
                }) => (
                        <Form>
                            <MyInput
                                label="Email"
                                name="email"
                                onChange={handleChange('email')}
                            />
                            <MyInput
                                label="Email"
                                name="familyName"
                                onChange={handleChange('familyName')}
                            />
                            <MyInput
                                label="Email"
                                name="givenName"
                                onChange={handleChange('givenName')}
                            />
                            <MyInput
                                label="Age"
                                name="age"
                                keyboardType="numeric"
                                placeholder="Enter age"
                                onChange={handleChange('age')}
                            />
                            <MyInput
                                label="Height"
                                name="height"
                                keyboardType="numeric"
                                placeholder="Enter height"
                                onChange={handleChange('height')}
                            />
                            <MyInput
                                label="Weight"
                                name="weight"
                                keyboardType="numeric"
                                placeholder="Enter weight"
                                onChange={handleChange('weight')}
                            />
                            <Button title="Submit" onPress={handleSubmit} />
                        </Form>
                    )}
            </Formik>
        </View>
    );
};

export default UserForm;
