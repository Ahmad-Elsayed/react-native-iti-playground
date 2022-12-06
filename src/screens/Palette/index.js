import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Box from '../../components/Box';

export default function Palette() {
  const routeInformation = useRoute();
  const { setOptions } = useNavigation();
  // const [counter, setCounter] = useState(0);
  useEffect(() => {
    setOptions({
      title: routeInformation.params.name,
    });
    // console.log('item');
  }, [routeInformation.params.name, setOptions]);
  useEffect(() => {
    return () => {
      console.log('Bye Bye');
    };
  }, []);
  return (
    // <View>
    //   <Text>{routeInformation.params.name}</Text>
    // </View>
    <FlatList
      data={routeInformation.params.colors}
      renderItem={({ item: { colorName, hexCode } }) => (
        <Box title={colorName} bgColor={hexCode} />
      )}
      keyExtractor={item => item.hexCode}
      ListHeaderComponent={
        <Text
          // onPress={() => {
          //   setCounter(prevCount => prevCount + 1);
          // }}
          style={styles.text}>
          Here are some boxes with color names
          {/* {counter} */}
        </Text>
      }
      ListEmptyComponent={
        <View>
          <Text>empty list</Text>
        </View>
      }
      style={styles.containerStyle}
    />
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    padding: 15,
    backgroundColor: 'white',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 15,
  },
});
