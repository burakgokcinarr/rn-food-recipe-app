import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { categoryData } from '../constant/Data'
import { Font, Color } from '../constant'
import { Image } from 'expo-image'

export default function Category() {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const categoryCard = ({ item, index }) => {

        const active     = selectedIndex == index ? { backgroundColor: Color.bg } : null;
        const activeText = selectedIndex == index ? { fontFamily: Font.bold } : null;

        return (
            <TouchableOpacity onPress={() => setSelectedIndex(index)}>
                <View style={[styles.container, active]}>
                    <Image
                        style={styles.image}
                        source={item.image}
                        contentFit="cover"
                        transition={1000}
                    />
                </View>
                <Text style={[styles.text, activeText]}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            data={categoryData}
            renderItem={categoryCard}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 15}}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5
    },
    image: {
        width: 40,
        aspectRatio: 1
    },
    text: {
        fontSize: 15,
        fontFamily: Font.medium,
        color: Color.dark,
        textAlign: 'center',
        marginTop: 10
    }
})