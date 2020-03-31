import React from 'react';
import { View, } from 'react-native';
import { Input, Button, ThemeProvider, Text } from 'react-native-elements';
import { Formik } from 'formik';
import { compose } from 'recompose';
import {
    handleTextInput,
    withNextInputAutoFocusInput,
    withNextInputAutoFocusForm,
} from 'react-native-formik';
import { theme } from '../Themes';

const MyInput = compose(
    handleTextInput,
    withNextInputAutoFocusInput,
)(Input);

const Form = withNextInputAutoFocusForm(View);

const UserForm = ({ initialValues, handleSubmit }) => {

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                handleSubmit(values);
            }}
        >
            {({
                handleChange, handleBlur, handleSubmit, values,
            }) => (
                    <Form style={{ alignItems: 'center' }}>
                        <ThemeProvider theme={theme.primary}>
                            <MyInput
                                label="Email"
                                name="email"
                                onChange={handleChange('email')}
                            />
                            <MyInput
                                label="Last Name"
                                name="familyName"
                                onChange={handleChange('familyName')}
                            />
                            <MyInput
                                label="First Name"
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
                        </ThemeProvider>
                    </Form>
                )}
        </Formik>

    );
};

export default UserForm;
