import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

export default class Cupcake extends React.Component{
  render(){
    return(
      <View style = {{backgroundColor: "yellow"}}>
            <Text style ={{fontFamily: "Tino Devanagari Hindi", color: "black", fontSize: 20}}>
         Cupcake: 
         A cupcake is a very taty desert. It is eaten most at parties, and is a smaller version of a cake. To make 12 cupcakes, you need:
          <li>
            2 cups flour</li>
        <li>2 1/2 teaspoons baking powder</li>
        <li>1/4 teaspoon salt</li>
        <li>1 cup whole milk</li>
        <li>1 tablespoon apple cider vinegar</li>
        <li>1 cup granulated sugar</li>
        <li>1/2 cup unsalted butter</li>
        <li>1 teaspoon pure vanilla extract</li>
             {"\n"}
             Step 1:
             Preheat oven to 350º F Line a cupcake pan with 12 cupcake liners.
             {"\n"}
             Step 2:
             Sift the flour, baking powder, and salt together into a large bowl. 
             {"\n"}
             Step 3:
             In a mixing bowl or liquid measuring cup, combine milk and vinegar. 
             {"\n"}
             Step 4:
             Using an electric hand mixer or a stand mixer, beat butter until creamy and pale on medium-high speed, about 3 – 4 minutes. Add the sugar and beat on high speed for 2 minutes until creamed and pale, scraping down the sides and up the bottom of the bowl with a rubber spatula as needed. Then add vanilla; continue beating to combine, about 1 minute. 
             {"\n"}
             Step 5:
             Turn the mixer to low and add the flour mixture in three batches, alternating with milk mixture, beginning and ending with the flour mixture; beat until just combined, about 30 – 45 seconds. Do not overmix.
             {"\n"}
             Step 6:
             Divide batter evenly among liners, about three-quarters full each.
             Step 7:
             Bake for 18 – 22 minutes, or until a toothpick inserted in the center comes out clean. Cool pan on wire racks for 5 minutes, then remove cupcakes from pan, place back on the cooling rack, and cool to room temperature before frosting, about 1 hour. These cupcakes won't brown as much as cupcakes made with eggs, so when you see the top set (after 15 min), check the cupcakes if they are done with the toothpick test.
            </Text>

            <Image source={require('../asset/cupcake.jpg')} style = {{width:200, height:200}}/>
         

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
