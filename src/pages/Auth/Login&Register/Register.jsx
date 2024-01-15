import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import DatePicker from 'react-native-date-picker';

import InputField from './Components/InputField';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import RegistrationSVG from '../../../../assets/images/misc/registration.svg';
import GoogleSVG from '../../../../assets/images/misc/google.svg';
import FacebookSVG from '../../../../assets/images/misc/facebook.svg';
import Apple from '../../../../assets/images/misc/apple.svg';
import CustomButton from './Components/CustomButton';
import Feather from 'react-native-vector-icons/Feather';

import { Formik } from 'formik';
import * as Yup from 'yup';



const RegisterSchema = Yup.object().shape({
  nomeCompleto: Yup.string().required('Nome completo obrigatório'),
  email: Yup.string().email('Email inválido').required('Email obrigatório'),
  senha: Yup.string().required('Senha obrigatória').min(8, 'A senha precisa conter pelo menos 8 caracteres'),
  confirmarSenha: Yup.string().oneOf([Yup.ref('senha'), null], 'As senhas devem corresponder'),
  localizacao: Yup.string().required('Localização obrigatória'),
});

const Register = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState('Selecione a Data de Nascimento');
  const [loader, setLoader] = useState(false)

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Janeiro é 0!
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  };

  const handleSubmit = (values) => {
    console.log(values);
    // Lógica de envio dos dados
  };

  return (

    

    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <RegistrationSVG
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
          Cadastro
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

        <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
          Ou, registrar com email ...
        </Text>

        <Formik
          initialValues={{ nomeCompleto: '', email: '', senha: '', confirmarSenha: '', localizacao: '' }}
          validationSchema={RegisterSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
           <>
           <InputField label="Nome completo"
                       icon={<Ionicons name="person-outline" size={20} color="#666" style={{ marginRight: 5 }} />}
                       onChangeText={handleChange('nomeCompleto')}
                       onBlur={handleBlur('nomeCompleto')}
                       value={values.nomeCompleto}
                       errorMessage={touched.nomeCompleto && errors.nomeCompleto} />

           <InputField label="Seu email"
                       icon={<MaterialIcons name="alternate-email" size={20} color="#666" style={{ marginRight: 5 }} />}
                       keyboardType="email-address"
                       onChangeText={handleChange('email')}
                       onBlur={handleBlur('email')}
                       value={values.email}
                       errorMessage={touched.email && errors.email} />

           <InputField label="Sua senha"
                       icon={<Feather name="lock" size={20} color="#666" style={{ marginRight: 5 }} />}
                       inputType="password"
                       onChangeText={handleChange('senha')}
                       onBlur={handleBlur('senha')}
                       value={values.senha}
                       errorMessage={touched.senha && errors.senha} />

           <InputField label="Confirme a senha"
                       icon={<Feather name="lock" size={20} color="#666" style={{ marginRight: 5 }} />}
                       inputType="password"
                       onChangeText={handleChange('confirmarSenha')}
                       onBlur={handleBlur('confirmarSenha')}
                       value={values.confirmarSenha}
                       errorMessage={touched.confirmarSenha && errors.confirmarSenha} />

           <InputField
                      label="Localização"
                      icon={<Ionicons name="location-outline" size={20} color="#666" style={{ marginRight: 5 }} />}
                      onChangeText={handleChange('localizacao')}
                      onBlur={handleBlur('localizacao')}
                      value={values.localizacao}
                      errorMessage={touched.localizacao && errors.localizacao} />


           <CustomButton label="Registrar" onPress={handleSubmit} />
         </>
          )}
        </Formik>



        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
            
            <Text>Possui uma conta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Fazer login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;