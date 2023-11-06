import { Button, StyleSheet, Text, TouchableOpacity, View ,TextInput, Alert} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'

const Productlogin = () => {
  // const[user,setUser]=useState('')
  const[email,setEmail]=useState('')
  const [pass,setPass]=useState('')
  const Handle=()=>{
    if(email!== '' && pass!== ''){
      auth().signInWithEmailAndPassword(email,pass).then(response=>{
        const user=response.user
        console.log(user.email)
        console.log(user.pass)
        navigation.navigate('Productapi')
      })
      .catch(error=>alert(error.message))
      
    }
    else{
      Alert.alert('incorrect password')
    }
  }
  // console.log('User:', username);
  // console.log('Pass':, password);
    const navigation=useNavigation()
    

  return (

    <><View style={{ flex: 1, backgroundColor: 'white' }}>
      
      <TextInput
        style={styles.inputText}
        placeholder="email"
        placeholderTextColor="white"
        value={email}
        onChangeText={(text) => setEmail(text)} />
    {/* </View><View style={styles.inputView}> */}
      {/* <Text>{pass}</Text> */}
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="white"
          value={pass}
          onChangeText={(text) => setPass(text)} />
          {/* </View><View style={{height:30,marginVertical:100}}> */}

        <TouchableOpacity style={styles.loginbtn}

          onPress={Handle}>
          <Text style={styles.log}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate('signup')}
      >
        <Text style={{color:'black',justifyContent:'center',alignSelf:'center',marginTop:60,textDecorationLine:'underline',}}>Sign Up</Text>
      </TouchableOpacity>

      

      </View></>
  )
}

export default Productlogin

const styles = StyleSheet.create({
    loginbtn:{
        
            width: '40%',
            backgroundColor: '#003f5c',
            borderRadius: 25,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 300,
            marginBottom: 10,
            alignSelf:'center',
            textAlign:'center',
            fontFamily:'Poppins-Black',
            
            
    },
    log:{
        justifyContent:'center',
        alignItems:'center',
        color:'white',
        
    },
    inputText:{
      width: '60%',
            backgroundColor: '#003f5c',
            borderRadius: 25,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 80,
            // marginBottom: 1,
            alignSelf:'center',
            textAlign:'center',
            // borderWidth:5
            // fontFamily:'Poppins-Black',
            
    },
    
    inputView: {
      width: '40%',
      alignSelf:'center',
      // backgroundColor: '#465881',
      // borderRadius: 25,
      height: 1,
      marginBottom: 60,
      justifyContent: 'center',
      // padding: 20,

    },
})