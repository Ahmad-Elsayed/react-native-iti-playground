import React, { useCallback, useState } from 'react';

import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';

('react-native-svg');

export default function App() {
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const onChangeHandler = useCallback(
    value => {
      const lowerCaseAddress = value.toLocaleLowerCase();
      // alert(lowerCaseAddress);
      setAddress(lowerCaseAddress + name);
    },
    [name],
  );
  console.log(address);
  return (
    <SafeAreaView>
      {/* <View>
        <Text>TEST</Text>
      </View> */}
      <ScrollView
      // showsHorizontalScrollIndicator={false}
      // showsVerticalScrollIndicator={false}
      >
        {/* <View style={{ height: 500, backgroundColor: 'cyan' }}>
          <Image
            // source={require('./assets/images/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg')}
            source={{
              uri: 'https://picsum.photos/200/300',
              //   method: 'GET',
              //   headers: {
              //     authorization: ''
              //   }
            }}
            style={{ width: '100%', aspectRatio: 2 }}
            resizeMode="stretch"
          />
        </View>
        <View style={{ height: 500, backgroundColor: 'gray' }}>
          <Text
            onPress={() => {
              alert('Pressed');
            }}>
            Hello Bani <Text>Swif</Text>
          </Text>
        </View>
        <View style={{ height: 500, backgroundColor: 'yellow', width: 400 }}>
          <Text
            onPress={() => {
              alert('Pressed');
            }}>
            Hello Bani <Text>Swif</Text>
          </Text>
        </View> */}
        <TextInput
          placeholder="type your name..."
          //   editable={false}
          value={address}
          //   onChangeText={value => {
          //     const lowerCaseAddress = value.toLocaleLowerCase();
          //     if (lowerCaseAddress.length < 10) {
          //       setAddress(lowerCaseAddress);
          //     }
          onChangeText={onChangeHandler}
          //   }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
