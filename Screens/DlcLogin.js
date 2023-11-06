import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Code from '../assets/images/Code.svg'
import Check from '../assets/images/Check.svg'
import Eye from '../assets/images/Eye.svg'
const DlcLogin = () => {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <View style={{height:100,width:'60%',justifyContent:'center',alignItems:'center',backgroundColor:'white',alignSelf:'center',margin:'20%'}}>
        <Code Left={20}></Code>
        </View>
          <View style={{height:'10%',width:'90%',backgroundColor:'white',marginHorizontal:10}}>
        <Text style={{fontSize:16,fontWeight:'bold',color:'black'}}>Welcome back</Text>
        <Text style={{color:'black',}}>rtghgffc</Text>
        </View>  
        <View style={{height:'10%',width:'90%',backgroundColor:'white',marginVertical:10,marginHorizontal:10}}>
            <Text style={{color:'black',fontWeight:'bold'}}>Username</Text>
            <View style={{height:40,width:'98%',borderWidth:1,borderRadius:5,marginVertical:3,marginHorizontal:6,}}>
                <View style={{justifyContent:'flex-end',alignItems:'flex-end',}}>
                <Check margin={10}></Check>
                </View>

            </View>
        </View>
       
 <View style={{height:'10%',width:'90%',backgroundColor:'white',marginVertical:10,marginHorizontal:10}}>
            <Text style={{color:'black',fontWeight:'bold'}}>Password</Text>
            <View style={{height:40,width:'98%',borderWidth:1,borderRadius:5,marginVertical:3,marginHorizontal:6,}}>
                <View style={{justifyContent:'flex-end',alignItems:'flex-end',}}>
                <Eye margin={10}/>
                </View>
                
            </View>
        </View>
       
        <View style={{height:60,width:'90%',borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'darkviolet',alignSelf:'center',marginVertical:100}}>
            <Text style={{justifyContent:'center',alignItems:'center',fontSize:18,color:'white'}}>Log In</Text>
        </View>
    </View>
  )
}

export default DlcLogin

const styles = StyleSheet.create({})