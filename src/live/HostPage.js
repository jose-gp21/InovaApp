import React, { useRef, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import ZegoUIKitPrebuiltLiveStreaming, {
    HOST_DEFAULT_CONFIG,
    ZegoMenuBarButtonName,
} from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn';
import { LiveIDContext } from './../LiveIDContext';

export default function HostPage(props) {
    const prebuiltRef = useRef();
    const { activeLiveIDs, addLiveID, removeLiveID } = useContext(LiveIDContext);
    const { route } = props;
    const { params } = route;
    const { userID, userName, liveID } = params;
    const randomUserID = String(Math.floor(Math.random() * 100000));

    const startLive = () => {
        console.log('########HostPage onStartLiveButtonPressed');
        
        addLiveID(liveID);  // Adicionar liveID quando o host inicia a transmissão

        console.log("Adicionado liveID:", liveID, "Lista atual:", activeLiveIDs);
      };
  
      const endLive = () => {
        console.log('########HostPage onLiveStreamingEnded');
        removeLiveID(liveID);  // Remover liveID quando o host termina a transmissão
      };

    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltLiveStreaming
                ref={prebuiltRef}
                appID={163126497}
                appSign={'f8bebe6fb64f13bfa0572bf98cd649ec2464e59f0603109dec0a5704ada73979'}
                userID={randomUserID}
                userName={userName}
                liveID={liveID}
                config={{
                    ...HOST_DEFAULT_CONFIG,
                    onStartLiveButtonPressed: startLive,
                    onLiveStreamingEnded: endLive,
                    // ... qualquer outra configuração que você queira adicionar...
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,
    },
    avView: {
        flex: 1,
        width: '100%',
        height: '100%',
        zIndex: 1,
        position: 'absolute',
        right: 0,
        top: 0,
        backgroundColor: 'red'
    },
    ctrlBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginBottom: 50,
        width: '100%',
        height: 50,
        zIndex: 2
    },
    ctrlBtn: {
        flex: 1,
        width: 48,
        height: 48,
        marginLeft: 37 / 2,
        position: 'absolute'
    }
});
