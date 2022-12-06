import { View, Text, Pressable } from 'react-native';
import React from 'react';
import styles from './styles';
import routes from '../../common/routes';
import { useNavigation } from '@react-navigation/native';
import { solarizedColors, twitterColors } from '../../common/colors';

const Home = () => {
  const { navigate } = useNavigation();
  // useState useEffect useMemo useCallback useRef useContext -- react native
  // useNavigation useRoute -- react navigation
  const schemeList = [
    {
      scheme: twitterColors,
      title: 'Twitter Colors',
    },
    {
      scheme: solarizedColors,
      title: 'Solarized Colors',
    },
  ];
  return (
    <View style={styles.containerStyle}>
      {schemeList.map(({ scheme, title }) => (
        <Pressable
          onPress={() =>
            navigate(routes.palette, { name: title, colors: scheme })
          }
          style={[
            styles.itemContainer,
            {
              backgroundColor: scheme[3].hexCode,
            },
          ]}>
          <Text style={styles.titleStyle}>{title}</Text>
          {/* {[twitterColors[0], twitterColors[1], twitterColors[2]]} */}
          <View style={styles.colorsContainer}>
            {scheme.slice(0, 3).map(({ hexCode }) => (
              <View
                style={[styles.colorItem, { backgroundColor: hexCode }]}
                key={hexCode}
              />
            ))}
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default Home;
