import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

export default class FruitSmoothie extends React.Component{
  render(){
    return(
      <View style = {{backgroundColor: "yellow"}}>
            <Text style ={{fontFamily: "Tino Devanagari Hindi", color: "black", fontSize: 20}}>

            Fruit Smoothie: 
            Fruit Smoohies are a very basic, but tasty, type of Smoothie. They are easy to make and can be made for any occasion. To make one, you need: 
            <li>
            1  banana, peeled and sliced</li>
            <li>2 cups strawberries, raspberries, or cherries</li>
            <li>1 cup milk</li>
            <li>1/2 cup plain or vanilla yogurt</li>
            <li>1/2 cup freshly squeezed orange juice</li>
            <li>2-3 tablespoons honey or to taste</li>
            Put all the ingredients in a blender and process until smooth. Pour into glasses and enjoy!
            </Text>

            <Image source={require('../asset/3756353.jpg')} style = {{width:200, height:200}}/>
         

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
