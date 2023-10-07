import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

//this will ignore all its siblings and will take all space of the container

export default function Filloutfullobject() {
  return (
    <View>
      <Text style={StyleSheet.textOneView}>Container1</Text>
      <Text style={StyleSheet.textTwoView}>Container2</Text>
      <Text style={StyleSheet.textThreeView}>Container3</Text>
    </View>
  )
}

// const styles=StyleSheet.create({
//     textTwoView:{
//         position:"absolute",
//         top:0,
//         bottom:0,
//         right:0,
//         left:0
//     }
// })

//-----or--------
const styles=StyleSheet.create({
    textTwoView:{
       ...StyleSheet.absoluteFillObject
       //this property will do the same thing as when happened when all the above properties are combined
    }
})



