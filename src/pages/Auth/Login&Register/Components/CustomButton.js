import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { COLORS } from '../../../../../assets/constants';

export default function CustomButton({label, onPress, loader}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: COLORS.primary,
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
      }}>
      {loader ? (
        <ActivityIndicator/>
      ):(
        <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 16,
          color: '#fff',
        }}>
        {label}
      </Text>
      )}
    </TouchableOpacity>
  );
}