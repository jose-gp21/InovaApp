import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, SHADOWS } from '../../../assets/constants'
import { useNavigation } from '@react-navigation/native'

export default function SearchTile({item}) {

    const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate("ProductDetails", {item})}>
        <View style={styles.image}>
            <Image source={{ uri: item.imageURL }} style={styles.productImg} />
        </View>

        <View style={styles.textContainer}>
            <Text style={styles.productTitle}>{item.tittle}</Text>
            <Text style={styles.supplier}>{item.supplier}</Text>
            <Text style={styles.price}>R$ {item.price}</Text>
        </View>
</TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: SIZES.small,
        flexDirection: "row",
        padding: SIZES.medium,
        borderRadius: SIZES.small,
        backgroundColor: "#FFF",
        ...SHADOWS.medium,
        shadowColor: COLORS.lightWhite
      },
      image: {
        width: 70,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignContent: "center"
      },
        productImg: {
          width: "100%",
          height: 65,
          borderRadius: SIZES.small,
          resizeMode: "cover"
        },
        textContainer: {
          flex: 1,
          marginHorizontal: SIZES.medium
        },
        productTitle: {
          fontSize: SIZES.medium,
          fontFamily: "bold",
          color: COLORS.black
        },
        supplier: {
          fontSize: SIZES.small,
          color: COLORS.gray,
          marginTop: 3,
        },
        price:{
            fontSize: SIZES.small -1,
            color: COLORS.primary
        }
})