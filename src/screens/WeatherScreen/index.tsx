import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { RootStackParamList } from "../../types/navigation";
import Container from "../../components/Container";
import Header from "../../components/Header";
import WeatherCard from "../../components/WeatherCard";
import WeatherStatsCard from "../../components/WeatherStatsCard";
import { Linking, RefreshControl, ScrollView, Text, TouchableOpacity, View } from "react-native";
import ForecastSection from "../../components/ForecastSection";
import { CurrentWeatherData, ForecastData } from "../../api/weather.api";
import { CurrentWeather } from "../../types/currentWeather.type";
import AppLoader from "../../components/AppLoader";
import { useTheme } from "../../theme/ThemeContext";
import { getFormattedDate } from "../../utils/getFormattedDate";
import { kelvinToCelsius } from "../../utils/temperature";
import { estimateRainChance } from "../../utils/weatherUtils";
import { ForecastRoot } from "../../types/forecastWeather.type";
import { groupForecastByDay } from "../../utils/groupForecastData";
import { useLocationPermission } from "../../hooks/useLocationPermission";
import Geolocation, { GeoError, GeoPosition } from "react-native-geolocation-service";
import { layout } from "../../styles/layout";
import { createWeatherScreenStyles } from "./style";
import ErrorState from "../../components/ErrorState";

type WeatherScreenProps = NativeStackScreenProps<RootStackParamList, "Weather">

const formattedDate = getFormattedDate();
const WeatherScreen: React.FC<WeatherScreenProps> = ({ navigation }) => {
    const theme = useTheme();
    const styles = createWeatherScreenStyles(theme);
    const { requestLocationPermission } = useLocationPermission();
    const [location, setLocation] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(null);
    const [forecastWeather, setForecastWeather] = useState<ForecastRoot | null>(null);
    const [error, setError] = useState<any>('');
    const [isLocationPermission, setIsLocationPermission] = useState<boolean>(true);

    const getPosition = (): Promise<GeoPosition> => {
        return new Promise((resolve, reject) => {
            Geolocation.getCurrentPosition(resolve, reject, {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 10000,
            });
        });
    };

    const getCurrentWeatherData = useCallback(async () => {

        const { granted } = await requestLocationPermission();
        if (!granted) {
            setIsLocationPermission(false);
            return;
        } else {
            setIsLocationPermission(true);
            setError('');
        }
        setLoading(true);

        try {
            const position = await getPosition();
            const { latitude, longitude } = position.coords;
            const result = await CurrentWeatherData(latitude, longitude);
            if (result.success) {
                const data = result.data as CurrentWeather;
                setLocation(data.name);
                setCurrentWeather(data);

                const forecast = await ForecastData(latitude, longitude);
                if (forecast.success) {
                    const forecastData = forecast.data as ForecastRoot;
                    setForecastWeather(forecastData);
                } else {
                    setError(forecast.error);
                }
            } else {
                setError(result.error);
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            if (error && typeof error === 'object' && 'code' in error) {
                const geoError = error as GeoError;
                if (geoError.code === 1) {
                    // Permission denied
                    setIsLocationPermission(false);
                } else if (geoError.code === 2) {
                    // Location service disabled
                    setError("Location services are turned off. Please enable them in settings.");
                } else {
                    setError("Failed to get location.");
                }
            } else {
                setError("An unexpected error occurred.");
            }
        }
    }, [requestLocationPermission])

    const forecastData = useMemo(() => {
        if (forecastWeather) {
            return groupForecastByDay(forecastWeather.list);
        }
        return null;
    }, [forecastWeather])

    const openAppSettings = useCallback(() => {
        Linking.openSettings();
    }, [])
    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await getCurrentWeatherData();
        setRefreshing(false);
    }, []);

    const handleNewsPress = useCallback(() => {
        navigation.navigate("News");
    }, [])

    useEffect(() => {
        getCurrentWeatherData();
    }, [])

    return (
        <Container>
            <Header location={location} onPress={handleNewsPress} />
            {
                loading ?
                    <AppLoader color={theme.colors.textPrimary} size="large" /> :
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.list}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                                colors={[theme.colors.textPrimary]}
                                tintColor={theme.colors.textPrimary}
                            />
                        }
                    >
                        {
                            error ? <>
                                <ErrorState error={error} />
                            </> :
                                isLocationPermission ? <>
                                    {
                                        currentWeather && (
                                            <>
                                                <WeatherCard date={formattedDate} description={currentWeather?.weather[0]?.main} celsius={kelvinToCelsius(currentWeather?.main?.temp)} />
                                                <WeatherStatsCard speed={currentWeather.wind.speed} humidity={currentWeather.main.humidity} rain_chance={estimateRainChance(currentWeather)} />
                                            </>

                                        )
                                    }
                                    {
                                        forecastData && (
                                            <ForecastSection
                                                data={forecastData}
                                            />
                                        )
                                    }
                                </> :
                                    <View style={[layout.full, layout.center]}>
                                        <Text style={styles.permissionText}>Location permission not enabled.</Text>
                                        <TouchableOpacity onPress={openAppSettings}>
                                            <Text style={styles.permissionLink}>Click here to activate.</Text>
                                        </TouchableOpacity>
                                    </View>
                        }


                    </ScrollView>
            }
        </Container>
    )
}
export default WeatherScreen;

