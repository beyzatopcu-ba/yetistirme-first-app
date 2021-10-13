import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = props => {

    const nav = useNavigation();

    const onPress_GoToProfile = () => {
        nav.navigate('profile-screen');
    }

    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgreen'}}>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={onPress_GoToProfile}>
                <Text>Profile Git</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;
