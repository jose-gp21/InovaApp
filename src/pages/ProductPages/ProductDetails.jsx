import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../../../assets/constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { useRoute } from '@react-navigation/native';

const ProductDetails = ({ navigation }) => {
  const route = useRoute();
  const {item} = route.params;
  const [count, setCount] = useState(1)

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='chevron-back-circle' size={30} color={COLORS.offwhite} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='heart' size={30} color={COLORS.black} />
        </TouchableOpacity>
      </View>

      <Image
        source={{ uri: item.imageURL }}
        style={styles.image}
      />

      <View style={styles.details}>
        <View style={styles.tittleRow}>
          <Text style={styles.tittle}>{item.tittle}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>R$ {item.price}</Text>
          </View>
        </View>


        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) =>
              <Ionicons
                key={index}
                name='star'
                size={25}
                color='gold'
              />
            )}

            <Text style={styles.ratingText}>(4.9)</Text>
          </View>
          <View style={styles.rating}>
            <TouchableOpacity>
              <SimpleLineIcons name='plus' size={20} color={COLORS.gray} onPress={() => increment()} />
            </TouchableOpacity>
            <Text style={styles.ratingText}> {count} </Text>
            <TouchableOpacity>
              <SimpleLineIcons name='minus' size={20} color={COLORS.gray} onPress={() => decrement()} />
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Descrição</Text>
          <Text style={styles.descText}>{item.description}</Text>
        </View>

        <View style={{marginBottom: SIZES.small}}>
          <View style={styles.location}>
            <View style={{flexDirection: 'row'}}>
            <Ionicons name='location-outline' size={20} color={COLORS.gray}/>
            <Text>   {item.product_location}</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
            <MaterialCommunityIcons name='truck-delivery-outline' size={20} color={COLORS.gray}/>
            <Text>   Free Delivery  </Text>
            </View>
          </View>
        </View>

        <View style={styles.cartRow}>
          <TouchableOpacity style={styles.buyBtn} onPress={()=> {}}>
              <LinearGradient
              colors={['#FF5757', '#8C52FF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.Gradient}
              >
                <Text style={styles.buyBtnTittle}>Comprar agora</Text>
              </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cartBtn} onPress={()=> {}}>
              <LinearGradient
              colors={['#8C52FF','#FF5757']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.Gradient}
              >
                <SimpleLineIcons
                  name="handbag"
                  size={24}
                  color={COLORS.offwhite}
                  style={{padding: SIZES.small}}
                />
              </LinearGradient>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite
  },
  upperRow: {
    marginHorizontal: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: SIZES.xxLarge,
    width: SIZES.width - 44,
    zIndex: 999,
    marginLeft: 12,

  },
  image: {
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  details: {
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    width: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,

  },
  tittleRow: {
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 44,
    top: 20
  },
  tittle: {
    fontSize: SIZES.large,
    fontWeight: '900',
    color: COLORS.black
  },
  ratingRow: {
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 10,
    top: 5
  },
  rating: {
    top: SIZES.large,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: SIZES.large
  },
  ratingText: {
    color: COLORS.gray,
    fontSize: SIZES.small,
    paddingHorizontal: SIZES.xSmall

  },
  cartRow:{
    marginLeft: 20,
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 44,
  },
  buyBtn:{
    width: SIZES.width*0.7,
    backgroundColor: 'transparent',
    padding: SIZES.small,
    borderRadius: SIZES.large,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  Gradient:{
    borderRadius: SIZES.xLarge,
  },
  buyBtnTittle:{
    fontWeight: '900',
    padding: SIZES.small,
    color: '#fff',
    fontSize: SIZES.large,
    textAlign: 'center'
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large,
  },
  price: {
    padding: 6,
    color: COLORS.black,
    fontWeight: '900',
    fontSize: SIZES.large,
    marginBottom: 2,
  },
  descriptionWrapper: {
    marginTop: SIZES.large * 2,
    marginHorizontal: SIZES.large
  },
  description: {
    fontSize: SIZES.large - 5,
    fontWeight: '900',
    color: COLORS.primary,
    marginBottom: 5
  },
  descText: {
    fontSize: SIZES.small,
    textAlign: 'justify',
    marginBottom: SIZES.small,
    color: COLORS.gray,
    marginBottom: 30
  },
  location:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    marginHorizontal: 12,
    padding: 5,
    borderRadius: SIZES.large,
    marginBottom: SIZES.xSmall
  },
})