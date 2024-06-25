import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

export default class FruitSalad extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: 'yellow' }}>
       <Text style ={{fontFamily: "Tino Devanagari Hindi", color: "black", fontSize: 20}}>
          Fruit Salad: Fruit Salad is a great and easy type of salad to make. It
          is very tasty and can be eaten at any time, in any season! To make
          one, you need:
          <li>2 cups of halved strawberries</li>
          <li>2 cups of grapes</li>
          <li>2 oranges(sliced round and cut in quarters) </li>
          <li>3 kiwis (sliced round and cut in quarters) </li>
          <li>1 cup of blackberries </li>
          <li>1 cup of raspberries</li>
          <li>1 cup of blueberries</li>
          <li>3 tablespoons of citrus juice</li>
          <li>1 teaspoon citrus zest</li>
          Mix these all into a bowl and enjoy!
          <Image source={require('../asset/fruit-salad-12.jpg')} style = {{width:200, height:200}}/>
        </Text>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => this.props.navigation.navigate('SaladScreen')}>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontFamily: 'Tino Devanagari Sanskrit',
            }}>
            Back
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    backgroundColor: 'yellow',
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
