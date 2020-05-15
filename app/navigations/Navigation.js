import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, View } from 'react-native'


import RestaurantsStack from '../navigations/RestaurantsStack'
import FavoriteStack from '../navigations/FavoriteStack'
import RankingStack from '../navigations/RankingStack'
import SearchStack from '../navigations/SearchStack'
import AccountStak from '../navigations/AccountStack'


const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Restaurants"
          component={RestaurantsStack}
          options={{ title: "Restaurantes" }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoriteStack}
          options={{ title: "Favoritos" }}
        />
        <Tab.Screen
          name="Top"
          component={RankingStack}
          options={{ title: "Ranking" }}
        />
        <Tab.Screen
          name="Search"
          component={SearchStack}
          options={{ title: "Buscar" }}
        />
        <Tab.Screen
          name="Account"
          component={AccountStak}
          options={{ title: "Perfil" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation

const styles = StyleSheet.create({})
