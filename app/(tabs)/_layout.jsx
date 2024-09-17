import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Colors } from "../../constants/Colors";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.links,
        tabBarStyle: {
          backgroundColor: Colors.dark.header,
        },
        tabBarLabelStyle: {
          fontFamily: "pop-bold",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
          headerStyle: {
            backgroundColor: Colors.dark.header,
            borderBottomColor: Colors.dark.header,
          },
          headerTintColor: Colors.dark.text,
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: "Products",
          tabBarLabel: "Products",
          tabBarIcon: ({ color }) => (
            <Feather name="shopping-bag" size={24} color={color} />
          ),
          headerStyle: {
            backgroundColor: Colors.dark.header,
            borderBottomColor: Colors.dark.header,
          },
          headerTintColor: Colors.dark.text,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarLabel: "Contact",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="contact-card" size={24} color={color} />
          ),
          headerStyle: {
            backgroundColor: Colors.dark.header,
            borderBottomColor: Colors.dark.header,
          },
          headerTintColor: Colors.dark.text,
        }}
      />
    </Tabs>
  );
}
