import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// You can import from local files
import HomeScreen from './screens/HomeScreen';
import SaladScreen from './screens/SaladScreen';
import SmoothieScreen from './screens/SmoothieScreen';
import BurgerScreen from './screens/BurgerScreen';
import DesertScreen from './screens/DesertScreen';
import FruitSalad from './screens/Salads/FruitSalad';
import QuinoaSalad from './screens/Salads/QuinoaSalad';
import GardenChickpeaSalad from './screens/Salads/GardenChickpeaSalad';
import FruitSmoothie from './screens/Smoothies/FruitSmoothie';
import PeanutButterBanana from './screens/Smoothies/PeanutButterBanana';
import MangoSmoothie from './screens/Smoothies/MangoSmoothie';
import VeggieBurger from './screens/Burgers/VeggieBurger';
import MushroomBean from './screens/Burgers/MushroomBean';
import QuinoaBean from './screens/Burgers/QuinoaBean';
import IceCream from './screens/Deserts/IceCream';
import IceCreamSandwich from './screens/Deserts/IceCreamSandwich';
import Cupcake from './screens/Deserts/Cupcake';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  SaladScreen: SaladScreen,
  SmoothieScreen: SmoothieScreen,
  BurgerScreen: BurgerScreen,
  DesertScreen: DesertScreen,
  FruitSalad: FruitSalad,
  QuinoaSalad: QuinoaSalad,
  GardenChickpeaSalad: GardenChickpeaSalad,
  FruitSmoothie: FruitSmoothie,
  PeanutButterBanana: PeanutButterBanana,
  MangoSmoothie: MangoSmoothie,
  VeggieBurger: VeggieBurger,
  MushroomBean: MushroomBean,
  QuinoaBean: QuinoaBean,
  IceCream: IceCream,
  IceCreamSandwich: IceCreamSandwich,
  Cupcake: Cupcake,
});

const AppContainer = createAppContainer(AppNavigator);
