import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Increasecolorr(props) {
  return (
    <View>
      <Text>{props.color}</Text>
      <Button title={`Increase ${props.color}`} onPress={()=>{props.onIncrease()}}/>
      <Button title={`Decrease ${props.color}`} onPress={()=>{props.onDecrease()}}/>
      
    </View>
  )
}