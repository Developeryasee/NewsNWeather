import React, { memo, useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { layout } from "../../styles/layout";
import { useTheme } from "../../theme/ThemeContext";
import { createHeaderStyle } from "./style";
import NewsIcon from "../../assets/icons/news.svg";
import LocationIconDark from "../../assets/icons/location.svg";
import LocationIconLight from "../../assets/icons/locationlight.svg";
import BackIconLight from "../../assets/icons/backlight.svg";
import BackIconDark from "../../assets/icons/backdark.svg";
import { scale, verticalScale } from "react-native-size-matters";
import SvgIcon from "../SvgIcon";
import { useSafeAreaInsets } from "react-native-safe-area-context";
type HeaderProps = {
    title?: string;
    location?: string;
    onPress: () => void;
}
const Header: React.FC<HeaderProps> = ({ title, location, onPress }) => {
    const theme = useTheme();
    const styles = createHeaderStyle(theme);
    const { top } = useSafeAreaInsets();

    const paddingTop = useMemo(() => {
        return top === 0 ? { paddingTop: verticalScale(16) } : { paddingTop: 0 }
    }, [top])
    return (
        <View style={[styles.container, paddingTop]}>
            <View>
                {
                    !title && (
                        <Text style={styles.welcomeText}>Welcome home,</Text>
                    )
                }
                <View style={layout.rowSpaceBetween}>
                    {
                        location && (
                            <>
                                <SvgIcon
                                    icon={theme.mode === "dark" ? LocationIconDark : LocationIconLight}
                                    width={scale(22)}
                                    height={verticalScale(22)}
                                    style={styles.icon}
                                />
                                <Text style={styles.h2}>{location}</Text>
                            </>
                        )
                    }
                    {
                        title && (
                            <View style={[layout.flexrow,layout.center]}>
                                <TouchableOpacity onPress={onPress}>
                                    <SvgIcon
                                        icon={theme.mode === "dark" ? BackIconDark : BackIconLight}
                                        width={scale(24)}
                                        height={verticalScale(24)}
                                        style={styles.icon}
                                    />
                                </TouchableOpacity>

                                <Text style={styles.h2}>{title}</Text>

                            </View>
                        )
                    }
                </View>
            </View>
            <TouchableOpacity onPress={onPress}>
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
            </TouchableOpacity>


        </View>
    )
}
export default memo(Header);