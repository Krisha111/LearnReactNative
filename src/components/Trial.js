import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TouchableOpacity, View,Button } from 'react-native';

export default function Trial() {
  //NOTE-------KEY SHOULD BE UNIQUE AND THE VALUE OF KEY SHOULD NOT BE A NUMBER BUT IT SHOULD BE A STRING 
  //THAT MEANS IF THE KEY IS A NUMBER IT SHOULD BE IN QUOATATION MARKS


  // this is one way of solving the key issue in which u assign key to every object
  // const friends=[
  //   {name:"friends#1",key:"1"},
  //   {name:"friends#2",key:"2"},
  //   {name:"friends#3",key:"3"},
  //   {name:"friends#4",key:"4"},
  //   {name:"friends#5",key:"5"},
  //   {name:"friends#6",key:"6"},
  // ]
  const friends=[
    //if u want to display other properties here for example age u can just add it by using comma
    {name:"friends#1",age:20},
    {name:"friends#2",age:21},
    {name:"friends#3",age:22},
    {name:"friends#4",age:23},
    {name:"friends#5",age:24},
    {name:"friends#6",age:25},
    {name:"friends#7",age:26},
    {name:"friends#8",age:27},
    {name:"friends#9",age:28},
  ]
  return (
    <View style={styles.container}>
      
      {/* we can do less customization in button and it comes with prebuilt styling
      button is primitive element means it comes prebuilt with react-native */}
      <Button title="Go to HII" 
      onPress={()=>console.log("Button pressed")}/>

     {/* we can do more customization (can add more styling )in touchableopacity 
      button is primitive element means it comes prebuilt with react-native */}
      <TouchableOpacity 
      onPress={()=>console.log("Touchableopacity pressed")}>
        <Text>Go to Components</Text>
        </TouchableOpacity>


      {/* FlatList is used to display list of items in an array. Each element in the array is refered to as items in 
      flatlist */}
      <FlatList data={friends} 
      //the list will be set to vertical bydefault but if u want to show that horizontally u can write
      //horizontal={true} or just write horizonal in the FlatList

      //if the list becomes long then u can use this

      // horizontal={true}
      // showsHorizontalScrollIndicator={false}


      //second way to solve the  key issue is to write keyExtractor
      //here name is unique in our friends array 
      keyExtractor={(friend)=>friend.name}
      renderItem={({item})=>{
        // donot forget to write return here 
        // flatlist works similar like maps(REACTJS) in react native 
        return(
          <View>
          <Text>{item.name} - Age : {item.age}</Text>
          <Text>Krisha</Text>
        </View>
        )
       
      }}/>
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
