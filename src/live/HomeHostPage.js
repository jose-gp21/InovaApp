import React, { useEffect, useState, useContext } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LiveIDContext } from './../LiveIDContext';
import { COLORS, SIZES } from '../../assets/constants/index';
import LinearGradient from 'react-native-linear-gradient';


export default function HomeHostPage(props) {
    const navigation = useNavigation();
    const { activeLiveIDs, addLiveID } = useContext(LiveIDContext);
    const [userID, setUserID] = useState('');
    const [liveID, setLiveID] = useState('');

    useEffect(() => {
        let newLiveID;
        do {
            newLiveID = String(Math.floor(Math.random() * 10000));
        } while (activeLiveIDs.includes(newLiveID));
        
        setUserID(String(Math.floor(Math.random() * 100000)));
        setLiveID(newLiveID);
    }, []);

    const insets = useSafeAreaInsets();

    const onJoinPress = () => {
        addLiveID(liveID);  // Adicione o liveID à lista
        navigation.navigate('HostPage', {
            userID: userID,
            userName: userID,
            liveID: liveID,
        });
    }

    return (
        <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
            <Text style={styles.userID}>O seu ID de usuário é {userID}</Text>
            <Text style={styles.liveID}>Escolha seu Live ID:</Text>
            <TextInput
                placeholder="Entre com um id, por exemplo: 1234"
                style={[styles.input]}
                onChangeText={text => setLiveID(text.replace(/[^0-9A-Za-z_]/g, ''))}
                maxLength={4}
                value={liveID}
                placeholderTextColor={COLORS.gray}
            />
            <TouchableOpacity style={styles.sendButton} onPress={onJoinPress}>
                <LinearGradient
                    colors={['#FF5757', '#8C52FF']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradientBtn}
                >
                    <Text style={styles.gradientText}>Start a live</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    userID: {
        fontSize: SIZES.xLarge,
        fontWeight: '900',
        color: COLORS.black,
        marginBottom: SIZES.medium,
    },
    liveID: {
        fontWeight: '900',
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
        marginBottom: SIZES.small,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: COLORS.gray,
        borderWidth: 1,
        marginBottom: SIZES.medium,
        paddingHorizontal: SIZES.small,
        borderRadius: SIZES.small,
        color: COLORS.primary
    },
    gradientBtn: {
        borderRadius: SIZES.small,
        paddingHorizontal: SIZES.medium,
    },
    gradientText: {
        fontWeight: '900',
        color: COLORS.white,
        textAlign: 'center',
        padding: SIZES.medium,
        fontSize: SIZES.large
    },
    sendButton: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});