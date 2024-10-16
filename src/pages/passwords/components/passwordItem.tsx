import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

interface ParamsPassword {
    data: string
    removePassword: () => void
}

const PasswordItem = ({ data, removePassword }: ParamsPassword) => {

    const [showPassword, setShowPassword] = useState(false)
    
    const handleChangeViewPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <Pressable style={styles.container} onLongPress={removePassword}>
            <Text style={showPassword ? styles.text : styles.textOff}>{showPassword ? data : ""}</Text>
            <Ionicons size={20} color={"#fff"} name={!showPassword ? "eye-off-outline" : "eye-outline"} onPress={() => handleChangeViewPassword()} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    text: {
        color: "#fff"
    },
    textOff : {
        backgroundColor: "#D9D9D9",
        padding: 1,
        borderRadius: 8,
        width: "50%"
    }
})

export default PasswordItem