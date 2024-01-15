import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Alert, StyleSheet, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import LoginSVG from '../../../../assets/images/misc/login.svg';
import GoogleSVG from '../../../../assets/images/misc/google.svg';
import FacebookSVG from '../../../../assets/images/misc/facebook.svg';
import AppleSVG from '../../../../assets/images/misc/apple.svg'; // Renomeado para AppleSVG
import InputField from './Components/InputField';
import CustomButton from './Components/CustomButton';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Email obrigatório'),
  password: Yup.string()
    .required('Senha obrigatória')
    .min(8, 'A senha precisa conter 8 caracteres'),
});

const Login = ({ navigation }) => {
  const [isSubmiting, setSubmitting] = useState(false);
  const [responseData, setResponseData] = useState(null)

    const login = async (values, actions) => {
      console.log(values)
      try {

        const endpoint = "http://10.0.2.2:3000/api/auth/login";

        const response = await axios.post(endpoint, values);

        if (response.status === 200) {
          
          actions.setSubmitting(false)

          setResponseData(response.data)

          await AsyncStorage.setItem(`user${responseData._id}`, JSON.stringify(responseData))

          await AsyncStorage.setItem('id', JSON.stringify(responseData._id))

          navigation.replace("BottomTabBar")

        } else {

          Alert.alert("Erro", "Credenciais inválidas", [{ text: "OK" }]);

        }
      } catch (error) {

        Alert.alert("Erro", error.message, [{ text: "OK" }]);

      } finally {

        actions.setSubmitting(false);

      }
    };
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <LoginSVG
            height={300}
            width={300}
            style={styles.loginImage}
          />
        </View>

        <Text style={styles.loginText}>Login</Text>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={(values, actions) => login(values, actions)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldTouched,
            isSubmitting,
          }) => (
            <>
              <InputField
                label={'Insira seu email'}
                icon={
                  <MaterialIcons
                    name="alternate-email"
                    size={20}
                    color="#666"
                    style={{ marginRight: 5 }}
                  />
                }
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email', true)}
                value={values.email}
                errorMessage={touched.email && errors.email}
              />

              <InputField
                label={'Insira sua senha'}
                icon={
                  <Feather
                    name="lock"
                    size={20}
                    color="#666"
                    style={{ marginRight: 5 }}
                  />
                }
                inputType="password"
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password', true)}
                value={values.password}
                errorMessage={touched.password && errors.password}
              />

              <CustomButton
                label={isSubmitting ? <ActivityIndicator color={"white"} /> :'Entrar'}
                onPress={handleSubmit}
              />
            </>
            )}
        </Formik>

        <Text style={styles.alternativeLoginText}>Ou, login com ...</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <TouchableOpacity
            onPress={() => {console.log('Login com google')}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <GoogleSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {console.log('Login com Facebook')}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <FacebookSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {console.log('Login com Apple')}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <AppleSVG height={24} width={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.registerContainer}>
          <Text>Ainda não possui uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}> Registrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    paddingHorizontal: 25,
  },
  imageContainer: {
    alignItems: 'center',
  },
  loginImage: {
    transform: [{rotate: '-5deg'}],
  },
  loginText: {
    fontSize: 28,
    fontWeight: '500',
    color: '#333',
    marginBottom: 30,
  },
  alternativeLoginText: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  registerText: {
    color: '#AD40AF',
    fontWeight: '700',
  },
  // ... outros estilos
});

export default Login;
