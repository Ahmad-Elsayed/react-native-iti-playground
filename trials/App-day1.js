import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';

export default function App() {
  // React.createElement('div', { className: 'conatiner' });
  return (
    <SafeAreaView style={{ backgroundColor: 'black' }}>
      <ScrollView horizontal>
        {/* <View style={{ backgroundColor: 'blue', height: 600, width: 400 }}>
          <Text
            style={{
              fontSize: 25,
            }}>
            hello{' '}
            <Text
              style={{
                color: 'red',
              }}>
              world
            </Text>
          </Text>
        </View>
        <View style={{ backgroundColor: 'yellow', height: 600, width: 400 }}>
          <Text
            style={{
              fontSize: 25,
            }}>
            hello{' '}
            <Text
              style={{
                color: 'red',
              }}>
              world
            </Text>
          </Text>
        </View> */}
        <Image
          source={require('./assets/images/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg')}
          resizeMode="center"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
