import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => (
  <Tabs screenOptions={{ headerShown: false }}>
    <Tabs.Screen name="index" options={{ tabBarLabel: "Home" }} />
    <Tabs.Screen
      name="subscriptions"
      options={{ tabBarLabel: "Subscriptions" }}
    />
    <Tabs.Screen name="insights" options={{ tabBarLabel: "Insights" }} />
    <Tabs.Screen name="settings" options={{ tabBarLabel: "Settings" }} />
    <Tabs.Screen name="/subscriptions/[id]" options={{}} />
  </Tabs>
);

export default TabsLayout;
