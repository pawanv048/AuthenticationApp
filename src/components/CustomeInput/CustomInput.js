import { StyleSheet, View, TextInput, Platform } from 'react-native'
import React from 'react'


const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
      <View style={styles.container}>
           <TextInput 
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry }
           />
      </View>
  )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: Platform.OS === 'ios' ? 60 : 70,

        borderColor: "#e8e8e8",
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 5,
        justifyContent: 'center'
    },
    input: {
       
    },
});

export default CustomInput;