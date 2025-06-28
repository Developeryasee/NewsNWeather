import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../types/navigation";
import WeatherScreen from "../screens/WeatherScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator=()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Weather" component={WeatherScreen}/>
        </Stack.Navigator>
    )
}
export default AppNavigator;