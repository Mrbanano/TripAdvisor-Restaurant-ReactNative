import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, View } from 'react-native'


import Restaurants from '../screens/Restaurants'
import Favorites from '../screens/Favorites'
import Top from '../screens/TopRestaurants'
import Account from '../screens/Account'
import Search from '../screens/Search'

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Restaurants"
          component={Restaurants}
          options={{ title: "Restaurantes" }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{ title: "Favoritos" }}
        />
        <Tab.Screen
          name="Top"
          component={Top}
          options={{ title: "Ranking" }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{ title: "Buscar" }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{ title: "Perfil" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation

const styles = StyleSheet.create({})
