// BOX OBJECT MODEL

// padding,paddingHorizontal,paddingVertical,paddingLeft,paddingRight,paddingBottom,paddingTop
// borderWidth,borderColor
// margin,marginTop,marginBottom,marginLeft,marginRight,marginVertical,marginHorizontal

//this property is applied on parent

import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Box() {
  return (
    <View>
      <Text>Box Object Model</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    viewStyle:{
        padding:10
    }
})