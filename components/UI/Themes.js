import Colors from '../../constants/Colors';

export const theme = {
    primary: {
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
        }
    },
    secondary: {
        Button: {
            containerStyle: {
                marginBottom: 35
            },
            titleStyle: {
                color: '#000000',
                fontWeight: '100',
            },
            buttonStyle: {
                justifyContent: 'flex-start',
                width: 350,
                height: 100
            },
            iconContainerStyle: {
                marginRight: '25%'
            },
            icon: {
                color: '#000000'
            }
        },
        Card: {
            containerStyle: {
                width: 330,
                height: 100,
                justifyContent: 'center',
                position: 'relative'
            }
        },
        Icon: {
            containerStyle: {
                position: 'absolute',
                top: '25%',
            }
        },
    },
    transparent: {
        Button: {
            containerStyle: {
                backgroundColor: '#ffffff',
                marginTop: 30,
            },
            buttonStyle: {
                justifyContent: 'flex-start',
                width: 350,
                backgroundColor: '#ffffff'
            },
            titleStyle: {
                color: '#000000',
                fontWeight: 'bold',
                fontSize: 20,
            },
            iconContainerStyle: {
                marginRight: 50
            },
        }

    }
}

