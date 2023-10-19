import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../../../assets/constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProductCardView({item}) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={()=> navigation.navigate('ProductDetails', {item})}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
          source={{uri: item.imageURL,}}
          style={styles.image}
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.tittle} numberOfLines={1}>{item.tittle}</Text>
          <Text style={styles.supplier} numberOfLines={1}>{item.supplier}</Text>
          <Text style={styles.price}>R${item.price}</Text>
        </View>
        <TouchableOpacity style={styles.addBtn} onPress>
            <Ionicons name="add-circle" size={35} color={COLORS.primary}/>
        </TouchableOpacity>

      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    marginBottom: 80,
    width: 182,
    height: 240,
    marginEnd: 22,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.lightWhite,
  },
  imageContainer:{
    flex: 1,
    widht: 170,
    marginLeft: SIZES.small/2,
    marginRight: SIZES.small/2,
    marginTop: SIZES.small/2,
    overflow: 'hidden',
    borderRadius: SIZES.small,
  },
  image:{
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  details:{
    padding: SIZES.small
  },
  tittle:{
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: SIZES.large,
    marginBottom: 2,
  },
  supplier:{
    fontWeight: 'normal',
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  price:{
    color: COLORS.green,
    fontWeight: 'bold',
    fontSize: SIZES.medium,
    marginBottom: 2,
  },
  addBtn:{
    position: 'absolute',
    bottom: SIZES.xSmall,
    right: SIZES.xSmall,
  }
})