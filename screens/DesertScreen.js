import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';

export default class DesertScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('IceCream')}>
              <Text style={{ fontSize:20, color:"black",fontFamily: "Tino Devanagari Sanskrit"}}>Ice Cream</Text>
        </TouchableOpacity>

         <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('IceCreamSandwich')}>
              <Text style={{ fontSize:20, color:"black",fontFamily: "Tino Devanagari Sanskrit"}}>Ice Cream Sandwich</Text>
        </TouchableOpacity>

        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Cupcake')}>
              <Text style={{ fontSize:20, color:"black",fontFamily: "Tino Devanagari Sanskrit"}}>Cupcake</Text>
        </TouchableOpacity>

        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:20, color:"black",fontFamily: "Tino Devanagari Sanskrit"}}>Back</Text>
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