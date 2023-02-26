import {  CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";

import Home from "../Screens/Home";
import Product from "../Screens/Product";

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="Product"
        component={Product}
      />
    </Navigator>
  )
}