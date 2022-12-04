import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Button from './components/button';

// function App() {
//   return <View />;
// }

// export default App;

// const safeAreaViewContainerStyle = {
//   backgroundColor: 'blue',
//   flex: 1,
// };

// const obj = {
//   address: {
//     houseNumber: 5,
//   },
// };

// obj.address.houseNumber

const App = () => {
  return (
    <SafeAreaView
      style={
        //     {
        //     backgroundColor: 'magenta',
        //     flex: 1,
        //     //   flexDirection: 'row'
        //     // alignItems: 'center',
        //     // justifyContent: 'center',
        //   }
        // safeAreaViewContainerStyle
        styles.containerStyle
      }>
      {/* <View
        style={{
          // display: 'flex'
          backgroundColor: 'red',
          //   'background-color'
          //   flex: 1,
          height: 200,

          //   height: 200,
          //   height: '50%',
        }}>
        <Text> styling exceercise </Text>
      </View> */}
      {/* <View style={{ flex: 2 }}>
        <Text>Orange</Text>
      </View>
      <View style={{ backgroundColor: '#268bd2', flex: 2 }}>
        <Text>Orange</Text>
      </View> */}
      <View
        style={{
          height: 500,
          width: 500,
          backgroundColor: 'yellow',
          //   zIndex: 10,
        }}>
        <View
          style={{
            position: 'absolute',
            width: 50,
            height: 50,
            backgroundColor: 'gray',
            bottom: 0,
          }}
        />
      </View>
      <View
        style={
          //   {
          //   height: 100,
          //   width: 100,
          //   backgroundColor: 'green',
          //   position: 'absolute',
          //   top: 100,
          //   left: 75,
          //   zIndex: 15,
          //   }
          styles.greenBoxStyle
        }
      />
      <Button />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    color: 'green',
    padding: 10,
  },
  greenBoxStyle: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
    position: 'absolute',
    top: 100,
    left: 75,
  },
});

export default App;
