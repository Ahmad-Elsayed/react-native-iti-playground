import {
  View,
  Text,
  SafeAreaView,
  Button,
  Alert,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import React from 'react';

const App = () => {
  function onPress() {
    Alert.alert('Pressed', 'This button is pressed', [
      {
        text: 'cancel',
        // onPress
      },
      {
        text: 'go ahead',
      },
    ]);
  }
  const conditon = true;
  return (
    <SafeAreaView style={styles.container}>
      {/* <Button title="Press me" color={'black'} onPress={onPress} /> */}
      {/* <TouchableOpacity
        style={styles.btnContainerStyle}
        activeOpacity={0.5}
        onPress={onPress}>
        <Text style={styles.btnTitleStyle}>Press me</Text>
      </TouchableOpacity> */}
      {/* <TouchableWithoutFeedback
        // style={styles.btnContainerStyle}
        onPress={onPress}>
        <Text style={styles.btnTitleStyle}>Press me</Text>
      </TouchableWithoutFeedback> */}

      <Pressable
        style={({ pressed }) => [
          styles.btnContainerStyle,
          {
            opacity: pressed ? 0.2 : 1,
            transform: [
              {
                scale: pressed ? 0.5 : 1,
              },
            ],
          },
        ]}
        onPress={onPress}>
        {conditon ? (
          <Text style={styles.btnTitleStyle}>Press me</Text>
        ) : (
          <View>
            <Text>falsy conditon</Text>
          </View>
        )}
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainerStyle: {
    borderRadius: 10,
    backgroundColor: '#6c71c4',
    marginHorizontal: 50,
    paddingVertical: 10,
  },
  btnTitleStyle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
});

export default App;
