import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

export default class IceCream extends React.Component{
  render(){
    return(
      <View style = {{backgroundColor: "yellow"}}>
            <Text style ={{fontFamily: "Tino Devanagari Hindi", color: "black", fontSize: 20}}>

         Ice Cream: 
         An Ice Cream is a classic type of desert. It is tasty and can be eaten whenever you want. To make 6 icecreams, you need:
          <li>
             1 ½ cups	Milk</li>
        <li>1 ½ cups	Heavy Cream</li>
         <li>⅔ cup	Sugar</li>
        <li>1 tablespoon	Vanilla Extract</li>
        <li>1/10 teaspoon Salt</li>
             {"\n"}
             Step 1:
             Stir together your ice cream mixture and pour it into an 8-10 inch square baking pan.
             {"\n"}
             Step 2:
             FIRST FREEZE: Place it in the freezer for 90 minutes. Remove from the freezer and whisk the mixture, scraping the sides of the pan and breaking up any frozen chunks. Return the pan to the freezer and continue freezing.
             {"\n"}
             Step 3:
             SECOND FREEZE: Check it again after 45 minutes. Remove from the freezer and whisk the mixture, scraping the sides of the pan well. Use a sturdy whisk to whip the mixture a bit as it begins to freeze. Make sure you're scraping the edges completely every time. Return to the freezer as quickly as possible after whisking the mixture each time.
             {"\n"}
             Step 4:
             ADDITIONAL FREEZING STEPS: Continue freezing the mixture, checking it again after 30 minutes. Remove from the freezer and whisk the mixture, scraping the sides of the pan well. Use a sturdy whisk to whip the mixture a bit as it begins to freeze. Make sure you're scraping the edges completely every time. Return to the freezer as quickly as possible after whisking the mixture. Repeat this process 2 more times, every 30 minutes. After a couple of hours, it should be thickening to a slushy soft-serve consistency
             {"\n"}
             Step 5:
             Continue breaking the ice cream up and stirring it until you like the texture. The longer that you whisk the ice cream and continue breaking it up as it freezes, it will create an airier or fluffier final product. Ice cream without a machine typically takes 3-4 hours to freeze to a soft-serve consistency. 
             {"\n"}
             Put in a cone and enjoy!
            </Text>

            <Image source={require('../asset/vannila.jpg')} style = {{width:200, height:200}}/>
         

          <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('DesertScreen')}>
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
