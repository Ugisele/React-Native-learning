import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    margin: 0,
    padding: 0,
    
  },
  navbar: {
    width: '88%',
    height: 100,
    backgroundColor: "orange",
    flex: 3,
    
 },
 text1: {
    fontSize: 30,
    padding: 15,
    fontWeight: "bold"
       
 
 },
  box: {
    width: '88%',
    flex: 4,
    height: 180,
    marginTop:5,
    
    
  },
  text: {
    fontSize: 20,
    padding: 15,
       
  },
  box1:{
    width: '95%',
    flex: 1,
    marginTop:5,

  },
  textInput:{
    borderBottomWidth: 1,
    borderBottomColor: "red",

  },
  button:{
    flex: 0.3,
    backgroundColor: "orange",

  },
  input: {
    width: "99%",
    height: 80,
    margin:15,
    backgroundColor: "white",
    borderRadius: 5,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "black",
    

  },
});
