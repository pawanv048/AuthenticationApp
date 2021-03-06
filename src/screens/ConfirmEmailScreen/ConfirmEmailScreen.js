import { StyleSheet, Text, ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/CustomeInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {

    const [code, setCode] = useState('');
    const navigation = useNavigation();

    const onConfirmPressed = () => {
        //console.warn('onConfirmPressed');
        navigation.navigate('NewPassword')
      };
    const onSignInPress = () => {
        //console.warn('onSignInPress');
        navigation.navigate('Sign In')
      };
    
      const onResendPress = () => {
        //console.warn('onResendPress');
        navigation.navigate('NewPassword')
      };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.root}>
            <Text style={styles.title}>Confirm your email</Text>
    
            <CustomInput
              placeholder="Enter your confirmation code"
              value={code}
              setValue={setCode}
            />
    
            <CustomButton text="Confirm" onPress={onConfirmPressed} />
    
            <CustomButton
              text="Resend code"
              onPress={onResendPress}
              type="SECONDARY"
            />
    
            <CustomButton
              text="Back to Sign in"
              onPress={onSignInPress}
              type="TERTIARY"
            />
          </View>
        </ScrollView>
      );
};

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#051C60',
      margin: 10,
    },
    text: {
      color: 'gray',
      marginVertical: 10,
    },
    link: {
      color: '#FDB075',
    },
  });

export default ConfirmEmailScreen;