import { View, Text, StyleSheet, } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Color, Font } from '../constant';
import { useNavigation } from '@react-navigation/native';
import Animated, { useSharedValue, withRepeat, Easing, useAnimatedStyle, withSequence, withTiming} from 'react-native-reanimated';

const FOOD_IMAGE = require("../../assets/images/welcome.png");

export default function WelcomePage() {

    const navigation   = useNavigation();
    const duration     = 2500;
    const sv           = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ rotate: `${sv.value * 360}deg` }],
    }));

    useEffect(()=>{
        sv.value = withRepeat(withTiming(1, { duration }), -1);

        setTimeout(()=> navigation.navigate('Home'), 3500);
    },[])

    return (
        <View style={styles.container}>
            <StatusBar style="dark"/>
            <Animated.Image
                style={[styles.image, animatedStyle]}
                source={FOOD_IMAGE}
                resizeMode="cover"
            />
            <Text style={styles.title}>Delicious</Text>
            <Text style={styles.subTitle}>Food Recipe</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: null,
        aspectRatio: 1
    },
    title: {
        fontSize: 40,
        color: Color.black,
        fontFamily: Font.bold
    },
    subTitle: {
        fontSize: 25,
        color: Color.white,
        fontFamily: Font.medium
    }
});