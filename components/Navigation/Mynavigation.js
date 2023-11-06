// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const Mynavigation = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('mydetail')}
      />
    </View>
  );
};

export default Mynavigation;
