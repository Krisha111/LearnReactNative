import { View, Text } from 'react-native'
import React,{useState} from 'react'
import Increasecolorr from './Increasecolorr'

export default function Increasecolor() {
  const [red,setRed]=useState(0)
  const [green,setGreen]=useState(0)
  const [blue,setBlue]=useState(0)
  const increase_value=15
  // const krisha=(color,change)=>{
   
  //     if(color===red){
  //       if(red+change>255 || color+change<0){
  //         return;
  //       }
  //       else{
  //         return setRed(color+increase_value)
  //       }
  //     }
  // }

  // using if is good but using switch is better

  const krisha=(color,change)=>{
    switch(color){
      case red:
        return (red+change>255 || red + change <0)?null:setRed(red+change)
      case blue:
        return (blue+change>255 || blue + change <0)?null:setBlue(blue+change)
      case green:
        return (green+change>255 || green + change <0)?null:setGreen(green+change)
        default:
          return
    }
    
    
  }
  
  return (
    <View>
<Increasecolorr 
color="Red" 
onIncrease={()=>krisha(red,increase_value)} 
onDecrease={()=>krisha(red,-1*increase_value)}/>
<Increasecolorr 
color="Blue" 
 onIncrease={()=>krisha(blue,increase_value)}
  onDecrease={()=>krisha(blue,-1*increase_value)}/>
<Increasecolorr 
color="Green" 
 onIncrease={()=>krisha(green,increase_value)} 
 onDecrease={()=>krisha(green,-1*increase_value)}/>
 <View style={{height:100,width:100,backgroundColor:`rgb(${red},${green},${blue})`}}/>
    </View>
  )
}