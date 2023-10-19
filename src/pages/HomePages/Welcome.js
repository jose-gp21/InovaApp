import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../../../assets/constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

export default function WelcomePage() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText(COLORS.black)}>
               {" "} Ache os Melhores
            </Text>
            <Text style={styles.welcomeText(COLORS.primary)}>
            {" "}Produtos do Mercado
            </Text>

            <View style={styles.searchContainer}>
                <Ionicons
                    name="search-sharp"
                    size={SIZES.xLarge}
                    style={styles.searchIcon}
                />
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value=''
                        onFocus={() => { navigation.navigate("Search") }}
                        placeholder='O que você está procurando?'
                        placeholderTextColor={COLORS.gray}
                    />
                </View>
            </View>

            <LinearGradient
                colors={['#FF5757', '#8C52FF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradientBtn}
            >
                <TouchableOpacity style={styles.sendButton} onPress={() => { navigation.navigate('HomeAudiencePage') }}>
                    <Text style={styles.gradientText}>Assistir lives</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: COLORS.offwhite
    },
    welcomeText: (color) => ({
        fontWeight: '900',
        fontSize: SIZES.xxLarge - 8,
        marginTop: SIZES.xSmall,
        color: color,
        marginHorizontal: 12
    }),
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium
    },
    searchIcon: {
        marginHorizontal: 10,
        color: COLORS.gray,
        marginTop: SIZES.small,
        marginBottom: SIZES.small
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small
    },
    searchInput: {
        fontWeight: 'normal',
        width: "100%",
        paddingHorizontal: SIZES.small
    },
    gradientBtn: {
        borderRadius: SIZES.small,
        paddingHorizontal: 15,
    },
    gradientText: {
        fontWeight: '900',
        color: '#fff',
        textAlign: 'center',
        padding: SIZES.medium,
        fontSize: SIZES.large
    },
    sendButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
