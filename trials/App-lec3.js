import React from 'react';
import {
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Box from './components/Box';

const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

export default function App() {
  return (
    <SafeAreaView>
      <FlatList
        data={COLORS}
        renderItem={({ item: { colorName, hexCode } }) => (
          <Box title={colorName} bgColor={hexCode} />
        )}
        keyExtractor={item => item.hexCode}
        ListHeaderComponent={
          <Text style={styles.text}>Here are some boxes with color names</Text>
        }
        ListEmptyComponent={
          <View>
            <Text>empty list</Text>
          </View>
        }
        // ItemSeparatorComponent={<View style={{ height: 25 }} />}
        // horizontal
        style={styles.containerStyle}
        // numColumns={3}
        // extraData={address}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 40,
    paddingHorizontal: 15,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 15,
  },
});

{
  /* <View>
        <Text>Cyan: #2aa198</Text>
      </View>
      <View>
        <Text>Blue: #268bd2 </Text>
      </View>
      <View>
        <Text>Magenta: #d33682</Text>
      </View>
      <View>
        <Text>Orange: #cb4b16</Text>
      </View> */
}

/**
<Box title="Cyan: #2aa198" bgColor="#2aa198" />
        <Box title="Blue: #268bd2" bgColor="#268bd2" />
        <Box title="Magenta: #d33682" bgColor="#d33682" />
        <Box title="Orange: #cb4b16" bgColor="#cb4b16" />
        <Box
          title={Platform.OS === 'ios' ? 'I am iOS' : 'I am Android'}
          bgColor={'black'}
        />
 */
