import React from 'react';
import {StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { AppTheme } from '../theme/theme.type';
import { SafeAreaView } from 'react-native-safe-area-context';
import { layout } from '../styles/layout';
import { scale } from 'react-native-size-matters';

type ContainerProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

const Container = ({ children, style }: ContainerProps) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>;
};

const getStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      ...layout.full,
      backgroundColor: theme.colors.background,
      paddingHorizontal: scale(theme.spacing.base),
    },
  });

export default Container;
