import React from "react"
import {TouchableOpacity, Text } from "react-native"
import { styles } from "./style"

const Button = ({title, onPress, style}) => {
    console.log('INSIDE BUTTON')
    return(
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[styles.container, style]}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default React.memo(Button);