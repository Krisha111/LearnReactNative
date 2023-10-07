import { View, Text, Button } from 'react-native'
import React,{useState} from 'react'

export default function Counter() {
    const [counter,setCounter]=useState(0)
  return (
    <View>
      <Button title='Increase' onPress={()=>setCounter(counter+1)}/>
      <Button title='Decrease'onPress={()=>setCounter(counter-1)}/>
      <Text>{counter}</Text>
    </View>
  )
}