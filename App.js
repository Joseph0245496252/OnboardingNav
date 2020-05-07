import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import OnlineShoppingScreen from './src/screens/OnlineShoppingScreen';
import PaymentSuccessfulScreen from './src/screens/PaymentSuccessfulScreen';
import AddToCartScreen from './src/screens/AddToCartScreen';


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="OnlineShopping"
                screenOptions={{
                  headerTitleAlign:"center",
                }}
        >
          <Stack.Screen 
          options={{
            title:"My Shop "
          }}
          name="OnlineShopping" component={OnlineShoppingScreen} />
          <Stack.Screen name="AddToCart" component={AddToCartScreen} />
          <Stack.Screen name="PaymentSuccessful" component={PaymentSuccessfulScreen} />
          
        </Stack.Navigator>
    </NavigationContainer>
  );
}

