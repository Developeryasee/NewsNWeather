import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback, useEffect, useMemo } from "react";
import { RootStackParamList } from "../../types/navigation";
import Container from "../../components/Container";
import Header from "../../components/Header";
import NewsCard from "../../components/NewsCard";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import AppLoader from "../../components/AppLoader";
import { useTheme } from "../../theme/ThemeContext";
import { fetchNewsList } from "../../store/slices/newsSlices";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Article } from "../../types/news.type";
import { scale, verticalScale } from "react-native-size-matters";
import { layout } from "../../styles/layout";
import { Typography } from "../../styles/typography";

type WeatherScreenProps = NativeStackScreenProps<RootStackParamList, "News">
const NewsScreen: React.FC<WeatherScreenProps> = ({ navigation }) => {
    const theme = useTheme();
    const { newslist, loading, refreshing, error, fromCache } = useSelector((state: RootState) => state.news);
    const dispatch = useAppDispatch();
    const handleGoback = useCallback(() => {
        navigation.goBack();
    }, [])

    const keyExtractor = useCallback((_: any, index: number) => {
        return index.toString();
    }, []);

    const renderItem = useCallback(
        ({ item }: { item: Article }) => (
            <NewsCard
                author={item.author ?? ''}
                title={item.title}
                publishedAt={item.publishedAt}
                urlToImage={item.urlToImage ?? ''}
            />
        ),
        []
    );

    const onRefresh = useCallback(async () => {
        dispatch(fetchNewsList({ isRefresh: true }));
    }, []);

    const ListHeaderComponent = useMemo(() => {
        if (fromCache) {
            return (
                <View style={[styles.header, { backgroundColor: theme.colors.background }]}>
                    <Text style={[styles.headerText, { color: theme.colors.textPrimary }]}>Showing Cached Data</Text>
                </View>
            )
        }

    }, [fromCache,theme])
    useEffect(() => {
       dispatch(fetchNewsList({ isRefresh: false }));
    }, [])

    return (
        <Container>
            <Header title={"News"} onPress={handleGoback} />
            {
                loading ?
                    <AppLoader color={theme.colors.textPrimary} size="large" /> :
                    <FlatList
                        data={newslist}
                        keyExtractor={keyExtractor}
                        renderItem={renderItem}
                        onRefresh={onRefresh}
                        refreshing={refreshing}
                        ListHeaderComponent={ListHeaderComponent}
                        stickyHeaderIndices={fromCache?[0]:undefined}
                    />
            }
        </Container>
    )
}
export default NewsScreen;

const styles = StyleSheet.create({
    header: {
        padding: scale(5),
        width: '100%',
        ...layout.center,
    },
    headerText: {
        ...Typography.label,
    }
})