/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View } from 'react-native';
import AppStyling from "./App.stylesheet";
import MenuTitle from "./components/MenuTitle/MenuTitle";
import Game from "./contexts/Game";

const App = () => {
  return (
    <Game>
      <View style={AppStyling.root}>
          <MenuTitle></MenuTitle>
      </View>
    </Game>
  )
}

export default App;
