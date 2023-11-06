import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'

const Productapi = () => {
  const navigation=useNavigation();
  const [product, setProduct] = useState([]);
  const getProduct = () => {
    axios.get('https://fakestoreapi.com/products').then((response) => {
      console.log('process=>', response)
      setProduct(response.data)
    })
  }
  
  useEffect(() => {
    getProduct();
  }, []);


  return (

    
      <FlatList 
        data={product}
        numColumns={2}
        renderItem={({ item }) =>
          <TouchableOpacity  onPress={()=>navigation.navigate('Details',{item})}
          style={{ height: 120, width: '48%', marginVertical: 10, borderWidth: 3, alignSelf: 'center',marginHorizontal:3 }}>
            <Image source={{ uri: item.image }} style={{ height: '50%', width: '55%',resizeMode:'stretch', marginBottom: 1 ,alignSelf:'center'}} />
            {/* <View style={{ marginBottom: 25, borderWidth: 3, borderColor: 'red', borderRadius: 4, width: '45%', height: 45 }}> */}

              <Text style={{ color: 'black' }} numberOfLines={1}>{item.title}</Text>
              <Text style={{ color: 'blue' }} numberOfLines={1}> {item.description}</Text>
              <Text style={{ color: 'green' }} >{item.price}</Text>
            {/* </View> */}
          </TouchableOpacity>

          // </View>
        }
      />


  )
}

export default Productapi

const styles = StyleSheet.create({})