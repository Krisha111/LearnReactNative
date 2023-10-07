import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

//left,right,top,bottom----it just move the content left,right,top or bottom
//based on the value provided or assigned

export default function LRTBottom() {
  return (
    <View>
      <Text style={style.textStyle}>LRTBottom</Text>
    </View>
  )
}

const style=StyleSheet({
    textView:{
        top:20
    }
})

