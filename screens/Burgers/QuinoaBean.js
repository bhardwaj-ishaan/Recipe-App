import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

export default class QuinoaBean extends React.Component{
  render(){
    return(
      <View style = {{backgroundColor: "yellow"}}>
            <Text style ={{fontFamily: "Tino Devanagari Hindi", color: "black", fontSize: 20}}>

         Quina Black Bean Burger: 
         A Quinoa Black Bean burger is a burger that consists of quinoa, beans, and veggies. To make 5 burgers, you need:
          <li>
           1 (15 ounce) can black beans, rinsed and drained</li>
      <li>¼ cup quinoa</li>
       <li>½ cup water</li>
       <li>½ cup bread crumbs</li>
       <li>¼ cup minced yellow bell pepper</li>
       <li>2 tablespoons minced onion </li>
       <li>1 large clove garlic, minced</li>
        <li>1 ½ teaspoons ground cumin</li>
        <li>Any sauce</li>
             Heat the bread. Add all of the toppings. Put on plate,and, enjoy!
            </Text>

            <Image source={require('../asset/quinoa-burger.jpg')} style = {{width:200, height:200}}/>
         

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
