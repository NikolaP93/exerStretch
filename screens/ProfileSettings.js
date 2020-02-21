import React, { useContext } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Auxiliary from '../hoc/Auxiliary';
import firebase from 'firebase';
import Card from '../components/Card';
import { UserContext } from '../UserContext';
import { LoadingContext } from '../LoadingContext';



const ProfileSettings = props => {

    const { user } = useContext(UserContext);
    const { loading, setLoading } = useContext(LoadingContext)

    const logout = async () => {
        setLoading(true)
        await firebase.auth().signOut();
    }


    const data = [
        {
            id: 'Edit Profile',
            title: 'Edit Profile',
            iconTitle: 'user'
        },
        {
            id: 'Exercise Packs',
            title: 'Exercise Packs',
            iconTitle: 'archive'
        },
        {
            id: 'Reminder',
            title: 'Reminder',
            iconTitle: 'bell'
        },
        {
            id: 'Sound',
            title: 'Sound',
            iconTitle: 'music'
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
            passedFunction: logout,
            href: 'Account'
        },

    ]

    return (
        <Auxiliary style={styles.container}>
            <View style={styles.itemsContainer}>
                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                        <Card
                            id={item.id}
                            navigation={props.navigation}
                            href={item.href ? item.href : 'Welcome'}
                            style={styles.item}
                            title={item.title}
                            iconTitle={item.iconTitle}
                            passedFunction={item.passedFunction}
                        ></Card>}
                />
            </View>
        </Auxiliary>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#ffffff'
    },
    itemsContainer: {
        marginTop: '10%',
    },
    item: {
        backgroundColor: '#ffffff',
        alignItems: 'flex-start',
        marginTop: 30,
        height: 40
    },
    icon: {
        paddingHorizontal: 30
    }
});

export default ProfileSettings
