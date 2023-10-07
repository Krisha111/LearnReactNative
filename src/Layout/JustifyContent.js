import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

//this property is applied on parent
//center,flex-end,flex-start,space-around,space-between

export default function JustifyContent() {
  return (
    <View>
      <Text style={styles.styleView}>JustifyContent</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    styleView:{
        justifyContent:"space-around"
    }
})