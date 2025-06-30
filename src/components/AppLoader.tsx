import React, { memo } from "react";
import { ActivityIndicator, View, ViewStyle } from "react-native";
import { layout } from "../styles/layout";


type AppLoaderProps = {
    size?: 'small' | 'large',
    color?: string;
    containerStyle?: ViewStyle;
}
const AppLoader: React.FC<AppLoaderProps>=({
    size,
    color,
    containerStyle
})=>{
    return(
        <View style={[layout.full,layout.center,containerStyle]}>
                <ActivityIndicator
                size={size}
                color={color}
                testID="app-loader"
                />
        </View>
    )
}

export default memo(AppLoader);
