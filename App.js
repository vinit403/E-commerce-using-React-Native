import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Src/Sceen/Login'
import Registration from './Src/Sceen/Registration'
import Home from './Src/InnerScreen/Home'
import Subcategory from './Src/Subcat/subcategory'
import Subcatinner from './Src/Subcat/Subcatinner'
import Product from './Src/InnerScreen/Product'
import Wishlist from './Src/InnerScreen/Wishlist';
import Cart from './Src/InnerScreen/Cart';
import Account from './Src/InnerScreen/Account';
import Splashscreen from './Src/Subcat/Splashscreen';
import Intro from './Src/InnerScreen/Intro';
import Details from './Src/Sceen/Details';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Mytabs = () => {
  return (
    <>
      <Tab.Navigator initialRouteName='Home' screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1589FF",
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
      }}  >
        <Tab.Screen name='Home' component={Home} options={{
          tabBarIcon: ({ color }) => (
            <Image source={require("./Image/house.png")} style={{ height: 25, width: 25, tintColor: color }} />
          ),
        }} />
        <Tab.Screen name='Wishlist' component={Wishlist} options={{
          tabBarIcon: ({ color }) => (
            <Image source={require("./Image/add.png")} style={{ height: 25, width: 25, tintColor: color }} />
          ),
        }} />
        <Tab.Screen name='Cart' component={Cart} options={{
          tabBarIcon: ({ color }) => (
            <Image source={require("./Image/shopping.png")} style={{ height: 25, width: 25, tintColor: color }} />
          ),
        }} />
        <Tab.Screen name='Account' component={Account} options={{
          tabBarIcon: ({ color }) => (
            <Image source={require("./Image/account.png")} style={{ height: 25, width: 25, tintColor: color }} />
          ),
        }} />
      </Tab.Navigator>
    </>
  )
}


const App = () => {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName="Login">
          <Stack.Screen name='Splashscreen' component={Splashscreen} />
          <Stack.Screen name='Intro' component={Intro} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Register' component={Registration} />
          <Stack.Screen name='Home1' component={Mytabs} />
          {/* <Stack.Screen name='subcategory' component={Subcategory} />
          <Stack.Screen name='Subcatinner' component={Subcatinner} />
          <Stack.Screen name='Product' component={Product} />
          <Stack.Screen name='Account' component={Account} />
          <Stack.Screen name='Details' component={Details} /> */}
          
        </Stack.Navigator>
        {/* <Mytabs />   */}
      </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})