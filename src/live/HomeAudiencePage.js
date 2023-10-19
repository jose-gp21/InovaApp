import React, { useState, useContext } from 'react';
import { View, TextInput, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LiveIDContext } from './../LiveIDContext'; // Importe seu contexto aqui
import { COLORS, SIZES } from '../../assets/constants/index';
import LinearGradient from 'react-native-linear-gradient';

export default function HomeAudiencePage() {
  const navigation = useNavigation();
  const { activeLiveIDs } = useContext(LiveIDContext);
  const [liveID, setLiveID] = useState('');

  const onJoinPress = () => {
    if (liveID) {
      // Verifique se o ID da live está ativo
      if (activeLiveIDs.includes(liveID)) {
        navigation.navigate('AudiencePage', {
          userID: String(Math.floor(Math.random() * 100000)),
          userName: "User_" + String(Math.floor(Math.random() * 100000)),
          liveID: liveID,
        });
      } else {
        Alert.alert("Erro", "O ID da live inserido não está ativo no momento.");
      }
    } else {
      Alert.alert("Erro", "Por favor, insira um ID de live válido.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Insira o ID da live para assistir:</Text>
      <TextInput
        style={styles.input}
        placeholder="ID da live"
        value={liveID}
        onChangeText={setLiveID}
        placeholderTextColor={COLORS.gray}
      />
      <TouchableOpacity style={styles.sendButton} onPress={onJoinPress}>
        <LinearGradient
          colors={['#FF5757', '#8C52FF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientBtn}
        >
          <Text style={styles.gradientText}>Ir para live</Text>
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
  title: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    marginBottom: SIZES.medium,
    color: COLORS.black,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: COLORS.gray,
    borderWidth: 1,
    marginBottom: SIZES.medium,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.small,
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
  },
});