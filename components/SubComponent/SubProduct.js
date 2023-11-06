import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect,useContext } from 'react'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import {Context} from '../Context/ContextApi'
const SubProduct = () => {
    const { data } = useContext(Context);
    const navigation = useNavigation()
    const [cart,setCart]=useState([])
    // const [product, setProduct] = useState([])
    // const getproduct = () => {
    //     axios.get('https://fakestoreapi.com/products').then((res) => {
    //         console.log('pro=>', res)
    //         setProduct(res.data)
    //     })
    // }
    // useEffect(() => {
    //     getproduct();
    // }, [])
    const addToCart = (item) => {
        setCart([...cart, item]);
      };
    const handle = ({ item }) => (


        <View style={{ height: 200, width: '100%', marginVertical: 34, }}>
            <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { item })}>
                <Image source={{ uri: item.image }} style={{ height: '80%', width: '65%', resizeMode: 'stretch', alignSelf: 'center', }} />

                <Text style={{ color: 'black', alignSelf: 'center' }} numberOfLines={1}> {item.description}</Text>
            </TouchableOpacity>

            <View style={{ height: 50, width: '100%', flexDirection: 'row', marginTop: 4 }}>
                <TouchableOpacity
                    style={{ height: 34, width: '40%', backgroundColor: 'grey', marginHorizontal: 25, borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}
                onPress={()=>[navigation.navigate('Cart'),addToCart(item)]}
                        // navigation.navigate('Cart')}
                    >

                    <Text style={{ color: 'blue', fontSize: 13 }}>Add to Cart</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ height: 34, width: '40%', backgroundColor: 'red', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 12 }}>BUY NOW</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
    return (
        <View style={{ height: '80%', width: '100%', backgroundColor: 'white' }}>
            <View style={{ height: '1%', width: '100%', backgroundColor: 'white', flexDirection: 'row', }}>
                <Text style={{ color: 'black', fontWeight: 'bold', marginHorizontal: 5 }}>our Best Product</Text>

                <Text style={{ color: 'black', fontSize: 9, left: 200, marginTop: 5 }}>View all</Text>

            </View>
            <View style={{ height: '300%', width: '100%', backgroundColor: 'white', marginBottom: 100 }}>
                <FlatList
                    data={data}
                    renderItem={handle}


                />
                {/* {product.map((item, index) => (
                    <View key={index}>{handle(item)}</View>
                ))}
               */}
            </View>




        </View>

    )
}

export default SubProduct

const styles = StyleSheet.create({})