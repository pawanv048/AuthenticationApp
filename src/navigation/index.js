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
import navigationStrings from '../constant/navigationStrings';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={navigationStrings.SIGNIN} component={SignInScreen}/>
          <Stack.Screen name={navigationStrings.SIGNUP} component={SignUpScreen}/>
          <Stack.Screen name={navigationStrings.EMAIL} component={ConfirmEmailScreen}/>
          <Stack.Screen name={navigationStrings.FORGETPASSWORD} component={ForgetPasswordScreen}/>
          <Stack.Screen name={navigationStrings.NEWPASSWORLD} component={NewPasswordScreen}/>
          <Stack.Screen name={navigationStrings.HOME} component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;

const styles = StyleSheet.create({})