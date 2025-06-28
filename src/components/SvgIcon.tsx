import React, { memo } from "react";
import { SvgProps } from "react-native-svg";

type SvgIconProps = {
    icon: React.FC<SvgProps>,
    width: number;
    height: number;
    color?: string
}
const SvgIcon: React.FC<SvgIconProps> = ({ icon: Icon, width, height, color }) => {
    return (
        <Icon
            width={width}
            height={height}
            fill={color}
        />
    )
}
export default memo(SvgIcon);