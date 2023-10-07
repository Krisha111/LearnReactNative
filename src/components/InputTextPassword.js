import { View, Text,StyleSheet } from 'react-native'
import React,{useState} from 'react'

export default function InputTextPassword() {
    const [password,setPassword]=useState('')
  return (
    <View>
     <InputText
     autoCapitalize="none"
     autoCorrect={false}
     value={password}
     onChangeText={(newValue)=>setPassword(newValue)}
     />
     {password.length<4?<Text>lenght should be more than 5</Text>:null}
     <Text>My name is {password}</Text>
    </View>
  )
}
const styles= StyleSheet({
    input:{
        margin:15,
        borderColor:"black",
        borderWidth:1
    }
})