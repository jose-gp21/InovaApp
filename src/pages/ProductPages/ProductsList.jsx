import { ActivityIndicator, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import useFetch from '../../hook/useFetch'
import { COLORS, SIZES } from '../../../assets/constants';

export default function ProductsList() {
    const {data, isLoading, error} = useFetch();
    

if(isLoading){
  return (
    <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary}/>
    </View>
  )
}
return(
    <View style={styles.container}>
        <FlatList/>
    </View>
)

}

const styles = StyleSheet.create({
    loadingContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    container:{
        alignItems: 'center',
        paddingTop: SIZES.xxLarge,
        paddingLeft: SIZES.small/2
    }
})