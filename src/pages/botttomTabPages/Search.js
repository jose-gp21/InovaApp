import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../../../assets/constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const Search = () => {
  const navigation = useNavigation();
  const [isInputFocused, setInputFocused] = useState(false);

  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity style={styles.searchBtn}>
        <Ionicons
          name="search-sharp"
          size={SIZES.xLarge}
          color={COLORS.gray}
        />
      </TouchableOpacity>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          placeholder='O que você está procurando?'
          placeholderTextColor={COLORS.gray}
        />
      </View>
      <View style={styles.sendBtnWrapper}>
        {isInputFocused && (
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <Ionicons
              name="send"
              size={SIZES.large}
              color={COLORS.gray}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
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
    justifyContent: "center",
    alignItems: "center"
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
