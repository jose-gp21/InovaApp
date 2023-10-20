import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeAudiencePage from "../../live/HomeAudiencePage";
import AudiencePage from "../../live/AudiencePage";
import Feed from "../../pages/botttomTabPages/Feed";

const Stack = createNativeStackNavigator();

export default function AudienceNavigation(props) {
    return (
        <Stack.Navigator initialRouteName="Feed">
            <Stack.Screen options={{headerShown: false}} name="Feed" component={Feed}/>
            <Stack.Screen options={{headerShown: false}} headerMode="none" name="HomeAudiencePage" component={HomeAudiencePage} />
            <Stack.Screen options={{headerShown: false}} name="AudiencePage" component={AudiencePage} />
        </Stack.Navigator>
    );
}