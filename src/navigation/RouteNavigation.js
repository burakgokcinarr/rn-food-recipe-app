import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomePage, HomePage, RecipesDetail } from '../screens';
import { Color } from '../constant';

const Stack = createNativeStackNavigator();

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Color.bg,
    },
};

const stackOption = {
    headerShown: false,
    gestureEnabled: false
}

export default function RouteNavigation() {

    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator screenOptions={stackOption}>
                <Stack.Screen name="Welcome" component={WelcomePage} />
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="Detail" component={RecipesDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}