import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

export default class MushroomBean extends React.Component{
  render(){
    return(
      <View style = {{backgroundColor: "yellow"}}>
            <Text style ={{fontFamily: "Tino Devanagari Hindi", color: "black", fontSize: 20}}>

         Mushroom Bean Burger: 
         A Mushroom Bean burger is a burger that consists of mushrooms, beans, and veggies. To make 4 burgers, you need:
          <li>
             1 (15-ounce) can pinto beans, drained</li>
      <li>1 teaspoon minced fresh parsley</li>
         <li>Kosher salt, to taste</li>
        <li>Freshly ground black pepper, to taste</li>
        <li>4 hamburger buns</li>
         <li>Baby spinach, sliced tomatoes, sliced cucumbers, for serving</li>
         <li>3 tablespoons canola oil, or vegetable oil, divided</li>
         <li>1 small white or yellow onion, diced</li>
         <li>1 clove garlic, minced</li>
         <li>3 green onions, diced</li>
         <li>1/2 teaspoon cumin</li>
         <li>3/4 cup diced mushrooms</li>
         <li>2 tablespoons warm water</li>
             Heat the bread. Add all of the toppings. Put on plate,and, enjoy!
            </Text>

            <Image source={require('../asset/mushroom-bean-burger.jpg')} style = {{width:200, height:200}}/>
         

          <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('BurgerScreen')}>
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
    width: 200,
    height: 50,
    backgroundColor: '#0D98BA',
  },
});
