import  React  from 'react'
import { TextInput, Pressable, View, Button, Text, TouchableOpacity,StyleSheet} from "react-native";
import { CheckBox} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import Fontisto from'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';



 const First_screen = () =>{
    return(

<View style={Styles.container}>
    <View style={{marginBottom: 20}}>
        {/* <FontAwesome name="mail" size={30} /> */}
        <Entypo name='cross'size={30} marginTop={10}/>
    </View>
    {/* <Entypo name="squared-cross"/> */}
    <View style={Styles.heading}>
    <Text style={Styles.h1}>SIGN IN</Text>
    <Text style={Styles.text}>Welcome back! Please enter your details </Text>
    </View>

    <View >
      
        <View style={Styles.input}>
            <Fontisto name='email' size={25} color={'purple'} backgroundColor={'#f7f2f5'} height={30} width={30} borderRadius={50}/> 
             <TextInput placeholder='example@gmail.com'/>
        </View>
        <View style={Styles.input}>
             <Fontisto name='locked' size={25} color={'#1690fa'} backgroundColor={'#f7f2f5'} height={30} width={30} borderRadius={50}/> 
             <TextInput placeholder='**********' type='passwords'/>
             
        </View>
        
        <CheckBox title="Remember Me"/>
      
      <View>
        <TouchableOpacity style={Styles.opacity}>
            <Text style={{color: '#1690fa', marginBottom: 20}}>Forget PassWord</Text>
        </TouchableOpacity>
        
      </View>
      <TouchableOpacity>
      <Pressable style={Styles.opacitySignin}>
      <Text style={Styles.opacitySigninText}>Sign in</Text>
    </Pressable>
         {/* <Button title='Sign In' style={{width:'50%'}}/> */}
      </TouchableOpacity>
   
    </View>
    <View style={Styles.create}>
        <Text style={{color: '#1690fa'}}>Create account </Text>

    <Pressable style={Styles.btnsignup}>
      <Text style={Styles.text1}>Sign in</Text>
    </Pressable>
    </View>

    <View style={Styles.icons}>
        <TouchableOpacity style={Styles.iconimgf}>
            <Icon name='facebook'size={25}/>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.iconimgg}>
          <Icon name='google'size={25}/> 
        </TouchableOpacity >
        <TouchableOpacity style={Styles.iconimga}>
          <Icon name='apple'size={25}/> 
        </TouchableOpacity>
    </View>
    
</View>
    )
}
export default First_screen;

const Styles = StyleSheet.create({
    container: {
        // backgroundColor: '#f7f7da',
        marginTop: 40,
        margin:5,
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    h1:{
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 'bold',
        
    },
    text:{
        textAlign: 'center',
        marginBottom: 30,
    },
    input:{
        borderWidth: 1,
        marginTop: 15,
        padding: 15,  
        borderRadius: 10,    
        flexDirection: 'row',
        gap: 10,
        display: 'relative',
    },
   
    opacity:{
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 100,
    },
    opacitySignin:{
        width:'100%',
        backgroundColor:'#1690fa',
        height: 60,
        justifyContent: 'center',
        borderRadius: 100,
    },
    opacitySigninText:{
        color:'white',
        textAlign: 'center',
    },
   create:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop: 30,
   },
   btnsignup:{
    backgroundColor: '#f7f2f5',
    borderRadius: 10,
    padding: 5,
    width: 100,
    marginRight: 5,
    

   },

   text1:{
    color: 'orange',
    textAlign: 'center',
   },
   icons:{
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    borderRadius: 100,
    padding: 10,
    marginTop: 50,
    justifyContent:'space-around',
    
   },
   iconimgf:{
    width: 40,
    height: 40,
    marginRight: 10,
    backgroundColor: 'white',
    color:'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
   },
   iconimgg:{
    width: 40,
    height: 40,
    marginRight: 10,
    backgroundColor: 'white',
    color:'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
   },
   iconimga:{
    width: 40,
    height: 40,
    marginRight: 10,
    backgroundColor: 'white',
    color:'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
   },
})