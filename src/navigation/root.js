import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Palette from '../screens/Palette';
import routes from '../common/routes';
import Users from '../screens/Users';

const Stack = createNativeStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.users} component={Users} />
      <Stack.Screen
        name={routes.home}
        component={Home}
        options={{
          headerTitle: 'Palettes',
          // header: () => null,
          // headerStyle: {
          //   backgroundColor: 'yellow',
          // },
          // headerTintColor: 'green',
          // headerTitleStyle: {
          //   fontSize: 25,
          // },
        }}
      />
      <Stack.Screen name={routes.palette} component={Palette} />
    </Stack.Navigator>
  );
}
