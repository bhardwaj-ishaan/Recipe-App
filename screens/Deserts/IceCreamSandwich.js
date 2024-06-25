import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

export default class IceCreamSandwich extends React.Component{
  render(){
    return(
      <View style = {{backgroundColor: "yellow"}}>
            <Text style ={{fontFamily: "Tino Devanagari Hindi", color: "black", fontSize: 20}}>

         Ice Cream Sandwich: 
         An Ice Cream Sandwich is like a smore, but you replace the marshmellows with Ice Cream. It is very tasty. To make 6 sandwiches, you need:
          <li>
            1/2 cup all-purpose flour</li>
        <li>1/2 cup Dutch process cocoa powder</li>
        <li>1/2 teaspoon fine salt</li>
        <li>1/4 teaspoon baking powder</li>
        <li>6 tablespoons unsalted butter, softened</li>
        <li>2 tablespoons shortening</li>
        <li>1 cup sugar</li>
        <li>2 large eggs</li>
        <li>1 teaspoon vanilla extract</li>
        <li>2 (1-pint) containers ice cream (any flavor)</li>
             {"\n"}
             Step 1:
             Preheat the oven to 350 degrees F. Line 2 baking sheets with parchment paper.
             {"\n"}
             Step 2:
             In a small bowl, whisk together the flour, cocoa powder, salt, and baking powder. In another bowl, beat the butter, shortening, and sugar together with an electric mixer until fluffy. Beat in the eggs and vanilla, beating until smooth. With a spoon, stir in the flour mixture, stirring just until you have a smooth dough.
             {"\n"}
             Step 3:
              Using a 2 tablespoon cookie dough scoop, drop 6 mounds of dough on each baking sheet, leaving a couple inches between each cookie. Bake until the cookies are firm around the edges and soft in the middle, about 15 minutes. (For even baking, rotate the pans from top to bottom and back to front halfway through baking.) Using a spatula, transfer the cookies to a wire rack and cool completely.
             {"\n"}
             Step 4:
             Meanwhile, turn the ice cream pints on their sides and use a serrated knife to slice through the containers, cutting each into 3 even rounds. Place the ice cream disks on a baking sheet and freeze until ready to assemble the sandwiches.
             {"\n"}
             Step 5:
             To assemble, peel the cardboard from the ice cream disks and sandwich each disk between 2 cookies. Serve the sandwiches immediately, or wrap individually in plastic wrap and freeze up to 1 week.
             {"\n"}
             Put on a plate and enjoy!
            </Text>

            <Image source={require('../asset/ice-cream-sand.jpg')} style = {{width:200, height:200}}/>
         

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
