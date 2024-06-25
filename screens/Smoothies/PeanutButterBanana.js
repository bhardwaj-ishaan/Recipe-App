import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

export default class PeanutButterBanana extends React.Component{
  render(){
    return(
      <View style = {{backgroundColor: "yellow"}}>
            <Text style ={{fontFamily: "Tino Devanagari Hindi", color: "black", fontSize: 20}}>

            Peanut Buuter Banana Smoothie: 
         The Peanut Butter Banana Smoothie is a very unique type of smoothie. You can tell right from the name! But, it is very easy to make! To make one, you would require:
            <li>
            2 bananas, cut into small pieces</li>
            <li>2 cups of milk</li>
            <li>1/2 cup peanut butter</li>
            <li>2 tablespoons honey(or to taste, if needed)</li>
            <li>2 ice cubes</li>
            Put all the ingredients in a blender and process until done. Pour into glasses and enjoy!
            </Text>

            <Image source={require('../asset/peanut-butter-banana-smoothie-9.jpg')} style = {{width:200, height:200}}/>
         

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
