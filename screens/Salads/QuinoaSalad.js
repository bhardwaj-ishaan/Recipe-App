import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

export default class QuinoaSalad extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: 'yellow' }}>
        <Text style ={{fontFamily: "Tino Devanagari Hindi", color: "black", fontSize: 20}}>
          Quinoa Salad: The Asian Quinoa Salad is a great and tasty type of
          vegetarian salad. It is a great food to make for gatherings, parties,
          or any other type of event. To make it, you need:
          <li>2 cups of vegetable broth</li>
          <li>1 cup of quinoa</li>
          <li>1 ½ cups sliced purple cabbage</li>
          <li>1 cup chopped carrots</li>
          <li>4 onions, thinly sliced</li>
          To make the dressing(optional), you need:
          <li>1 ½ tablespoons rice wine vinegar</li>
          <li>1 tablespoon vegetable oil</li>
          <li>2 teaspoons sriracha sauce</li>
          <li>2 teaspoons soy sauce</li>
          <li>1 teaspoon minced fresh ginger</li>
          {'\n'}
          Bring vegetable broth to a boil in a pan. Add quinoa, reduce heat to
          medium, and simmer, stirring occasionally, until quinoa is tender and
          liquid is absorbed. It should take about 10 to 15 minutes. Remove pan
          from heat and cool. Mix cabbage, carrots, edamame, and green onions
          together in a large bowl. Whisk vinegar, oil, Sriracha sauce, soy
          sauce, and ginger together in a bowl until dressing is
          smooth; drizzle over cabbage mixture. Stir quinoa into salad and toss
          to coat. Refrigerate until chilled, at least 30 minutes(if needed).
        </Text>

        <Image source={require('../asset/quinoa.png')} style = {{width:200, height:200}}/>

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
