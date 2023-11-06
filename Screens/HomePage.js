import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, } from 'react-native'
import React, { useEffect, useState } from 'react'
import Notification from '../assets/images/Notification.svg'
import DreamText from '../assets/images/DreamText.png'
import DreamSearch from '../assets/images/DreamSearch.svg'

import SubCarousel from '../components/SubComponent/SubCarousel'
import SubFeature from '../components/SubComponent/SubFeature'
import SubProduct from '../components/SubComponent/SubProduct'

const HomePage = () => {
  const data=[SubCarousel,SubFeature,SubProduct]

 
  return (
    <><View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ backgroundColor: 'white', height: 50, width: '10%', flexDirection: 'row', justifyContent: 'flex-start' }}>
        <Image source={DreamText} style={{ height: 24, width: 150, marginTop: 5 }} />
        <TouchableOpacity>
          <DreamSearch width={20} height={20} marginLeft={180} top={10} />
          <Notification width={20} height={20} marginLeft={210} bottom={10} />
        </TouchableOpacity>
      </View>
      <ScrollView >
      <SubCarousel/>
      <SubFeature/>
      <SubProduct/>
      </ScrollView>
      
    </View>
    
   
      </>

     
   
    
  )
}












const styles = StyleSheet.create({
 
 
})
export default HomePage

