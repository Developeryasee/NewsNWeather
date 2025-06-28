import React, { memo } from "react";
import { Text, View } from "react-native";
import { layout } from "../../styles/layout";
import { useTheme } from "../../theme/ThemeContext";
import { createHeaderStyle } from "./style";
import NewsIcon from "../../assets/icons/news.svg";
import { scale, verticalScale } from "react-native-size-matters";
import SvgIcon from "../SvgIcon";
type HeaderProps = {
    title?: string;
}
const Header: React.FC<HeaderProps> = ({ title }) => {
    const theme = useTheme();
    const styles = createHeaderStyle(theme);
    return (
        <View style={[layout.rowSpaceBetween,layout.alignEnd]}>
            <View>
                {
                    title != "News" && (
                        <Text style={styles.welcomeText}>Welcome home,</Text>
                    )
                }
                <Text style={styles.title}>{title}</Text>
            </View>
            {
                title != "News" && (
                    <SvgIcon
                        icon={NewsIcon}
                        width={scale(26)}
                        height={verticalScale(26)}
                        color={theme.colors.textPrimary}
                    />
                )
            }

        </View>
    )
}
export default memo(Header);