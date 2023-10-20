import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import { styles } from './style'
import Button from "../../../Auth/AuthComponents/AuthButton";

const Splash = ({ navigation}) => {
    console.log('navigation:>>', navigation)
    const onSignUp = () => {
        navigation.navigate("Signup");
    }
    const onSignin = () => {
        navigation.navigate("Signin")
    }
    return (
        <View style={styles.container}>
            <Image resizeMode='contain' style={styles.image} source={require('../../../../../assets/images/authImages/splash_image.png')} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>You'll Find </Text>
                <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
                <Text style={styles.title}>Here! </Text>
            </View>

            <Button onPress={onSignUp} title="Sign Up" />

            <Pressable onPress={onSignin} hitSlop={20}>
                <Text style={styles.footerText}>Sign In</Text>
            </Pressable>
        </View>
    );
}

export default Splash;
