import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, ScrollView, Alert, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS, SIZES } from '../../../assets/constants/index';
import SignUpModal from '../Auth/AuthComponents/LoginModal/LoginModal';

const Perfil = ({ navigation }) => {

  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

  const [isSignUpModalVisible, setSignUpModalVisible] = useState(false);
  const openSignUpModal = () => setSignUpModalVisible(true);
  const closeSignUpModal = () => setSignUpModalVisible(false);


  const logout = ()  => {
    Alert.alert(
      "Deslogar",
      "Tem certeza que deseja fazer Logout?",
      [
        {
          text: "Cancelar", onPress: () => console.log("cancel pressed")
        },
        {        
          text: "Continuar", onPress: () => navigation.navigate("Login")
        }
      ],
      {defaultIndex: 1}
    )
  };
  const clearCache = ()  => {
    Alert.alert(
      "Limpar Cache",
      "Tem certeza que deseja continuar?",
      [
        {
          text: "Cancelar", onPress: () => console.log("cancel pressed")
        },
        {        
          text: "Continuar", onPress: () => console.log("continue pressed")
        }
      ],
      {defaultIndex: 1}
    )
  };
  const deleteAccont = ()  => {
    Alert.alert(
      "Deletar conta",
      "Tem certeza que deseja continuar?",
      [
        {
          text: "Cancelar", onPress: () => console.log("cancel pressed")
        },
        {        
          text: "Continuar", onPress: () => navigation.navigate("Cadastro")
        }
      ],
      {defaultIndex: 1}
    )
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={COLORS.gray} />

        <View style={{ width: '100%' }}>
          <Image
            source={require("../../../assets/images/space.jpg")}
            style={styles.cover}
          />
        </View>

        <View style={styles.profileContainer}>
          <Image
            source={require("../../../assets/images/profile.jpeg")}
            style={styles.profile}
          />
          <Text style={styles.name}>
            {userLogin === true ? userData?.name : "Faça Login por favor"}
          </Text>
          {userLogin === false ? (
            <TouchableOpacity onPress={openSignUpModal}>
              <View style={styles.loginBtn}>
                <Text style={styles.menuText}>LOGIN</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.loginBtn}>
              <Text style={styles.menuText}>email@usuario.com</Text>
            </View>
          )}

          {userLogin ? (
          <View style={styles.menuWrapper}>

            <TouchableOpacity onPress={clearCache}>
              <View style={styles.menuItem}>
                <MaterialCommunityIcons
                  name="cached"
                  color={COLORS.primary}
                  size={24}
                />
                <Text style={styles.menuText}>Limpar Cache</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={deleteAccont}>
              <View style={styles.menuItem}>
                <AntDesign
                  name="deleteuser"
                  color={COLORS.primary}
                  size={24}
                />
                <Text style={styles.menuText}>Deletar Conta</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={logout}>
              <View style={styles.menuItem}>
                <AntDesign
                  name="logout"
                  color={COLORS.primary}
                  size={24}
                />
                <Text style={styles.menuText}>Logout</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Configurações')}>
              <View style={styles.menuItem}>
                <MaterialCommunityIcons
                  name="cog-outline"
                  color={COLORS.primary}
                  size={24}
                />
                <Text style={styles.menuText}>Configurações</Text>
              </View>
            </TouchableOpacity>

          </View>
        ) : (
          <View style={styles.menuWrapper}>
            
          </View>
        )}
        </View>

        <SignUpModal
        isVisible={isSignUpModalVisible}
        onClose={closeSignUpModal}
      />
      </SafeAreaView>
    </ScrollView>
  )
}
  const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    borderStartColor: COLORS.lightWhite,
    backgroundColor: COLORS.lightWhite
  },
  cover: {
    height: 290,
    width: '100%',
    resizeMode: 'cover'
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center'
  },
  profile: {
    height: 155,
    width: 155,
    borderRadius: 100,
    borderColor: COLORS.primary,
    borderWidth: 1,
    resizeMode: 'cover',
    marginTop: -90
  },
  name: {
    color: COLORS.black,
    marginVertical: 5
  },
  loginBtn: {
    backgroundColor: COLORS.secondary,
    padding: 2,
    borderWidth: 0.4,
    borderColor: COLORS.primary,
    borderRadius: SIZES.large,
    marginBottom: SIZES.large
  },
  menuText: {
    padding: 4,
    fontWeight: '900',
    fontSize: 14,
    lineHeight: 16,
    color: COLORS.gray,
    marginHorizontal: SIZES.large
  },
  menuWrapper: {
    marginTop: SIZES.xlarge,
    width: SIZES.width - SIZES.large,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderBottomWidth: 0.2,
    borderColor: COLORS.gray
  },
})

export default Perfil;
