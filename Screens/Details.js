import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const Details = ({route}) => {
    const { item } = route.params;
  return (
    <View>
        <Text style={{color:'black'}}></Text>
      {/* <View style={{ height:220, width: '50%',  marginVertical: 10, borderWidth: 1,alignSelf:'center' }}> */}
            <Image source={{ uri: item.image }} style={{ height: '80%', width: '75%',resizeMode:'stretch', marginBottom: 1 ,alignSelf:'center'}} />
            <Text style={{ color: 'black',alignSelf:'center',fontFamily:'Poppins-Black',}}>{item.title}</Text>
            <Text style={{ color: 'blue',alignSelf:'center' }} numberOfLines={1}> {item.description}</Text>
            <Text style={{ color: 'green',alignSelf:'center',fontFamily:'Poppins-Black' }} >{item.price}</Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})