import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { layout } from "../../styles/layout";
import { Typography } from "../../styles/typography";
import { moderateScale } from "react-native-size-matters";

type Props = {
    error: string;
}
const ErrorState: React.FC<Props> = ({ error }) => {
    return (
        <View style={[layout.full, layout.center]}>
            <Text style={styles.errorText}>{error}</Text>
        </View>
    )
}
export default memo(ErrorState);
const styles = StyleSheet.create({
    errorText: {
        ...Typography.caption,
        fontSize: moderateScale(13),
        textAlign: 'center',
        color: 'red'
    }
})