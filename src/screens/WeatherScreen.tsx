import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../types/navigation";
import Container from "../components/Container";
import { Text } from "react-native";
import Header from "../components/Header";
import WeatherCard from "../components/WeatherCard";

type WeatherScreenProps = NativeStackScreenProps<RootStackParamList, "Weather">
const WeatherScreen: React.FC<WeatherScreenProps> = ({ navigation }) => {
    return (
        <Container>
            <Header title="Thiruvaiyaru" />
            <WeatherCard date="04 August 2024" description="Cloudy" celsius={18}/>
        </Container>
    )
}
export default WeatherScreen;