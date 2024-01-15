import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  onChangeText,
  onBlur,
  value,
  errorMessage,
  fieldButtonLabel,
  fieldButtonFunction,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}>
      {icon}
      <TextInput
        placeholder={label}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        secureTextEntry={inputType === 'password'}
        style={{ flex: 1, paddingVertical: 0 }}
      />
      {errorMessage && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{ color: '#AD40AF', fontWeight: '700' }}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}
