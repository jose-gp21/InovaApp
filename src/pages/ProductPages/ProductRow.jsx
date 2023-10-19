import { StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native'
import React from 'react';
import { COLORS, SIZES } from '../../../assets/constants';

import ProductCardView from './ProductCardView';
import useFetch from '../../hook/useFetch';


export default function ProductRow() {

  const {data, isLoading, error} = useFetch();
    const products=[1,2,3,4]

  return (
    <View style={{marginTop: SIZES.medium, }}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.large} color={COLORS.primary}/>
      ): error ? (
        <Text style={{color: 'red'}}>Algo deu errado</Text>
      ):(
        <FlatList
            data={data}
            keyExtractor={(item, index) => item._id || index.toString()}
            renderItem={({ item }) => <ProductCardView item = {item}/>}
            horizontal
            contentContainerStyle={{columnGap: 1}}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({

})