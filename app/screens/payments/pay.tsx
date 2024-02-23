import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";

const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  // Your Home screen component
  return <Text>Good orning</Text>;
}

function SettingsScreen() {
  // Your Settings screen component
  return <Text>Hello</Text>;
}

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
