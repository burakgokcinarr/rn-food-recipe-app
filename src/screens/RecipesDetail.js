import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { recipesDetail } from '../constant/Data';
import { Image } from 'expo-image';
import { Color, Font } from '../constant';
import { Ionicons, AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import YouTubeIframe from 'react-native-youtube-iframe';

export default function RecipesDetail() {

    const navigation = useNavigation();
    const route      = useRoute();
    const data       = recipesDetail[0];

    const getYoutubeVideoId = (url )=> {
        const regex = /[?&]v=([^&]+)/;
        const match = url.match(regex);
        if (match && match[1]) {
            return match[1];
        }
        return null;
    }

    const InfoView = ({ title = null, value = null, icon = null }) => {
        return (
            <View style={styles.info}>
                { icon }
                <Text style={styles.infoText}>{value}</Text>
                <Text style={styles.infoText2}>{title}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 10 }} >
                    <Ionicons name="arrow-back-circle" size={45} color={Color.black} style={styles.imgLeft} onPress={() => navigation.goBack()}/>
                    <Ionicons name="heart-circle" size={45} color={Color.black} style={styles.imgRight}/>
                    <Image
                        style={styles.image}
                        source={route.params.data.image}
                        contentFit="cover"
                        transition={750}
                    />
                    <Text style={styles.txt}>{data?.strMeal}</Text>
                    <Text style={styles.txt2}>{data?.strArea}</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <InfoView title="Mins" value="35" icon={<AntDesign name="clockcircleo" size={30} color="black" />}/>
                        <InfoView title="Servings" value="3" icon={<FontAwesome name="group" size={30} color="black" />}/>
                        <InfoView title="Cal" value="105" icon={<MaterialCommunityIcons name="temperature-celsius" size={30} color="black" />}/>
                        <InfoView title="Easy" value="1-5" icon={<MaterialCommunityIcons name="spirit-level" size={30} color="black" />}/>
                    </View>
                    <Text style={styles.txt}>Ingredient</Text>
                    {
                        data.strIngredient?.map((val, index) => {
                            return (
                                <View key={index} style={styles.ingredient}>
                                    <Text style={styles.txt3}><FontAwesome name="square" size={24} color={Color.bg} /> {val} ({data.strMeasure[index]})</Text>
                                </View>
                            )
                        })
                    }
                    <Text style={styles.txt}>Instructions</Text>
                    <Text>{data.strInstructions}</Text>
                    <Text style={styles.txt}>Recipe Video</Text>
                    <YouTubeIframe
                        videoId={getYoutubeVideoId(data.strYoutube)}
                        height={300}
                    />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: Color.white
    },
    image: {
        width: '100%',
        height: null,
        aspectRatio: 1,
        margin: 3,
        borderRadius: 35
    },
    imgLeft: {
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 999
    },
    imgRight: {
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 999
    },
    txt: {
        fontSize: 25,
        fontFamily: Font.bold,
        color: Color.black,
        marginTop: 15
    },
    txt2: {
        fontSize: 20,
        fontFamily: Font.medium,
        color: Color.dark,
        marginTop: 5
    },
    txt3: {
        fontSize: 15,
        fontFamily: Font.medium,
        color: Color.dark,
        marginTop: 5
    },
    info: {
        height: 110,
        width: 60,
        borderRadius: 25,
        padding: 10,
        backgroundColor: Color.bg,
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoText: {
        fontSize: 20,
        fontFamily: Font.bold,
        color: Color.black,
        marginTop: 5
    },
    infoText2: {
        fontSize: 10,
        fontFamily: Font.medium,
        color: Color.white,
        marginTop: 5
    },
    ingredient: {
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
    }
})