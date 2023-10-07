import { View, Text ,Image} from 'react-native'
import React from 'react'

export default function Imagee(props) {
  return (
    <View>
        <Image source={props.imagesrc}/>
      <Text>Image</Text>
      <Text>{props.title}</Text>
      <Text>Score is {props.score}</Text>
    </View>
  )
}