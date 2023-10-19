import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../../../assets/constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductsList from '../ProductPages/ProductsList';

const ProdutosNovos = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}> 
        <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack('BottomTabBar')}>
          <Ionicons name='chevron-back-circle' size={30} color={COLORS.offwhite} />
        </TouchableOpacity>
        <Text style={{fontSize: SIZES.medium, fontWeight: '900', color: COLORS.offwhite}}>  Produtos  </Text>
        <ProductsList/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ProdutosNovos;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },
    wrapper:{
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },
    upperRow:{
        width: SIZES.width-50,
        marginHorizontal: SIZES.large,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.large,
        top: SIZES.large,
        zIndex: 99,
    }
})