import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
// import { TouchableOpacity } from "react-native-gesture-handler";

const {width, height}= Dimensions.get('screen')
const COLOR ={
    primary:'red',
    title:'green'
}
const slides = [
    {
        id:1,
        title:"Lorem Ipsum",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at blandit est. In a velit accumsan, finibus nisi ornare, commodo libero.",
        image:require('./assets/login.webp')
    },
    {
        id:2,
        title:"Lorem Ipsum",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at blandit est. In a velit accumsan, finibus nisi ornare, commodo libero.",
        image:require('./assets/login.webp')
    },
    {
        id:3,
        title:"Lorem Ipsum",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at blandit est. In a velit accumsan, finibus nisi ornare, commodo libero.",
        image:require('./assets/login.webp')
    },
]
export default function IntroSlide({navigation}) {
  
  return (
<AppIntroSlider 
data={slides}
renderItem={({item})=>{
    return(
        <View style={{
            flex:1,
            alignItems:'center',
            padding:15,
            paddingTop:100,
            backgroundColor:'#fff'
        }}>
            <Image
            source={item.image}
             style={{
                width:width-80,
                height:300,
            }}
            resizeMode='contain'
            />
            <Text style={{marginTop: -50,fontSize:40,color:'#66CDAA', fontWeight:'bold'}}>{item.title}</Text>
            <Text>{item.description}</Text>
            {
            item.id==3?

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Auth')}>
            <Text style={{ color: '#fff', fontSize: 15 }}>Continue</Text>
          </TouchableOpacity> : ""

            }
            
        </View>
    )
}}
activeDotStyle={{backgroundColor:'#66CDAA', width:30}}
// renderNextButton={()=>(
//     <View>
//         <Text>Next</Text>
//     </View>
// )}
// renderSkipButton ={()=>(
//     <View>
//         <Text>Skip</Text>
//     </View>
// )}
showSkipButton
renderDoneButton ={()=>{
    <View>
    <Text>Done</Text>
</View>
}}
onDone={()=>{Alert.alert("uhuyh")}}
// onDone={() => navigation.navigate("Auth")}

/>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#66CDAA',
    margin: 15,
    height: 50,
    width: 200,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 45
  },
});