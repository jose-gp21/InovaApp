import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeHostPage from "../../live/HomeHostPage";
import HostPage from "../../live/HostPage";


const Stack = createNativeStackNavigator();

export default function HostNavigation(props) {
    return (
        <Stack.Navigator initialRouteName="HomeHostPage">
            <Stack.Screen options={{headerShown: false}} headerMode="none" name="HomeHostPage" component={HomeHostPage} />
            <Stack.Screen options={{headerShown: false}} name="HostPage" component={HostPage} />
        </Stack.Navigator>
    );
}