import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

export default class GardenChickpeaSalad extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: 'yellow' }}>
      <Text style ={{fontFamily: "Tino Devanagari Hindi", color: "black", fontSize: 20}}>
          Garden Chickpea Salad: The Garden Chickpea Salad is a savory and tasty saalad burtsing with flavor. It is easy to make, and does not need any hard-to-find ingredients! To make it, you need:
          <li>1 avacado (cut in bite-sized pieces)</li>
          <li>2 cups of sliced baby tomatoes</li>
          <li>2 cups of sliced cucumbers</li>
          <li>4 onions, thinly sliced</li>
          <li>1 can(19 ounces)of Chickpeas </li>
          <li>¾ cup	Green Bell Pepper (diced)</li>
          <li>½ cup	Fresh Parsley (chopped)</li>
          <li>¼ cup	Red Onion (sliced)</li>
          <li>¼ cup	Olive Oil</li>
          <li>2 tablespoons	Red Wine Vinegar</li>
          <li>½ teaspoon	Cumin</li>
          Add salt and pepper as needed. Then, pour in a bowl and enjoy!
        </Text>

        <Image source={require('../asset/Garden-Chickpea-Salad.jpg')} style = {{width:200, height:200}}/>

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
