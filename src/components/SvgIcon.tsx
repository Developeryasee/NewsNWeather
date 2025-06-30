import React, { memo } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

type SvgIconProps = {
    icon: React.FC<SvgProps>,
    width: number;
    height: number;
    color?: string
    style?: StyleProp<ViewStyle>,
}
const SvgIcon: React.FC<SvgIconProps> = ({ icon: Icon, width, height, color, style }) => {
    return (
        <Icon
            width={width}
            height={height}
            fill={color}
            style={style}
        />
    )
}
export default memo(SvgIcon);