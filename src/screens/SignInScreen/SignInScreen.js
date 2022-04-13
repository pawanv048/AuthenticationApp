import { StyleSheet, ScrollView, View, Image, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomeInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import { useNavigation } from '@react-navigation/native'; //hook to navigate between screens



const SignInScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //set height according to the window
    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        console.warn('Sign in');
        //validate user name and password
        navigation.navigate('Home');
    };
    const onForgotPasswordPressed = () => {
        //console.warn('forgot password')
        navigation.navigate('ForgetPassword');
    };
    
    const onSignUpPressed = () => {
        //console.warn('onSignUpPressed')
        navigation.navigate('Sign Up');
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image
                    source={Logo}
                    style={[styles.logo, { height: height * 0.3 }]}
                    resizeMode="contain"
                />

                <CustomInput
                    placeholder="Username"
                    value={username}
                    setValue={setUsername}
                />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />

                <CustomButton text="Sign In" onPress={onSignInPressed} />

                <CustomButton
                    text="Forgot password?"
                    onPress={onForgotPasswordPressed}
                    type="TERTIARY"
                />

                <SocialSignInButton/>

                <CustomButton
                    text="Don't have an account? Create one"
                    onPress={onSignUpPressed}
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
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
});

export default SignInScreen;