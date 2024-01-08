import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import LoginSVG from '../../../../assets/images/misc/login.svg';
import GoogleSVG from '../../../../assets/images/misc/google.svg';
import FacebookSVG from '../../../../assets/images/misc/facebook.svg';
import Apple from '../../../../assets/images/misc/apple.svg';
import InputField from './Components/InputField';
import CustomButton from './Components/CustomButton';
import axios from 'axios';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Email obrigatório'),
  password: Yup.string()
    .required('Senha obrigatória')
    .min(8, 'A senha precisa conter 8 caracteres'),
});

const Login = ({ navigation }) => {
  const [loader, setLoader] = useState(false);

  const login = async (values, actions) => {
    setLoader(true);
    try {
      const endpoint = "http://localhost:3000/api/login";
      const response = await axios.post(endpoint, values);
      if (response.status === 200) {
        // Sucesso! Fazer algo com response.data
        setResponseData(response.data);
        // Navegar para a próxima tela se necessário
        // navigation.navigate('NextScreen');
      } else {
        // Tratar erros de resposta que não sejam de lançamento de exceção
        Alert.alert("Erro", "Credenciais inválidas", [{ text: "OK" }]);
      }
    } catch (error) {
      // Tratar erros de rede ou erros lançados pelo servidor
      Alert.alert("Erro", error.message, [{ text: "OK" }]);
    } finally {
      // Desligar o loader e indicador de submissão em qualquer caso
      setLoader(false);
      actions.setSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{alignItems: 'center'}}>
            <LoginSVG
            height={300}
            width={300}
            style={{transform: [{rotate: '-5deg'}]}}
          />
        </View>

        <Text
          style={{
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Login
        </Text>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={login}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            setFieldTouched,
            touched,
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
                label={isSubmitting ? 'Entrando...' : 'Entrar'}
                onPress={handleSubmit}
                loader={isSubmitting}
              />
            </>
          )}
        </Formik>
        <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
          Ou, login com ...
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <TouchableOpacity
            onPress={() => {}}
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
            onPress={() => {}}
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
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <Apple height={24} width={24} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>Ainda não possui uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Registrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;