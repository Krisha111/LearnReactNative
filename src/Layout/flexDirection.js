import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

//row,column
//this property is applied on parent

export default function flexDirection() {
  return (
    <View>
      <Text style={styles.viewStyle}>flexDirection</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    viewStyle:{
        flexDirection:"row"
    }
})