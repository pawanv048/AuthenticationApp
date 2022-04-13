import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import Home from '../screens/HomeScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';

const Stack = createStackNavigator();



const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='Sign In' component={SignInScreen}/>
          <Stack.Screen name='Sign Up' component={SignUpScreen}/>
          <Stack.Screen name='Email' component={ConfirmEmailScreen}/>
          <Stack.Screen name='ForgetPassword' component={ForgetPasswordScreen}/>
          <Stack.Screen name='NewPassword' component={NewPasswordScreen}/>
          <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;

const styles = StyleSheet.create({})