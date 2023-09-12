import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Color } from '../constant';
import { Image } from 'expo-image'

const AVATAR_IMAGE = require("../../assets/images/avatar.png");

export default function Header() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={AVATAR_IMAGE}
                transition={750}
            />
            <TouchableOpacity onPress={() => alert("Notification")}>
                <Ionicons name="notifications-outline" size={30} color={Color.dark} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    image: {
        width: 40,
        height: null,
        aspectRatio: 1
    }
})