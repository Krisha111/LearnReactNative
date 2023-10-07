import { View, Text,Button } from 'react-native'
import React,{useReducer} from 'react'

const reducer=(state,action)=>{
    switch(action.type){
        case "increase":
            return {...state,counter:state.counter+action.payload}
        case "decrease":
            return {...state,counter:state.counter+action.payload}
        default:
            return state
    }
}

export default function Setcounterreducer() {
    // const [counter,setCounter]=useState(0)
    const {state,dispatch}=useReducer(reducer,{counter:0})
 
  return (
    <View>
     {/* in onpress be carefult about the brackets
     first curly then a function callback
     then a curly then dispatch
     simple bracket then curly  */}
    <Button 
    title='Increase' 
    onPress={()=>{
        dispatch({type:"increase",payload:1})
    }}/>
    <Button title='Decrease'onPress={()=>{dispatch({type:"decrease",payload:1})}}/>
    <Text>{state.counter}</Text>
  </View>
  )
}