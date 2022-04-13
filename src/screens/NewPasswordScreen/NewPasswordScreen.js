import { StyleSheet, Text, ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/CustomeInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {

  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigation = useNavigation();


  const onSubmitPressed = () => {
    //console.warn('onSubmitPressed ');
    navigation.navigate('Sign In')
  };
  const onSignInPress = () => {
    //console.warn('onSignInPress');
    navigation.navigate('Sign In')
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset Your Password</Text>

        <CustomInput
          placeholder="code"
          value={code}
          setValue={setCode}
        />

        <CustomInput
          placeholder="Enter your n ew password"
          value={newPassword}
          setValue={setNewPassword}
        />

        <CustomButton text="Submit" onPress={onSubmitPressed} />

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

export default NewPasswordScreen;