import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

//absolute,relative
//relative---this displays the object as they appear it will not make any changes
//absolute----it will ignore its siblings styleing and will only obey the styling of its parent
//but the style of stretch of parent will not be followed by that OF child which will have a position of 
//absolute

export default function Position() {
  return (
    <View>
      <Text style={styles.textStyle}>Position</Text>
    </View>
  )
}

const styles= StyleSheet.create({
    textStyle:{
        position:"absolute"
    }
})