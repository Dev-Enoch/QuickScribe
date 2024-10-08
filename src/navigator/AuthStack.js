import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/Auth/WelcomeScreen';
import AddScreen from '../screens/Auth/AddScreen';
import MainScreen from '../screens/Auth/MainScreen';
import ShowScreen from '../screens/Auth/ShowScreen';
import ThanksScreen from '../screens/Auth/ThanksScreen';

const AuthStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="Add" component={AddScreen} />
            <Stack.Screen name="Show" component={ShowScreen} />
            <Stack.Screen name="Thanks" component={ThanksScreen} />
        </Stack.Navigator>
    );
}
    ;
export default AuthStack;

const styles = StyleSheet.create({})