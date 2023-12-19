import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import GoogleSignInButton from './GoogleButton';
import AppleSignInButton from './AppleButton';
import OrSeparator from './OuSeparador';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SIZES } from '../../../../../assets/constants';

const SignUpModal = ({ isVisible, onClose }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>

        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <AntDesign name="closecircle" size={15} color="black" />
          </TouchableOpacity>

          <Text style={styles.modalTitle}>Cadastre-se para continuar</Text>
          
          <GoogleSignInButton onPress={() => console.log('Sign in with Google')} />

          <AppleSignInButton onPress={() => console.log('Sign in with Apple')} />

          <OrSeparator/>

          <TouchableOpacity style={styles.createAccountButton}>
            <Text style={styles.textButtonCreate}>Criar Conta</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.loginWrapper} onPress={onClose}>
            <Text style={styles.loginText}>Já possui uma conta? </Text>
            <Text style={styles.loginText2}>Faça login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: SIZES.large,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  closeButton: {
    position: 'absolute', 
    top: 5, 
    right: 5, 
    padding: 10, 
  },
  closeIcon: {
    height: 20, 
    width: 20, 
    tintColor: 'black', 
  },

  modalTitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: '900',
    color: "black",
    fontSize:SIZES.large- 2
  },
  button: {
    width: 192,
    height: 48,
    marginBottom: 20,
  },
  createAccountButton: {
    backgroundColor: '#00aeef',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 10,
    
  },
  textButtonCreate:{
    color: "white",
    fontSize: SIZES.medium,
    paddingHorizontal: SIZES.small
  },
  loginWrapper:{
    flexDirection: "row"
  },
  loginText: {
    color: 'black',
    marginTop: 15,
  },
  loginText2:{
    color: '#00aeef',
    marginTop: 15,
  }
});

export default SignUpModal;
