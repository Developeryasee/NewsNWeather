import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../types/navigation";
import WeatherScreen from "../screens/WeatherScreen";
import NewsScreen from "../screens/NewsScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator=()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown: false,animation:"slide_from_right"}}>
                <Stack.Screen name="Weather" component={WeatherScreen}/>
                <Stack.Screen name="News" component={NewsScreen}/>
        </Stack.Navigator>
    )
}
export default AppNavigator;