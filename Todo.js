import React from "react";
import { View,Text,TextInput,Button,StatusBar} from "react-native";
import {styles} from "./style";


 const Todos = () =>{
    return (
        <View style={styles.container}>
        <View style={{backgroundColor:"orange" ,marginTop:45, justifyContent:"flex-end", alignItems:"flex-end", width: "100%", flex:0.7,}}>
          <Text style={{color:"white",fontSize: 30, fontWeight: "bold"}}>TO DO</Text>
          </View>
          
       <View style={styles.box}>
       <Text style={styles.text1}>Todo list Items</Text>
       <View style={styles.input}>
       <Text style={styles.text}>1 Cleaning</Text>
       </View>
       <View style={styles.input}>
       <Text style={styles.text}>1 Cleaning</Text>
       </View>
       <View style={styles.input}>
       <Text style={styles.text}>1 Cleaning</Text>
       </View>
       <View style={styles.input}>
       <Text style={styles.text}>1 Cleaning</Text>
       </View>
  
       </View>
       <View style={styles.box1}>
       
        <TextInput placeholder= "Enter new todo item" style={styles.textInput}/>
        
         <Button title='ADD TO DO' style={styles.button} />
        <StatusBar style="auto" />
        </View>
      </View>
    );
  }

  export default Todos;
