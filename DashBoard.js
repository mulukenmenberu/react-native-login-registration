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
import { ScrollView } from "react-native-gesture-handler";
import { Card, TextInput } from "react-native-paper";
import StarRating from 'react-native-star-rating-widget';

export default function DashBoard({ navigation }) {
  const [text, setText] = useState()
  const [rating, setRating] = useState(0);

  return (

    <View style={styles.container}>
      <View style={styles.topCard}>
        <Image 
        source={require('./assets/menu.png')} 
       
        style={{ tintColor: 'white',width:40,height:40, paddingTop:10, paddingLeft:15}}/>


        <View style={{paddingTop:5, paddingLeft:10}}>
            <Text style={{color:'white',fontSize:20}}>Header Note</Text>
            <Text style={{color:'white', marginTop:10}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </Text>
        </View>
      </View>
      <TextInput
            label="Search by anything"
            value={text}
            style={styles.textBox}
            right={<TextInput.Icon icon="search" />}
            underlineColorAndroid="transparent"
            onChangeText={text => setText(text)}
          />

<ScrollView
    vertical >
      <View style={styles.cards}>
          <Card style={styles.card}>
            <Text  style={{alignSelf:'center'}}>Men Casual Shoes</Text>
            <Image 
            source={require('./assets/shue1.jpeg')}
            style={{width:100, height:100, alignSelf:'center', marginTop:8}}
            />
            <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>$43</Text>
            <Text>$35 - contact suplier</Text>
             <StarRating
        rating={rating}
        starSize={20}
        style={{marginBottom:-1}}
        onChange={setRating}
      />
          </Card>
          <Text></Text>
          <Card style={styles.card}>
          <Text  style={{alignSelf:'center'}}>Men Casual Shoes</Text>
            <Image 
            source={require('./assets/shue2.png')}
            style={{width:110, height:100, alignSelf:'center', marginTop:8}}
            />
               <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>$43</Text>
            <Text>$35 - contact suplier</Text>
             <StarRating
        rating={rating}
        starSize={20}
        style={{marginBottom:-1}}
        onChange={setRating}
      />
          </Card>
      </View>

{/* CARD Two */}
<View style={styles.cards}>
          <Card style={styles.card}>
            <Text  style={{alignSelf:'center'}}>Men Casual Shoes</Text>
            <Image 
            source={require('./assets/shue1.jpeg')}
            style={{width:100, height:100, alignSelf:'center', marginTop:8}}
            />
               <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>$43</Text>
            <Text>$35 - contact suplier</Text>
             <StarRating
        rating={rating}
        starSize={20}
        style={{marginBottom:-1}}
        onChange={setRating}
      />
          </Card>
          <Text></Text>
          <Card style={styles.card}>
          <Text  style={{alignSelf:'center'}}>Men Casual Shoes</Text>
            <Image 
            source={require('./assets/shue2.png')}
            style={{width:110, height:100, alignSelf:'center', marginTop:8}}
            />
               <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>$43</Text>
            <Text>$35 - contact suplier</Text>
             <StarRating
        rating={rating}
        starSize={20}
        style={{marginBottom:-1}}
        onChange={setRating}
      />
          </Card>
      </View>
     
{/* CARD Three */}
<View style={styles.cards}>
          <Card style={styles.card}>
            <Text  style={{alignSelf:'center'}}>Men Casual Shoes</Text>
            <Image 
            source={require('./assets/shue1.jpeg')}
            style={{width:100, height:100, alignSelf:'center', marginTop:8}}
            />
               <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>$43</Text>
            <Text>$35 - contact suplier</Text>
             <StarRating
        rating={rating}
        starSize={20}
        style={{marginBottom:-1}}
        onChange={setRating}
      />
          </Card>
          <Text></Text>
          <Card style={styles.card}>
          <Text  style={{alignSelf:'center'}}>Men Casual Shoes</Text>
            <Image 
            source={require('./assets/shue2.png')}
            style={{width:110, height:100, alignSelf:'center', marginTop:8}}
            />
               <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>$43</Text>
            <Text>$35 - contact suplier</Text>
             <StarRating
        rating={rating}
        starSize={20}
        style={{marginBottom:-1}}
        onChange={setRating}
      />
          </Card>
      </View>

</ScrollView>

    </View>


  );
}
const styles = StyleSheet.create({
  cards:{
    padding:10,
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    height:'100%'
  },
  card:{
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    width: "48%",
    height: 200,
    padding:5,
    paddingLeft:10,
    backgroundColor: 'white',
    justifyContent:'space-between',
  },
  container: {
    height: "100%",
    backgroundColor: '#4D5656',
  },

  

  topCard: {

    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    width: "100%",
    height: "30%",
    backgroundColor: '#66CDAA'
  },

  textBox:{

    width:"90%",
    borderTopLeftRadius:20 ,
    borderTopRightRadius:20 ,
    borderBottomLeftRadius:20 ,
    borderBottomRightRadius:20,
    alignSelf:"center",
    marginTop:-50
  }
})