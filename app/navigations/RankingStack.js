import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Ranking from "../screens/TopRestaurants";

const Stack = createStackNavigator();

const RankingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Ranking"
        component={Ranking}
        options={{ title: "Ranking" }}
      />
    </Stack.Navigator>
  );
};

export default RankingStack;
