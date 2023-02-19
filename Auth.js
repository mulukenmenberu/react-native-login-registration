import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Card, TextInput } from "react-native-paper";

export default function Auth({ navigation }) {
  const [index, setActive] = useState(0)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error,setError] = useState({field:'',error:''})
  const setActivePage = (index)=>{
      setActive(index)
  }
  const doLogin =  ()=>{
    setError({field:'',error:''})
    if(email==''){
      const e = {error:'',message:''}
      e.field='email'
      e.message ='please enter a valid email'
      setError(e)
      
    } else if(password==''){
      const e = {error:'',message:''}
      e.field='password'
      e.message ='password is required'
      setError(e)
      
    }else if(email !='' && password!=''){
    axios.post('http://0.0.0.0:5000/',{email,password})
      .then((res)=>{
        console.log(res)

      })
      .catch(error => console.log(error));

    }
  }
if(index==1){
  return <>
   <View style={styles.containerLogin}>
      <View style={styles.topCardLogin}></View>

      <Card style={styles.loginCardLogin} >

        <View style={{ marginLeft: 30, marginRight: 30 }}>
          <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 40 }}>Log In</Text>
          <TextInput
            label="Email"
            value={email}
            style={styles.textBoxLogin}
            right={<TextInput.Icon icon="email" />}
            underlineColorAndroid="transparent"
            onChangeText={email => setEmail(email)}
          />
        {error.field=='email'&&(
          <Text style={{color:'red'}}>{error.message}</Text>
        )}
          <TextInput
            label="password"
            style={styles.textBoxLogin}
            value={password}
            secureTextEntry
            underlineColorAndroid="transparent"
            right={<TextInput.Icon icon="eye" />}
            onChangeText={text => setPassword(text)}
          />
        {error.field=='password' &&(
          <Text style={{color:'red'}}>{error.message}</Text>
        )}
          <TouchableOpacity style={styles.button} onPress={() => doLogin()}>
            <Text style={{ color: '#fff', fontSize: 15 }}>Log In</Text>
          </TouchableOpacity>
          <Text style={{ color: '#fff', alignSelf: 'center' }}>Forgot Password?</Text>
          <View style={{ flexDirection: 'row', margin: 20, paddingVertical: 20, alignSelf: 'center' }}>
            <TouchableOpacity>
              <View style={{ width: 50, margin: 10, height: 50, borderRadius: 50 / 2, backgroundColor: '#045DB6', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 30, padding: 1 }}>f</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ width: 50, margin: 10, height: 50, borderRadius: 50 / 2, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  style={{ width: 40, height: 40, padding: 0 }}
                  source={require('./assets/google.webp')}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ width: 50, margin: 10, height: 50, borderRadius: 50 / 2, backgroundColor: '#045DB6', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 30, padding: 1 }}>in</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </Card>


      <View style={styles.bottomCard}></View>
    </View>
  </>

}

else {
    return (
      <>

        <View style={styles.containerAuth}>
          <View style={styles.topCardAuth}></View>

          <Card style={styles.loginCardAuth} >
            <Image
              style={{ width: 100, height: 100, borderRadius: 100 / 2, alignSelf: 'center' }}
              source={require('./assets/login.webp')}
            />
            <Text style={{ color: 'white', paddingLeft: 10, paddingRight: 10, margin: 1 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            <View style={{ margin: 'auto', flexDirection: 'row', margin: 20, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>

              <TouchableOpacity onPress={() => setActive(1)} style={{ backgroundColor: '#66CDAA', padding: 10, width: 100, borderRadius: 30 }}>
                <Text style={{ textAlign: 'center', back: '#66CDAA' }}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{ backgroundColor: '#66CDAA', padding: 10, width: 100, borderRadius: 30, marginHorizontal: 10 }}>
                <Text style={{ textAlign: 'center', back: '#66CDAA' }}>Register</Text>
              </TouchableOpacity>
            </View>


          </Card>


          <View style={styles.bottomCard}></View>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  containerAuth: {
    flex: 1,
    backgroundColor: '#4D5656',
    // alignItems: 'center',
    marginTop: 0,
    justifyContent: 'center'
  },

  loginCardAuth: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#2C3539',
    width: '100%',
    height: "60%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    justifyContent: "center",
    alignContent: "center",
    margin: 'auto'

  },
  bottomCard: {
    // marginBottom:0,
    flex: 1,
    justifyContent: 'flex-end',
    borderTopRightRadius: 150,
    width: "60%",
    height: "5%",
    backgroundColor: '#66CDAA'
  },
  topCardAuth: {
    // marginBottom:0,
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    borderBottomLeftRadius: 150,
    width: "60%",
    height: "5%",
    alignSelf: 'flex-end',
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
  textBox: {
    marginTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  containerLogin: {
    flex: 1,
    backgroundColor: '#4D5656',
    // alignItems: 'center',
    marginTop: 0,
    justifyContent: 'center'
  },

  loginCardLogin: {
    backgroundColor: '#2C3539',
    width: '100%',
    height: "60%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    justifyContent: "center",
    alignContent: "center",

  },
  bottomCard: {
    // marginBottom:0,
    flex: 1,
    justifyContent: 'flex-end',
    borderTopRightRadius: 150,
    width: "60%",
    height: "5%",
    backgroundColor: '#66CDAA'
  },
  topCardLogin: {
    // marginBottom:0,
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    borderBottomLeftRadius: 150,
    width: "60%",
    height: "5%",
    alignSelf: 'flex-end',
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
  textBoxLogin: {
    marginTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
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