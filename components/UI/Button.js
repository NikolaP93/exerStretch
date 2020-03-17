import React from 'react';
import { ThemeProvider, Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';


const theme = {
    Button: {
        containerStyle: {
            width: 350,
            height: 50,
            marginVertical: 10,
            alignItems: 'flex-start',
        },
        titleStyle: {
            color: '#000000',
            fontWeight: 'bold',
            fontSize: 20,
        },
        buttonStyle: {
            backgroundColor: Colors.primary,
            width: '100%',

        }
    },
};


const ThemedButton = ({ title, onPress, containerStyle, iconTitle, iconContainerStyle, buttonStyle }) => (
    <ThemeProvider theme={theme}>
        <TouchableOpacity activeOpacity={0.5}>
            <Button title={title} onPress={onPress}
                buttonStyle={{ ...theme.Button.buttonStyle,...buttonStyle}}
                containerStyle={{ ...theme.Button.containerStyle, ...containerStyle, }}
                icon={
                    <Icon
                        name={iconTitle}
                        size={25}
                        color={Colors.primary}
                        style={iconContainerStyle}
                    />
                } />
        </TouchableOpacity>
    </ThemeProvider>
);

export default ThemedButton;
