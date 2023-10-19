import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ButtonCreateNotFocused({ size }) {
  return (
    <View style={styles.container}>
      <AntDesign name='plus' size={50} color='transparent' />
      <AntDesign name='plus' size={25} color='#B0B0B0' style={styles.smallIcon} />
      <Text style={styles.text}>Criar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',  // Alterado para uma cor mais clara
    width: 55,
    height: 55,
    top: -25,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#B0B0B0',  // Alterado para uma cor mais clara
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [
      { translateX: -12.5 },
      { translateY: -12.5 }
    ]
  },
  text: {
    fontSize: 11,
    marginTop: 22,
    textAlign: 'center',
    color: '#B0B0B0'  // Alterado para uma cor mais clara
  }
});
