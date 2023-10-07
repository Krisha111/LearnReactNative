import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, Text } from 'react-native'
import List from './src/components/List'
import Trial from './src/components/Trial'
import Counter from './src/components/Counter'
import React from 'react'
import Colorapp from './src/components/Colorapp'
import Increasecolor from './src/components/Increasecolor'
const Stack=createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Trial" component={Trial}/> */}
        {/* <Stack.Screen name="Counter" component={Counter}/> */}
        {/* <Stack.Screen name="Colorapp" component={Colorapp}/> */}
        <Stack.Screen name="Increasecolor" component={Increasecolor}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}