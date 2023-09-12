import { StyleSheet, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Color, Font } from '../constant'
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar() {

    const [text, setText] = useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    placeholder='Ara...'
                    placeholderTextColor={Color.white}
                    onChangeText={setText}
                    value={text}
                />
                <Ionicons name="search-circle" size={50} color={Color.dark} style={styles.icon} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 10
    },
    inputView: {
        width: '90%',
        height: 50,
        borderRadius: 50,
        padding: 10,
        backgroundColor: Color.input,
        justifyContent: 'center'
    },
    input: {
        color: Color.dark,
        fontSize: 15, 
        fontFamily: Font.medium
    },
    icon: {
        position: 'absolute',
        right: 0
    }
})