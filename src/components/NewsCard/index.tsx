import React, { memo } from "react";
import { Text, View } from "react-native";
import { useTheme } from "../../theme/ThemeContext";
import { createNewsCardStyle } from "./styles";
import AppImage from "../AppImage";
import { layout } from "../../styles/layout";
import SvgIcon from "../SvgIcon";
import ClockIconDark from "../../assets/icons/clockdark.svg";
import ClockIconLight from "../../assets/icons/clocklight.svg"
import { scale, verticalScale } from "react-native-size-matters";

type NewsCardProps = {
    urlToImage: string;
    title: string;
    author: string;
    publishedAt: string;
}
const NewsCard: React.FC<NewsCardProps> = ({ urlToImage, title, author, publishedAt }) => {
    const theme = useTheme();
    const styles = createNewsCardStyle(theme);
    return (
        <View style={styles.card}>
              <AppImage
                        style={styles.image}
                        fallback={!urlToImage}
                        source={{ uri: urlToImage, priority: 'high' }}
                    />
            <View>
                <Text style={styles.country}>us</Text>
                <Text style={styles.title} numberOfLines={2}>{title}</Text>
                <View style={layout.rowCenter}>
                    {
                        author && (
                            <Text style={styles.dateNauthor}>{author}</Text>
                        )
                    }

                    <View style={layout.rowCenter}>
                         <SvgIcon
                                    icon={theme.mode === "dark" ? ClockIconDark : ClockIconLight}
                                    width={scale(14)}
                                    height={verticalScale(14)}
                                    style={styles.icon}
                                />
                            <Text style={styles.dateNauthor}>{publishedAt}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default memo(NewsCard);