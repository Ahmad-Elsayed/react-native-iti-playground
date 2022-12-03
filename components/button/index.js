import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';

const Button = () => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.buttonTextStyle}>Button</Text>
    </View>
  );
};

export default Button;
