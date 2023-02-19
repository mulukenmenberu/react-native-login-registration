import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { Card, TextInput } from "react-native-paper";

export default function Register({ navigation }) {
  const [fullname, setFullName] = useState('')
  const [email, setEmil] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setcPassword] = useState('')
  const [error,setError] = useState({field:'',error:''})

  const doRegister = () => {
    setError({field:'',error:''})
     if(fullname==''){
      const e = {error:'',message:''}
      e.field='fullname'
      e.message ='fullname is required'
      setError(e)
      
    }
    else if(email==''){
      const e = {error:'',message:''}
      e.field='email'
      e.message ='please enter a valid email'
      setError(e)
      
    } else if(password==''){
      const e = {error:'',message:''}
      e.field='password'
      e.message ='password is required'
      setError(e)
      
    }
    else if(cpassword==''){
      const e = {error:'',message:''}
      e.field='cpassword'
      e.message ='password is required'
      setError(e)
      
    }else if(password!=cpassword){
      const e = {error:'',message:''}
      e.field='cpassword'
      e.message ='password and confirm password should be the same'
      setError(e)
      
    }
    else if(email !='' && password!=''){
      axios.post('http://0.0.0.0:5000/',{fullname,email,password})
      .then((res)=>{
        console.log(res)

      })
      .catch(error => console.log(error));

    }

  }
  return (
    <View style={styles.container}>
      <View style={styles.topCard}></View>

      <Card style={styles.registerCard} >

        <View style={{ marginLeft: 30, marginRight: 30 }}>
          <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 40 }}>Register</Text>
          <TextInput
            label="Full Name"
            value={fullname}
            style={styles.textBox}
            right={<TextInput.Icon icon="account" />}
            underlineColorAndroid="transparent"
            onChangeText={text => setFullName(text)}
          />
                {error.field=='fullname'&&(
          <Text style={{color:'red'}}>{error.message}</Text>
        )}

                <TextInput
            label="Email"
            value={email}
            style={styles.textBox}
            right={<TextInput.Icon icon="email" />}
            underlineColorAndroid="transparent"
            onChangeText={text => setEmil(text)}
          />
                {error.field=='email'&&(
          <Text style={{color:'red'}}>{error.message}</Text>
        )}
                <TextInput
            label="Password"
            value={password}
            style={styles.textBox}
            secureTextEntry
            right={<TextInput.Icon icon="eye" />}
            underlineColorAndroid="transparent"
            onChangeText={text => setPassword(text)}
          />
                {error.field=='password'&&(
          <Text style={{color:'red'}}>{error.message}</Text>
        )}
          <TextInput
            label="Confirm Password"
            style={styles.textBox}
            value={cpassword}
            secureTextEntry
            underlineColorAndroid="transparent"
            right={<TextInput.Icon icon="eye" />}
            onChangeText={text => setcPassword(text)}
          />
                {error.field=='cpassword'&&(
          <Text style={{color:'red'}}>{error.message}</Text>
        )}
        
          <TouchableOpacity style={styles.button} onPress={() => doRegister()}>
            <Text style={{ color: '#fff', fontSize: 15 }}>Sign Up</Text>
          </TouchableOpacity>
          <Text style={{color:'#fff', alignSelf:'center'}}>Continue With</Text>
       <View style={{flexDirection:'row', paddingVertical:20, alignSelf:'center'}}>
       <TouchableOpacity>
            <View style={{width:50, margin:10, height:50, borderRadius:50/2, backgroundColor:'#045DB6', justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'white', fontSize:30, padding:1}}>f</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{width:50, margin:10,height:50, borderRadius:50/2, backgroundColor:'#fff', justifyContent:'center', alignItems:'center'}}>
                <Image 
                style={{width:40,height:40, padding:0}}
                source = {require('./assets/google.webp')}
                />
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{width:50, margin:10, height:50, borderRadius:50/2, backgroundColor:'#045DB6', justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'white', fontSize:30, padding:1}}>in</Text>
            </View>
            </TouchableOpacity>
       </View>

        </View>
      </Card>



    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: '#4D5656',
    // alignItems: 'center',
    // justifyContent: 'center'
  },

  registerCard: {
    backgroundColor: '#2C3539',
    width: '90%',
    height: "80%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    // justifyContent: "center",
    // alignContent: "center",
    // marginTop:
    alignSelf:'center',
    marginTop:-190

  },

  topCard: {

    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    width: "100%",
    height: "40%",

    backgroundColor: '#66CDAA'
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
  textBox:{
    marginTop: 10,
    borderTopLeftRadius:20 ,
    borderTopRightRadius:20 ,
    borderBottomLeftRadius:20 ,
    borderBottomRightRadius:20,
  }
})