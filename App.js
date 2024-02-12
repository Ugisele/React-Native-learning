import { StatusBar } from 'expo-status-bar';
import { Text, View, Button,TouchableOpacity, ActivityIndicator} from 'react-native';
import {styles} from "style";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello My World!</Text>
      <ActivityIndicator/>
      <Text>let's get started with react native and build something better than yesterday❤❤</Text>
      <TouchableOpacity style={styles.buttonPressMe}/>
      {/* // <Button title="Press Me" style={{padding: 2, backgroundColor: 'green'}}/> */}
      <StatusBar style="auto" />
    </View>
  );
}
