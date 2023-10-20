import React, { useState } from "react";
import { View, Text, ScrollView} from "react-native";
import { styles } from './style'
import AuthHeader from "../../../Auth/AuthComponents/AuthHeader";
import Input from "../../../Auth/AuthComponents/Input";
import Checkbox from "../../../Auth/AuthComponents/CheckBox";
import Button from "../../../Auth/AuthComponents/AuthButton";
import Seperator from "../../../Auth/AuthComponents/Seperator/index";
import GoogleLogin from "../../../Auth/AuthComponents/GoogleLogin";
import {SafeAreaView} from 'react-native-safe-area-context'



const Signup = ({navigation}) => {
    const [checked, setChecked] = useState(false)

    const onSignIn = () => {
        navigation.navigate('Signin')
    }

    const onBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView>
              <ScrollView style={styles.container}>
            <AuthHeader onBackPress={onBack} title="Sign Up"/>

            <Input label="name" placeholder="Jon Doe"/>
            <Input label="email" placeholder="google@gmail.com"/>
            <Input isPassword label="password" placeholder="............"/>

            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked}/>
                <Text style={styles.agreeText}>I agree with<Text style={styles.agreeTextBold}> Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
            </View>

            <Button style={styles.button} title="Sign Up"/>

            <Seperator text="Or sign up with"/>

            <GoogleLogin/>
            
            <Text onPress={onSignIn} style={styles.footerText}>
                Already have an account? 
                <Text onPress={onSignIn} style={styles.footerLink}> Sign In</Text>
            </Text>
            
        </ScrollView>

        </SafeAreaView>
      
    );
}
export default Signup;
