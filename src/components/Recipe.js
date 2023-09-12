import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MasonryList from '@react-native-seoul/masonry-list';
import { Color, Font } from '../constant';
import { mealData } from '../constant/Data';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';

export default function Recipe() {

    const cardItem = ({ item, i }) => {

        const navigation = useNavigation();

        const isEven   = i % 2 == 0;
        const isHeight = i % 3 == 0;

        return (
            <Pressable style={ {paddingLeft: isEven ? 0 : 5, paddingRight: isEven ? 5 : 0} } onPress={() => navigation.navigate("Detail", { data: item })}>
                <Image
                    style={[styles.image, { height: isHeight ? 250 : 150 }]}
                    source={item.image}
                    contentFit="cover"
                    transition={1000}
                />
                <Text style={styles.text} numberOfLines={1}>{item.name}</Text>
            </Pressable>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recipe</Text>
            <MasonryList
                data={mealData}
                keyExtractor={(item, i) => i.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={cardItem}
                onEndReachedThreshold={0.1}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        marginTop: 20,
        height: Dimensions.get("screen").height
    },
    title: {
        fontSize: 30,
        fontFamily: Font.bold,
        color: Color.dark
    },
    image: {
        width: '100%',
        height: 300,
        margin: 3,
        borderRadius: 35
    },
    text: {
        fontSize: 15,
        color: Color.dark,
        fontFamily: Font.regular,
        textAlign: 'center',
    }
})