import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer, StackActions} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomePage from './src/HomePage';
import LoginPage from './src/LoginPage';
import RegisterPage from './src/RegisterPage';


const Stack= createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginPage">
        <Stack.Screen name='LoginPage' component={LoginPage}/>
        <Stack.Screen name='HomePage' component={HomePage}/>
        <Stack.Screen name='RegisterPage' component={RegisterPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App