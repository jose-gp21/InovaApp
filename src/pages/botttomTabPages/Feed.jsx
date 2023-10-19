import { StyleSheet, Button, SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {COLORS, SIZES} from '../../../assets/constants/index';
import WelcomePage from '../HomePages/Welcome';
import Carousel from '../HomePages/Carousel';
import Headings from '../HomePages/Headings';
import ProductRow from '../ProductPages/ProductRow';


const Feed = () => {

  const navigation = useNavigation();

  return (
  <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name='location-outline' size={24} color={COLORS.black}/>
          <Text style={styles.location}>Santa Catarina Brasil</Text>
          <View style={{alignItems: 'flex-end'}}>

              <View style={styles.cartCount}>
                  <Text style={styles.cartNumber}>1</Text>
              </View>

              <TouchableOpacity style={styles.iconBtn} onPress={()=>{navigation.navigate("Compras")}}>
              <SimpleLineIcons
                  name="handbag"
                  size={24}
                  color={COLORS.black}
                />
              </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View style={{marginHorizontal: 22,}}>
            <WelcomePage/>
            <Carousel/>
            <Headings/>
            
          </View>
          <View style={{marginHorizontal: 4}}><ProductRow/></View>
        </ScrollView>
      </View>
  </SafeAreaView>
  )
}

export default Feed

const styles = StyleSheet.create({
  text:{
    fontFamily: 'bold',
    fontSize: 40
  },
  appBarWrapper:{
    
    marginTop: SIZES.small,
    width: 'auto',
    
  },
  appBar:{
    marginHorizontal: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: SIZES.small
  },
  location:{
    fontFamily: 'bold',
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  cartCount:{
    position: 'absolute',
    bottom: 16,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black'
  },
  cartNumber:{
    fontWeight: '600',
    fontSize: 10,
    color: COLORS.lightWhite,
  },
  iconBtn:{
    borderRadius: SIZES.small,
    backgroundColor: 'transparent',
    color: COLORS.primary
  }
})