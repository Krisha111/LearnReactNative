// adding reducers to Increasecolor

import { View, Text } from 'react-native'
import React,{useReducer} from 'react'
import Increasecolorr from './Increasecolorr'

//state hse blue ,green and red
//action have type and payload

const reducer=(state,action)=>{
    switch(action.type){
        case 'red':
            return {...state,red:state.red+action.amount}
        case 'blue':
            return {...state,blue:state.blue+action.amount}
        case 'green':
            return {...state,green:state.green+action.amount}
        default:
            return state

    }
}

export default function Reducers() {
  const [state,dispatch]=useReducer(reducer,{red:0,blue:0,green:0})
  const increase_value=15

  return (
    <View>
<Increasecolorr 
color="Red" 
onIncrease={()=>dispatch(type="red",payload=15)} 
onDecrease={()=>dispatch(type="red",payload=-15)}/>
<Increasecolorr 
color="Blue" 
 onIncrease={()=>dispatch(type="blue",payload=15)}
  onDecrease={()=>dispatch(type="blue",payload=-15)}/>
<Increasecolorr 
color="Green" 
 onIncrease={()=>dispatch(type="green",payload=15)} 
 onDecrease={()=>dispatch(type="green",payload=-15)}/>
 <View style={{height:100,width:100,backgroundColor:`rgb(${red},${green},${blue})`}}/>
    </View>
  )
}