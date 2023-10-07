import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

//alignSelf----center,flex-end,flex-start,stretch
//this property is applied to child

export default function AlignSelf() {
  return (
    <View>
      <Text style={styles.textStyle}>AlignSelf</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    textStyle:{
        alignSelf:"flex-start"
    }
})