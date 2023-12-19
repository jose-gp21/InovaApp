import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, Text, ActivityIndicator, StyleSheet, FlatList, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../../../assets/constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import SearchTile from './SearchTile';

const Search = () => {
  const navigation = useNavigation();
  const [isInputFocused, setInputFocused] = useState(false);
  const [searchKey, setSearchKey] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setIsLoading(true);
    setError('');
    try {
      const encodedKey = encodeURIComponent(searchKey);
      const response = await axios.get(`http://10.0.2.2:3000/api/products/search/${searchKey}`);
      setSearchResults(response.data);
      console.log(response.data)
      setIsLoading(false);
    } catch (error) {
      console.log('Failed to get products!');
      setIsLoading(false);
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchBtn} onPress={() => handleSearch()} accessibilityLabel="Search Button">
          <Ionicons name="search-sharp" size={SIZES.xLarge} color={COLORS.gray} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            placeholder='O que você está procurando?'
            placeholderTextColor={COLORS.gray}
            value={searchKey}
            onChangeText={setSearchKey}
            accessibilityLabel="Search Input"
          />
        </View>
        {isInputFocused && (
          <View style={styles.sendBtnWrapper}>
            {isLoading ? (
              <ActivityIndicator size="small" color={COLORS.primary} />
            ) : (
              <TouchableOpacity onPress={() => handleSearch()} accessibilityLabel="Send Button">
                <Ionicons name="send" size={SIZES.large} color={COLORS.gray} />
              </TouchableOpacity>
            )}
          </View>
        )}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
      <View>
      {searchResults.length === 0 ?
        (
          <View style={{flex:1}}>
            <Image style={styles.searchImage} source={require('./../../../assets/images/2.png')}/>
          </View>
        ):(
          <FlatList
          data={searchResults}
          keyExtractor={(item)=> item._id}
          renderItem={({item})=>(<SearchTile item= {item}/>)}
          style={{marginHorizontal: SIZES.small}}
          />
          )
        }
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    paddingHorizontal: SIZES.small
  },
  sendBtnWrapper: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchWrapper: {
    flex: 1,
    marginLeft: SIZES.small
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: 'transparent',
    color: COLORS.primary
  },
  searchBtn: {
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  searchImage:{
    resizeMode: "contain",
    height: SIZES.width -60,
    alignSelf:"center",
    justifyContent: "center",
  },  
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
  gradientBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  }
});

export default Search;
