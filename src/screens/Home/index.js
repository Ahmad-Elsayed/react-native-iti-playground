import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import routes from '../../common/routes';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.containerStyle}>
      <Text
        onPress={() => {
          navigate(routes.palette);
        }}>
        Go to Details
      </Text>
    </View>
  );
};

export default Home;
