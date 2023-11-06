import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert} from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'

const Signup = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [user,setUser]=useState('')
  const Signup = () => {
    if (email !== '' && Password !== '') {
      auth().createUserWithEmailAndPassword(email, Password)
        .then(response => {
          const user = response.user
          console.log(user.email)
          console.log(user.Password)
          navigation.navigate('Productlogin')
        })
        .catch(error => alert(error.message))

    }
    else {
      Alert.alert('something went wrong')
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
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
        value={Password}
        onChangeText={(text) => setPassword(text)} />
        <TextInput
        style={styles.inputText}
        placeholder="username"
        placeholderTextColor="white"
        value={user}
        onChangeText={(text) => setUser(text)} />
        
      <TouchableOpacity style={styles.sign}

        onPress={Signup}>
        <Text style={styles.txt}>Signup</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  inputText: {
    width: '60%',
    backgroundColor: '#003f5c',
    borderRadius: 25,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    // marginBottom: 1,
    alignSelf: 'center',
    textAlign: 'center',
  },
  sign: {
    fontFamily: 'Poppins - Black',
    backgroundColor:'blue',
    width:'20%',
    height:50,
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center',
    marginTop:200,
    borderRadius:20,
    textAlign:'center'


  },
  txt:{
    justifyContent:'center',
    alignItems:'center',
  }

})