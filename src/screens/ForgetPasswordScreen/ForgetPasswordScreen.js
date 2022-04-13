import { StyleSheet, Text, ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/CustomeInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import { useNavigation } from '@react-navigation/native';

const ForgetPasswordScreen = () => {

    const [Username, setUsername] = useState('');
    const navigation = useNavigation();
    

    const onSendPressed = () => {
        //console.warn('onSendPressed');
        navigation.navigate('NewPassword');
      };
    const onSignInPress = () => {
        //console.warn('onSignInPress');
        navigation.navigate('Sign In');
      };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.root}>
            <Text style={styles.title}>Reset Your Password</Text>
    
            <CustomInput
              placeholder="Enter your Email"
              value={Username}
              setValue={setUsername}
            />
    
            <CustomButton text="Send" onPress={onSendPressed} />
    
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

export default ForgetPasswordScreen;