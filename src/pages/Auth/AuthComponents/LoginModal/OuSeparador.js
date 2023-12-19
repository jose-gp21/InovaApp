import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// ...

// Componente para renderizar a linha com texto
export default function OrSeparator(){
  return (
    <View style={styles.separatorContainer}>
      <View style={styles.line} />
      <Text style={styles.orText}>ou</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  separatorContainer: {
    flexDirection: 'row', // Alinha os elementos horizontalmente
    alignItems: 'center', // Centraliza verticalmente
    marginVertical: 20, // Espaço vertical para separar do conteúdo acima e abaixo
  },
  line: {
    flex: 1, // Faz com que as linhas se expandam para preencher o espaço disponível
    height: 1, // Altura da linha
    backgroundColor: 'gray', // Cor da linha
  },
  orText: {
    width: 50, // Largura do texto "ou"
    textAlign: 'center', // Centraliza o texto
    color: 'gray', // Cor do texto
  },
  // ... outros estilos que você já tem ...
});