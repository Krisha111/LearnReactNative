import { View, Text,StyleSheet } from 'react-native'
import React,{useState} from 'react'

export default function InputText() {
    const [name,setName]=useState('')
  return (
    <View>
     <InputText
     autoCapitalize="none"
     autoCorrect={false}
     value={name}
     onChangeText={(newValue)=>setName(newValue)}
     />
     <Text>My name is {name}</Text>
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