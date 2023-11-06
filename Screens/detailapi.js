import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const detailapi = ({ route }) => {
    const { item } = route.params
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <Text style={{ color: 'blue', fontsize: 14 }}>{item?.PostOffice[1].Circle}</Text>
            <Text style={{ color: 'blue', fontsize: 14 }}>{item?.PostOffice[1].District}</Text>
      
    </View>
    )
}

export default detailapi

const styles = StyleSheet.create({})