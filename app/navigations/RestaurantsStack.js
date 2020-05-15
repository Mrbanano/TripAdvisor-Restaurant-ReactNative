import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Restaurant from "../screens/Restaurants";

const Stack = createStackNavigator();

const RestaurantsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="restaurants"
        component={Restaurant}
        options={{ title: " Restaurantes" }}
      />
    </Stack.Navigator>
  );
};

export default RestaurantsStack;

