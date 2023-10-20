import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from './style'
import AuthHeader from "../../AuthComponents/AuthHeader";
import Input from "../../AuthComponents/Input";
import Button from "../../AuthComponents/AuthButton";
import Seperator from "../../AuthComponents/Seperator/index";
import GoogleLogin from "../../AuthComponents/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";

const Signin = ({ navigation }) => {
    const onSignUp = () => {
        navigation.navigate('Signup')
    }

    const onBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView>


            <ScrollView style={styles.container}>
                <AuthHeader onBackPress={onBack} title="Sign In" />

                <Input label="email" placeholder="google@gmail.com" />
                <Input isPassword label="password" placeholder="............" />

                <Button style={styles.button} title="Sign In" />

                <Seperator text="Or sign in with" />

                <GoogleLogin />

                <Text onPress={onSignUp} style={styles.footerText}>
                    Dont't have an account?
                    <Text onPress={onSignUp} style={styles.footerLink}> Sign Up</Text>
                </Text>

            </ScrollView>
        </SafeAreaView>
    );
}
export default Signin;
