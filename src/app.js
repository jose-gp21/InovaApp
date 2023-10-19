import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { ZegoUIKitPrebuiltLiveStreamingFloatingMinimizedView } from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn';
import BottomTabNavigator from './routes/BottomTabNavigator';
import { LiveIDProvider } from './LiveIDContext';
import AppNavigation from './AppNavigation';

export default function App() {
    // Estado e funções dentro do componente funcional
    const [activeLiveIDs, setActiveLiveIDs] = useState([]);

    const addLiveID = (id) => {
        setActiveLiveIDs(prevIDs => [...prevIDs, id]);
        console.log("Após adicionar liveID:", activeLiveIDs);
    }

    const removeLiveID = (id) => {
        setActiveLiveIDs(prevIDs => prevIDs.filter(liveID => liveID !== id));
        console.log("Após remover liveID:", activeLiveIDs);
    }

    return (
        <LiveIDProvider>
            <NavigationContainer>
                <AppNavigation/>
                <ZegoUIKitPrebuiltLiveStreamingFloatingMinimizedView />
            </NavigationContainer>
        </LiveIDProvider>
    );
}
