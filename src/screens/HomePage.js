import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Color, Font } from '../constant'
import { Category, Header, SearchBar, Recipe } from '../components'

export default function HomePage() {
    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
                <Text style={styles.text}>Hello, Burak Gökçınar</Text>
                <Text style={styles.text2}>
                    Make your 
                    <Text style={styles.text3}> own food</Text>
                </Text>

                {/* Searh Bar Component  */}
                <SearchBar/>

                {/* Category Component  */}
                <Category/>

                {/* Recipes Component  */}
                <Recipe/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white
    },
    scroll: {
        padding: 10
    },
    text: {
        color: Color.dark,
        fontSize: 25,
        fontFamily: Font.regular,
        marginTop: 10
    },
    text2: {
        color: Color.dark,
        fontSize: 35,
        fontFamily: Font.bold,
        marginTop: 5
    },
    text3: {
        color: Color.bg,
        fontSize: 30,
        fontFamily: Font.bold,
        marginTop: 5
    }
})