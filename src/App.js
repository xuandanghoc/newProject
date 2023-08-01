import "./App.css";
import Header from "../src/components/home/Header";
import Home from "../src/components/home/Home";
import Shop from "../src/components/shopPage/Shop";
import React from "react";
import { NavigationContainer } from 'react-navigation/native';
import { createStackNavigator } from 'react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Shop" component={Shop} />
      </Stack.Navigator>
    </NavigationContainer>
      
    </div>
  );
}

export default App;
