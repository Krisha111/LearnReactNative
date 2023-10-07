import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

//values----center,flex-start,flex-end,stretch(default value)
//this property is applied on parent

export default function AlignItems() {
  return (
    <View>
      <Text style={styles.viewStyle}>AlignItems</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    viewStyle:{
        alignItems:"center"
    }
})