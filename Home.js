import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./Register";
import Auth from "./Auth";
import DashBoard from "./DashBoard";
import IntroSlide from './IntroSlide'
export default function Home() {
  const stack = createNativeStackNavigator();

  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="IntroSlide" component={IntroSlide} />
      <stack.Screen name="Auth" component={Auth} />
      <stack.Screen name="Register" component={Register} />
      <stack.Screen name="DashBoard" component={DashBoard} />
    </stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});