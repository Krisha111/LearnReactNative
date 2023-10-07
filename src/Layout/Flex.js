//this prperty is applied on child

import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function Flex() {
  return (
    <View>
      <Text style={styles.textStyleOne}>Flex1</Text>
      <Text style={styles.textStyleTwo}>Flex2</Text>
      <Text style={styles.textStyleThree}>Flex3</Text>
    </View>
  )
}

// const styles=StyleSheet.create({
//     textStyleOne:{
//         flex:1
//     },
//     textStyleTwo:{
//         flex:1
//     },
//     textStyleThree:{
//         flex:1
//     }
// })

//------OR----------

//this will give 40% space to 1 and 2 and 20% space to 3 if we add
//4,4,2 = 10 and compare it with 100%

const styles=StyleSheet.create({
    textStyleOne:{
        flex:4
    },
    textStyleTwo:{
        flex:4
    },
    textStyleThree:{
        flex:2
    }
})