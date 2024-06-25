import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

export default class VeggieBurger extends React.Component{
  render(){
    return(
      <View style = {{backgroundColor: "yellow"}}>
            <Text style ={{fontFamily: "Tino Devanagari Hindi", color: "black", fontSize: 20}}>

         Veggie Burger: 
         A veggie burger is a classic type of burger enjoyed by everyone. It is avaliable at almost every fast-food restaurant. To make one, you would need:
            <li>
            4 slices of onion</li>
            <li>4 slices of tomato</li>
            <li>4 slices of cucumber</li>
            <li>2 cheese slices</li>
            <li>2 buns/bread slices</li>
            <li>Add olives as needed</li>
            <li>Add any sauce/garnish (ketchup, mayo, relish, mustard, coriander)</li>
            Heat the bread. Add all of the toppings. Put on plate,and, enjoy!
            </Text>

            <Image source={require('../asset/Vegetarian-burger.jpg')} style = {{width:200, height:200}}/>
         

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
