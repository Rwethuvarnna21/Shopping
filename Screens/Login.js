/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigation=useNavigation()
  return (
    <View>
      <Text>Login</Text>
      <Button title='login here' onPress={()=> navigation.navigate('Home')}/>
        
     
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})