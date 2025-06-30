import React, { memo } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import FastImage, { FastImageProps } from "react-native-fast-image";
import SvgIcon from "./SvgIcon";
import NoImage from "../assets/icons/NoImage.svg";
import { scale, verticalScale } from "react-native-size-matters";

type AppImageProps = FastImageProps & {
    style?: StyleProp<ViewStyle>;
    resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
}

const AppImage: React.FC<AppImageProps> = ({
    source,
    style,
    fallback,
    resizeMode = 'cover',
    ...rest
}) => {
    return (
        <View style={style} testID="AppImageWrapper">
            {
                fallback ?
                    <SvgIcon
                        width={scale(32)}
                        height={verticalScale(25)}
                        icon={NoImage}
                    /> : <FastImage
                        style={styles.image}
                        source={source}
                        resizeMode={resizeMode}
                        testID="AppImage"
                        {...rest}
                    />

            }

        </View>
    )
}
export default memo(AppImage);

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    },
});