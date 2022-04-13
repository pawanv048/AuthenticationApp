import { StyleSheet, ScrollView, View, Text } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/CustomeInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton/';
import { useNavigation } from '@react-navigation/native';
const SignUpScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [conformPassword, setConformPassword] = useState('');
    const navigation = useNavigation();
    
    const onRegisterPressed = () => {
       //console.warn('onRegisterPressed');
       navigation.navigate("Email")
        
    };
    const onSignInPressed = () => {
        //console.warn('onSignInPressed')
        navigation.navigate("Sign In")
    };
    const onTermPressed = () => {
        console.warn("onTermPressed")

    };
    const onPrivacyPolicyPressed = () => {
        console.warn("onPrivacyPolicyPressed")
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create Account</Text>

                <CustomInput
                    placeholder="Username"
                    value={username}
                    setValue={setUsername}
                />
                <CustomInput
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}
                />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />
                <CustomInput
                    placeholder="Conform Password"
                    value={conformPassword}
                    setValue={setConformPassword}
                    secureTextEntry
                />

                <CustomButton text="Register" onPress={onRegisterPressed} />

                <Text>
                    By registering, you conform that you accept our <Text style={styles.link} onPress={onTermPressed}>Terms of use</Text> and 
                    <Text style={styles.link} onPress={onPrivacyPolicyPressed}> Privacy Policy</Text>
                </Text>

                <SocialSignInButton/>

                <CustomButton
                    text="Have an account? Sign in"
                    onPress={onSignInPressed}
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
        margin: 10
    },
    link: {
        color: '#FDB075',
    }
});

export default SignUpScreen;