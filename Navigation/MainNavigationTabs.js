import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

const Tabs = createBottomTabNavigator();

const MainNavigation = props => {
    return (
        <NavigationContainer>
            <Tabs.Navigator
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                  }}
            >
                <Tabs.Screen 
                    name="home-screen"
                    component={HomeScreen}
                    options={{
                        title: 'ANASAYFA',
                    }}
                />
                <Tabs.Screen 
                    name="profile-screen"
                    component={ProfileScreen}
                />
            </Tabs.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation;
