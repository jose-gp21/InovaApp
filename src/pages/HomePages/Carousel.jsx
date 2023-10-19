import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import { COLORS, SIZES } from '../../../assets/constants';

export default function Carousel() {

    const productsSlides = [
        'https://invexo.com.br/blog/wp-content/uploads/2021/05/comprar-apartamento-no-leblon-rj.jpg',
        'https://milano.vteximg.com.br/arquivos/tenis-feminino-calcados-femininos-milano-23-08-23.png?v=638284187197370000',
        'https://www.rd.com/wp-content/uploads/2023/03/GettyImages-1264344882-FT.jpg'
    ]

  return (
    <View style={styles.carouselContainer}>
      <SliderBox images={productsSlides}
      dotColor={COLORS.secondary}
      inactiveDotColor={COLORS.primary} 
      ImageComponentStyle = {{borderRadius: SIZES.medium, width: '90%', marginTop: 15, }}
      autoplay
      autoplayInterval = {5000}
      circleLoop
    />
    </View>
  )
}

const styles = StyleSheet.create({
    carouselContainer:{
        flex: 1,
        alignItems: 'center',
       
    }
})