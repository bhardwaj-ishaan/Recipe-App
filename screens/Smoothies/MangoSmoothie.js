import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

export default class MangoSmoothie extends React.Component{
  render(){
    return(
      <View style = {{backgroundColor: "yellow"}}>
            <Text style ={{fontFamily: "Tino Devanagari Hindi", color: "black", fontSize: 20}}>

            Mango Smoothie: 
            Mango Smoothies are a very creamy and sweet. If you love sweet things, this one is especially for you! To make one, you need:
            <li>
           1 cup of mango squares</li>
            <li>1/2 cup milk</li>
            <li>1/2 ice</li>
            <li>1/4 cup yogurt</li>
            <li>1 tablespoon honey</li>
            Put all the ingredients in a blender and process until ready. Pour into your glass and enjoy!
            </Text>

            <Image source={require('../asset/mango-smoothie-2.jpg')} style = {{width:200, height:200}}/>
         

          <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('SmoothieScreen')}>
              <Text style={{ fontSize:20, color:"black", fontFamily: "Tino Devanagari Sanskrit"}}>Back</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    backgroundColor: "yellow",
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 200,
    height: 50,
    backgroundColor: '#0D98BA',
  },
});
