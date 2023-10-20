import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { ZegoUIKitPrebuiltLiveStreamingFloatingMinimizedView } from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn';
import BottomTabNavigator from './routes/BottomTabNavigator';
import { LiveIDProvider } from './LiveIDContext';
import AppNavigation from './AppNavigation';

export default function App() {
    
    return (
        <LiveIDProvider>
            <NavigationContainer>
                <AppNavigation/>
                <ZegoUIKitPrebuiltLiveStreamingFloatingMinimizedView />
            </NavigationContainer>
        </LiveIDProvider>
    );
}
