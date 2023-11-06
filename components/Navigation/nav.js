/* eslint-disable prettier/prettier */
import * as React from 'react';
// import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screen
import HomeScreen  from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SettingScreen from '../screens/SettingScreen';

//SCREEN NAME
const homeName='Home';
const detailsName='Details';
const SettingNAme='settings';

const Tab=createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            {/* <Tab.Navigator>
                               
            </Tab.Navigator> */}
            
        </NavigationContainer>
        
    );
}