import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../../../assets/constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Headings(){

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTittle}>Novos Produtos</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('ProdutosNovos')}>
                    <Ionicons name='grid' size={24} color={COLORS.primary}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        marginTop: SIZES.medium,
       // marginBottom: -SIZES.xSmall,
        marginHorizontal: 12,
        
    },
    header:{
        flexDirection:'row',
        justifyContent: 'space-between',

    },
    headerTittle:{
        fontWeight: '900',
        fontSize: SIZES.xLarge,
        color: COLORS.black
    }
})