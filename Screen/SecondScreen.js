import React from "react"
import { View,Text } from "react-native";
// import Entypo from 'react-native-vector-icons/Entypo';
import { TextInput } from 'react-native-papers';


const Second_screen = () =>{
    return (

    
        <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 1, backgroundColor: 'red'}} />
      <View style={{flex: 2, backgroundColor: 'darkorange'}} />
      <View style={{flex: 3, backgroundColor: 'green'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
            
    

export default Second_screen;