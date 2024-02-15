import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ImageGallery = () => {
    return (

        <View style={Styles.container}>
            <ScrollView>

    
            <StatusBar style="auto"/>
            <View style={Styles.nav}>
                <TouchableOpacity style={Styles.arrowicon}>
                    <MaterialCommunityIcons name="arrow-left" style={Styles.leftArrow} />
                </TouchableOpacity>
                <Text style={Styles.text}>Text to image</Text>
                <TouchableOpacity>
                    <Entypo name="dots-three-vertical" style={Styles.Dots} />
                </TouchableOpacity>
            </View>
            <View style={Styles.card}>
                <Image source={require('../assets/cat.webp')} style={{width: 180, height: 180}}/>
                <Image source={require('../assets/great-white.webp')} style={{width: 180, height: 180}}/>
                <Image source={require('../assets/cat.webp')} style={{width: 180, height: 180}}/>
                <Image source={require('../assets/onion.webp')} style={{width: 180, height: 180}} />
            </View>
            
            </ScrollView>
        </View>
        
    )
}

export default ImageGallery;

const Styles = StyleSheet.create({
    container: {
        marginTop:50,
        width: '100%',
        height: '100%',
        paddingVertical: '20%',
        paddingHorizontal: '5%',
    },
    nav:{
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    arrowicon:{
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1.4,

    },

    card:{
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        height: 'auto',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})