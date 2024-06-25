import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

import AppHeader from '../components/AppHeader';
import db from '../config';
export default class HomeScreen extends Component {
constructor(){
  super();
  this.state={
    like:0,
    dislike:0
  }
}
likeCount=()=>{
  this.setState({like:this.state.like+1});// add code here.
}
dislikeCount=()=>{
  this.setState({dislike:this.state.dislike+1});// add code here.
}
  render() {
    return (
      <View style = {styles.contai}>
        <AppHeader />
        <View style = {{backgroundColor: 'yellow'}}>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('SaladScreen')}>
              <Text style = {{fontFamily: "Tino Devanagari Sanskrit"}}>Salads</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('SmoothieScreen')}>
              <Text style = {{fontFamily: "Tino Devanagari Sanskrit"}}>Smoothies</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('BurgerScreen')}>
              <Text style = {{fontFamily: "Tino Devanagari Sanskrit"}}>Burgers</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('DesertScreen')}>
              <Text style = {{fontFamily: "Tino Devanagari Sanskrit"}}>Deserts</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={{ textAlign: 'center', margin:5 }}>Rate us</Text>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:20,}}>
             <Text>{this.state.like}</Text>
             <Text>{this.state.dislike}</Text>
             </View>
            <TouchableOpacity onPress ={this.likeCount}>
           
              <Image
                style={{ width: 50, height: 50, marginLeft: 5 }}
                source={require('../assets/thumbs-up-hand-symbol.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress ={this.dislikeCount}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  marginTop: -35,
                  marginLeft: 100,
                }}
                source={require('../assets/thumbs-down-silhouette.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
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
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
    container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    backgroundColor: "yellow",
  },
});

