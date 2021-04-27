// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import Inicial from './componentes/Inicial';
import AdicionaItens from './componentes/AdicionaItens';
import ListaItens from './componentes/ListaItens';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Inicial" component={Inicial}/> 
            <Stack.Screen name="AdicionaItens" component={AdicionaItens}/>
            <Stack.Screen name="ListaItens" component={ListaItens}/>
        </Stack.Navigator>
    </NavigationContainer>    
    
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});