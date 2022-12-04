import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';

//props {bgColor, title}
function Box({ bgColor, title }) {
  return (
    <View
      style={StyleSheet.flatten([
        styles.containerStyle,
        {
          backgroundColor: bgColor,
        },
      ])}>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
}

export default Box;
