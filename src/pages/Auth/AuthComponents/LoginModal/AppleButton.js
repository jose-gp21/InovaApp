import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

// Componente de botão personalizado para continuar com a Apple
const AppleSignInButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={()=> onPress}>
      <Image
        source={require('../../../../../assets/images/apple-icon.png')} // Substitua pelo caminho correto do ícone
        style={styles.buttonIcon}
      />
      <Text style={styles.buttonText}>Continuar com Apple</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row', // Alinha ícone e texto horizontalmente
    alignItems: 'center', // Centraliza verticalmente
    backgroundColor: '#FFFFFF', // Fundo branco para o botão
    borderWidth: 0.5,
    borderColor: '#000000', // Borda preta para o botão
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20, // Borda arredondada
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowColor: '#000000',
    shadowOffset: { height: 1, width: 0 },
    elevation: 2, // Sombra para Android
    margin: 10
  },
  buttonIcon: {
    width: 20, // Largura do ícone
    height: 20, // Altura do ícone
    marginRight: 10, // Margem entre o ícone e o texto
  },
  buttonText: {
    fontSize: 16, // Tamanho da fonte
    color: '#000000', // Cor do texto
  },
});

export default AppleSignInButton;
