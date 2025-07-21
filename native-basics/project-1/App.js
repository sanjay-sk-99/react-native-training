import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button,TextInput , ScrollView, FlatList } from 'react-native';

export default function App() {
  const [count,setCount]=useState(0)
  const [text,setText]=useState("")

  const letters =  [
  'a', 'b', 'c', 'd', 'e', 'f', 'g',
  'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u',
  'v', 'w', 'x', 'y', 'z'
];

const mapped = letters.map((val,i)=>({letterText:val,key:i}))

 

  return (
    <View style={styles.container}>
       <StatusBar style="auto" />
       {/* <View style={styles.text}>
          <Text >hi Sanjay </Text>
          <Native name={"Native"}/>
          <Text>Count : {count}</Text>
          <Button title='click' onPress={()=>setCount(prv=>prv+1)}/>
       </View> */}

      {/* <TextInput onChangeText={(newText)=>setText(newText)}  placeholder='enter your name' />
        <Text>{text}</Text> */}  

       {/* <ScrollView>

        {letters.map((val,i)=><Text style={styles.text} key ={i}>{val}</Text>)}
       </ScrollView> */}

       <FlatList
        data={mapped}
        renderItem={({item})=><Text style={styles.text}>{  item.letterText}</Text>}
       
       />

       
    </View>
  );
}  

const Native=({name})=>{
  return <Text>{`i am learning ${name}`}</Text>
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
    backgroundColor: '#fff',
    justifyContent:"center",
    alignItems:"center"
  },   
  text:{
     paddingBottom:40
  }
});
